const apiRequests = {
	trending: `/trending/all/week?api_key=${import.meta.env.VITE_MOVIEBD_API_KEY}&language=en-US`,
	netflix: `/discover/tv?api_key=${import.meta.env.VITE_MOVIEBD_API_KEY}&with_networks=213`,
	topRated: `/movie/top_rated?api_key=${import.meta.env.VITE_MOVIEBD_API_KEY}&language=en-US`,
	actionMovie: `/discover/movie?api_key=${import.meta.env.VITE_MOVIEBD_API_KEY}&with_genres=28`,
	comedyMovie: `/discover/movie?api_key=${import.meta.env.VITE_MOVIEBD_API_KEY}&with_genres=35`,
	horrorMovie: `/discover/movie?api_key=${import.meta.env.VITE_MOVIEBD_API_KEY}&with_genres=27`,
	romanceMovie: `/discover/movie?api_key=${import.meta.env.VITE_MOVIEBD_API_KEY}&with_genres=10749`,
	documentsMovie: `/discover/movie?api_key=${import.meta.env.VITE_MOVIEBD_API_KEY}&with_genres=99`,
}

export default apiRequests;
