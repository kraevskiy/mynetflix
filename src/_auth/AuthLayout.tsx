import { Navigate, Outlet } from 'react-router-dom';
import { paths } from '@/routes/paths';
import classes from './AuthLayout.module.scss';
import { useAppSelector } from '@/hooks';

const bgImage = 'https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png'

const AuthLayout = () => {
	const isAuthenticated = useAppSelector(state => state.user.isLoggedIn);

	return (
		<div className={classes.auth} style={{
			backgroundImage: `url(${bgImage})`
		}}>
			{isAuthenticated ? (
				<Navigate to={paths.home} />
			) : (
				<Outlet />
			)}
		</div>
	);
};

export default AuthLayout;
