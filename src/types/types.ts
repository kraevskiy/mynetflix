export type MovieType = {
	backdrop_path: string;
	first_air_date: string;
	genre_ids: number[];
	id: number;
	name?: string;
	title?: string;
	origin_country: string[];
	original_language: string;
	original_name:string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
	adult?: boolean;
	video?: boolean;
}
