import { store } from '@/store/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from '@/routes/AppRoutes';
import { useEffect } from 'react';
import { auth } from '@/lib/firebase/firebase';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { login, logout } from '@/store/user/userSlice';
import { convertUserFromFirebase } from '@/helpers/convert-user-from-firebase';


function App() {
	const dispatch = useAppDispatch();
	const {isAutologinLoading} = useAppSelector(state => state.user);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				dispatch(login(convertUserFromFirebase(userAuth)))
			} else {
				dispatch(logout());
			}
		})

		return () => unsubscribe();
	}, []);

	return (
		<BrowserRouter>
			{
				isAutologinLoading ? <div>
					Loading...
				</div> : <AppRoutes />
			}
		</BrowserRouter>
	)
}

function AppWithStore () {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	)
}

export default AppWithStore;
