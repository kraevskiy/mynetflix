import {User} from 'firebase/auth';

type KeysFromUser = 'email' | 'displayName' | 'emailVerified' | 'phoneNumber' | 'photoURL' | 'uid';

export type TUser = Pick<User, KeysFromUser>;

type TUserState = {
	user: null | TUser;
	isLoggedIn: boolean;
	isAutologinLoading: boolean;
}

export const initialState: TUserState = {
	isLoggedIn: false,
	user: null,
	isAutologinLoading: true
}
