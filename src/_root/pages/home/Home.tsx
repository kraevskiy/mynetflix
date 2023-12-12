import cn from 'classnames';
import classes from './Home.module.scss';
import Banner from '@/components/shared/Banner/Banner.tsx';


const Home = () => {
	return (
		<div className={cn(classes.home)}>
			<Banner />
		</div>
	);
};

export default Home;
