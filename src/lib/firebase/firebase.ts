import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/lib/firebase/config';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);
const auth = getAuth(fireApp);


export { auth };
export default db;
