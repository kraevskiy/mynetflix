import cn from 'classnames';
import classes from './Nav.module.scss';
import { useEffect, useState } from 'react';

const Nav = () => {
	const [show, setShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 70) {
			setShow(true);
		} else {
			setShow(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);

		return () => window.removeEventListener('scroll', transitionNavBar);
	}, [])


	return (
		<div className={cn(classes.nav, {
			[classes.nav__black]: show
		})}>
			<div className={classes.nav__contents}>
				<img className={classes.nav__logo} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
				<img className={classes.nav__avatar} src="https://i.pravatar.cc/400" alt="" />
			</div>
		</div>
	);
};

export default Nav;
