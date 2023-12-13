import { Route, Routes } from 'react-router-dom';
import AuthLayout from '@/_auth/AuthLayout';
import RootLayout from '@/_root/RootLayout';
import { paths } from '@/routes/paths';
import { Home, Profile, Payment } from '@/_root/pages';
import { SignIn, SignUp } from '@/_auth/pages';

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path={paths.signIn} element={<SignIn />}/>
				<Route path={paths.signUp} element={<SignUp />}/>
			</Route>
			<Route element={<RootLayout />}>
				<Route path={paths.profile} element={<Profile />}/>
				<Route path={paths.paymentFail} element={<Payment />}/>
				<Route path={paths.paymentSuccess} element={<Payment />}/>
				<Route index element={<Home />}/>
			</Route>
		</Routes>
	);
};

export default AppRoutes;
