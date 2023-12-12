import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SliderRowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title?: string;
	fetchUrl?: string;
	isLargeRow?: boolean;
}
