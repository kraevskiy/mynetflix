import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithCustomToken} from 'firebase/auth';
import { auth } from '@/lib/firebase/firebase';
import { SignInInputs } from '@/lib/validation/sign-in.validation';

export async function signUpFirebase(data: SignInInputs) {
	return createUserWithEmailAndPassword(auth, data.email, data.password).then(res => res.user);
}

export async function signInFirebase(data: SignInInputs) {
	return signInWithEmailAndPassword(auth, data.email, data.password);
}

export async function signInTokenFirebase(token: string) {
	return signInWithCustomToken(auth, token);
}
