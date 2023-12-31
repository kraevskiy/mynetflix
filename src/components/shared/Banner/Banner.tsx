import classes from './Banner.module.scss';
import { useEffect, useState } from 'react';
import axios from '@/lib/api/axios.ts';
import apiRequests from '@/lib/api/api.requests.ts';
import { MovieType } from '@/types/types.ts';
import { getOriginalUrlImage, truncateText } from '@/helpers';

const Banner = () => {
	const [movie, setMovie] = useState<null | MovieType>(null);

	const fetchData = async () => {
		const request = await axios.get(apiRequests.netflix);
		setMovie(request.data.results[
			Math.floor(Math.random() * request.data.results.length - 1)
			]);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={classes.banner} style={{
			backgroundImage: `url(${getOriginalUrlImage(movie?.backdrop_path || '')})`
		}}>
			<div className={classes.banner__fadeBottom}/>

			<div className={classes.banner__contents}>
				<h1 className={classes.banner__title}>{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className={classes.banner__buttons}>
					<button className={classes.banner__button}>
						Play
					</button>
					<button className={classes.banner__button}>
						My list
					</button>
				</div>
				<div className={classes.banner__description}>
					{truncateText(movie?.overview || '', 150)}
				</div>
			</div>
		</div>
	);
};

export default Banner;
