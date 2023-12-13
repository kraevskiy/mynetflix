import classes from './Payment.module.scss';
import { useLocation } from 'react-router-dom';
import { paths } from '@/routes/paths.ts';
import { useEffect } from 'react';
import { useAppSelector } from '@/hooks';
import { selectUser } from '@/store/user/userSlice.ts';
import { getActiveSubscription } from '@/lib/firebase/requests.ts';

const Payment = () => {
	const location = useLocation();
	const user = useAppSelector(selectUser);

	const fetchData = async (uid: string) => {
		const res = await getActiveSubscription(uid);
		console.log(res);

	}

	useEffect(() => {
		if (user) {
			fetchData(user.uid)
		}
	}, []);

	return (
		<div className={classes.payment}>
			{
				location.pathname === paths.paymentSuccess ? (
					<div>
						success
					</div>
				) : (
					<div>
						fail
					</div>
				)
			}
		</div>
	);
};

export default Payment;
