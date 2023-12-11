/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Initialize Firebase
const app = initializeApp(firebaseConfig);

 */
import { store } from '@/store/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from '@/routes/AppRoutes.tsx';

function App() {

	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppRoutes />
			</Provider>
		</BrowserRouter>
	)
}

export default App
