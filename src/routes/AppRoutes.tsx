import { Route, Routes } from 'react-router-dom';
import AuthLayout from '@/_auth/AuthLayout.tsx';
import RootLayout from '@/_root/RootLayout.tsx';
import { paths } from '@/routes/paths.ts';
import { Home } from '@/_root/pages';
import SignInForm from '@/_auth/forms/SignInForm.tsx';
import SignUpForm from '@/_auth/forms/SignUpForm.tsx';

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<AuthLayout />}>
				<Route path={paths.signIn} element={<SignInForm />}/>
				<Route path={paths.signUp} element={<SignUpForm />}/>
			</Route>
			<Route element={<RootLayout />}>
				<Route path={paths.home} element={<Home />}/>
			</Route>
		</Routes>
	);
};

export default AppRoutes;
