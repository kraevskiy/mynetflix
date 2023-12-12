import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, TUser } from '@/store/user/user.state.ts';
import { RootState } from '@/store/store.ts';

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<TUser>) => {
			state.user = action.payload;
			state.isLoggedIn = true;
			state.isAutologinLoading = false;
		},
		logout: (state) => {
			state.user = null;
			state.isLoggedIn = false;
			state.isAutologinLoading = false;
		}
	},
	extraReducers: () => {
	},
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
