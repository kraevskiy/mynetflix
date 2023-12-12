import apiRequests from '@/lib/api/api.requests.ts';

type TRow = { title: string; fetchUrl: string; isLargeRow?: boolean };

export const homeRows: TRow[] = [
	{
		title: 'NETFLIX ORIGINAL',
		fetchUrl: apiRequests.netflix,
		isLargeRow: true
	},
	{
		title: 'Trending now',
		fetchUrl: apiRequests.trending,
	},
	{
		title: 'Top Rated',
		fetchUrl: apiRequests.topRated,
	},
	{
		title: 'Action Movies',
		fetchUrl: apiRequests.actionMovie,
	},
	{
		title: 'Comedy Movies',
		fetchUrl: apiRequests.comedyMovie,
	},
	{
		title: 'Horror Movies',
		fetchUrl: apiRequests.horrorMovie,
	},
	{
		title: 'Romance Movies',
		fetchUrl: apiRequests.romanceMovie,
	},
	{
		title: 'Documentaries',
		fetchUrl: apiRequests.documentsMovie,
	},
]
