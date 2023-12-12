import { Navigate, Outlet } from 'react-router-dom';
import { Nav } from '@/components/shared';
import classes from './RootLayout.module.scss';
import { paths } from '@/routes/paths.ts';
import { useAppSelector } from '@/hooks';

const RootLayout = () => {
	const isAuthenticated = useAppSelector(state => state.user.isLoggedIn);

	return (
		<div className={classes.root}>
			{!isAuthenticated ? (
				<Navigate to={paths.signIn} />
			): (
				<>
					<Nav />
					<Outlet />
				</>
			)}
		</div>
	);
};

export default RootLayout;
