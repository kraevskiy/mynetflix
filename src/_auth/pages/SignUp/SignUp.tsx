import classes from './SignUp.module.scss';
import { useForm } from 'react-hook-form';
import { SignUpInputs, SignUpSchema } from '@/lib/validation/sign-up.validation.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { paths } from '@/routes/paths.ts';

const SignUp = () => {
	const navigate = useNavigate();
	const {register, handleSubmit} = useForm<SignUpInputs>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			email: ''
		}
	})

	const submitHandler = async (data: SignUpInputs) => {
		console.log(data);
	}


	return (
		<div className={classes.signUp}>
			<div className={classes.signUp__bg}>
				<img
					className={classes.signUp__logo} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
					alt="" />
				<button className={classes.signUp__button} onClick={() => navigate(paths.signIn)}>Sign In</button>
				<div className={classes.signUp__contents}>
					<h1 className={classes.signUp__title}>Unlimited films, TV programmes and more</h1>
					<p className={classes.signUp__subtitle}>Watch anywhere. Cancel at any time.</p>
					<p className={classes.signUp__text}>Ready to watch? Enter your email to create or restart your membership.</p>
					<form className={classes.signUp__form} onSubmit={handleSubmit(submitHandler)}>
						<input type="email" placeholder="Email Address" {...register('email')}/>
						<button type="submit">GET STARTED</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
