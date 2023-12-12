import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import classes from './SliderRow.module.scss';
import { SliderRowProps } from '@/components/shared/SliderRow/SliderRow.props';
import axios from '@/lib/api/axios.ts';
import { MovieType } from '@/types/types.ts';
import { getOriginalUrlImage } from '@/helpers';


const SliderRow: FC<SliderRowProps> = ({title, fetchUrl, isLargeRow = false, className, ...props}) => {
	const [movies, setMovies] = useState<null | MovieType[]>(null);

	const fetchData = async () => {
		const request = await axios.get(fetchUrl || '');
		setMovies(request.data.results);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={cn(classes.row, className)} {...props}>
			<h2 className={classes.row__title}>{title}</h2>
			<div className={classes.row__posters}>
				{movies && movies.map(movie =>
					((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) &&
					(<img
							key={movie.id}
							className={cn(classes.row__poster, {
								[classes.row__posterLarge]: isLargeRow
							})}
							src={isLargeRow ?
								getOriginalUrlImage(movie.poster_path) :
								getOriginalUrlImage(movie.backdrop_path)}
							alt={movie.title || movie.name} />
					))}
			</div>
		</div>
	);
};

export default SliderRow;
