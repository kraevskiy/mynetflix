export const truncateText = (text: string, n: number): string => {
	return text.length > n ? text.substring(0, n-1) + '...' : text;
}
