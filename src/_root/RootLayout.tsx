import { Outlet } from 'react-router-dom';
import { Nav } from '@/components/shared';
import classes from './RootLayout.module.scss';

const RootLayout = () => {
	return (
		<div className={classes.root}>
			<Nav />
			{/*Banner*/}
			<Outlet />
		</div>
	);
};

export default RootLayout;
