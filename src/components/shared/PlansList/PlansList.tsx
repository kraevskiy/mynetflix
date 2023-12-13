import classes from './PlansList.module.scss';
import { useEffect, useState } from 'react';
import { getActiveSubscription, getProductsFromFirebase, getSessionToStripe } from '@/lib/firebase/requests';
import { ProductFrontType, SubscriptionUserType } from '@/types/types';
import { useAppSelector } from '@/hooks';
import { selectUser } from '@/store/user/userSlice';
import { Navigate } from 'react-router-dom';
import { paths } from '@/routes/paths';
import cn from 'classnames';

const PlansList = () => {
	const [products, setProducts] = useState<null | ProductFrontType[]>(null);
	const user = useAppSelector(selectUser);
	const [subscription, setSubscription] = useState<null | SubscriptionUserType>(null);
	const fetchData = async () => {
		const res = await getProductsFromFirebase();

		setProducts(res.sort((a, b) => (a.price && b.price) ? a.price.unit_amount < b.price.unit_amount ? -1 : 1 : 1));
	}

	const fetchDataSubscription = async (uid: string) => {
		const res = await getActiveSubscription(uid);
		if (!res) {
			return setSubscription(null)
		} else {
			const currentSubscription = res.find(s => s.status === 'active');
			setSubscription(currentSubscription || null);
		}
	}

	useEffect(() => {
		fetchData()
		if (user) {
			fetchDataSubscription(user.uid)
		}
	}, []);

	if (!user) {
		return <Navigate to={paths.signIn} />;
	}

	const loadCheckout = async (product: ProductFrontType | null) => {
		if (!product) {
			return;
		}
		await getSessionToStripe(user.uid, {
			price: product.price?.id || '',
			success_url: window.location.origin + paths.paymentSuccess,
			cansel_url: window.location.origin + paths.paymentFail,
		});
	}

	return (
		<div className={classes.plans}>
			{subscription && <p>
				Renewal date: {new Date(subscription.current_period_end.seconds * 1000).toLocaleDateString()}
			</p>}
			{
				products?.map(prod => (
					<div key={prod.id} className={classes.plans__item}>
						<div className={classes.plans__info}>
							<h5>{prod.name}</h5>
							<h6>{prod.description}</h6>
						</div>
						<button className={cn(classes.plans__button, {
							[classes.plans__buttonIsActive]: prod.role === subscription?.role
						})} onClick={() => prod.role === subscription?.role ? {} : loadCheckout(prod)}>
							{prod.role === subscription?.role ? 'Current Plan' : 'Subscribe'}
						</button>
					</div>
				))
			}
		</div>
	);
};

export default PlansList;
