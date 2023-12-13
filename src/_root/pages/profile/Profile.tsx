import classes from './Profile.module.scss';
import { useAppSelector } from '@/hooks';
import { selectUser } from '@/store/user/userSlice.ts';
import { Navigate } from 'react-router-dom';
import { paths } from '@/routes/paths.ts';
import { signOutFirebase } from '@/lib/firebase/requests.ts';
import { PlansList } from '@/components/shared';

const Profile = () => {
	const user = useAppSelector(selectUser);

	const handleSignOut = async () => {
		await signOutFirebase();
	}

	if (!user) {
		return <Navigate to={paths.signIn} />
	}

	return (
		<div className={classes.profile}>
			<div className={classes.profile__body}>
				<h1 className={classes.profile__title}>Edit Profile</h1>
				<div className={classes.profile__info}>
					<img src="https://i.pravatar.cc/400" className={classes.profile__avatar} alt="" />
					<div className={classes.profile__details}>
						<h2>{user.email}</h2>
						<div className={classes.profile__plans}>
							<h3>Plans</h3>
							<PlansList />
							<button className={classes.profile__signOut} onClick={handleSignOut}>Sign Out</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
