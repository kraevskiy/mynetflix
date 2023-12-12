import { User } from 'firebase/auth';
import { TUser } from '@/store/user/user.state.ts';

export const convertUserFromFirebase = (user: User): TUser => ({
	email: user.email,
	emailVerified: user.emailVerified,
	photoURL: user.photoURL,
	displayName: user.displayName,
	phoneNumber: user.phoneNumber,
	uid: user.uid
})
