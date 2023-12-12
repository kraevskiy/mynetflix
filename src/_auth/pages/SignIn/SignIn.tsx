import classes from './SignIn.module.scss';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInInputs, SignInSchema } from '@/lib/validation/sign-in.validation';
import { paths } from '@/routes/paths.ts';
import { signUpFirebase } from '@/lib/firebase/requests.ts';

const SignIn= () => {
	const {register, handleSubmit} = useForm<SignInInputs>({
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: '',
			password: ""
		}
	});

	const submitHandler = async (data: SignInInputs) => {
		const res = await signUpFirebase(data);
		console.log(res);
	}

	return (
		<div className={classes.signIn}>
			<div className={classes.signIn__bg}>
				<img className={classes.signIn__logo} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
				<div className={classes.signIn__content}>
					<h1 className={classes.signIn__title}>Sign In</h1>
					<form className={classes.signIn__form} onSubmit={handleSubmit(submitHandler)}>
						<input type="email" placeholder="Email" {...register('email')}/>
						<input type="password" placeholder="Password" {...register('password')}/>
						<button>Sign In</button>
					</form>
					<div>New to Netflix? <NavLink to={paths.signUp} >Sign up now.</NavLink></div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
