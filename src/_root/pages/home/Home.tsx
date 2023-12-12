import cn from 'classnames';
import classes from './Home.module.scss';
import { Banner, SliderRow } from '@/components/shared';
import { homeRows } from '@/constants/homeRows.ts';


const Home = () => {
	return (
		<div className={cn(classes.home)}>
			<Banner />
			{
				homeRows.map(r => <SliderRow key={r.title} {...r}/>)
			}
		</div>
	);
};

export default Home;
