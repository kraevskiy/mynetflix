import { Navigate, Outlet } from 'react-router-dom';
import { paths } from '@/routes/paths';

const AuthLayout = () => {
	const isAuthenticated = true;

	return (
		<>
			AuthLayout
			{isAuthenticated ? (
				<Navigate to={paths.home} />
			) : (
				<Outlet />
			)}
		</>
	);
};

export default AuthLayout;
