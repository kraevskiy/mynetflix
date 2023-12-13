import { Timestamp } from 'firebase/firestore';

export type MovieType = {
	backdrop_path: string;
	first_air_date: string;
	genre_ids: number[];
	id: number;
	name?: string;
	title?: string;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	vote_average: number;
	vote_count: number;
	adult?: boolean;
	video?: boolean;
}


export type PriceType = {
	id: string;
	active: boolean;
	billing_scheme: string;
	currency: string;
	description: string | null;
	interval: string;
	interval_count: number;
	metadata: Record<string, unknown>;
	product: string;
	recurring: {
		usage_type: string;
		aggregate_usage: string | null;
		interval: string;
		interval_count: number;
		trial_period_days: number | null;
	};
	tax_behavior: string;
	tiers: string | null;
	tiers_mode: string | null;
	transform_quantity: string | null;
	trial_period_days: number | null;
	type: string;
	unit_amount: string;
}

export type ProductType = {
	active: boolean;
	description: string;
	images: string[];
	metadata: Record<string, unknown>;
	name: string;
	role: string | null;
	tax_code: string | number | null;
}

export type ProductFrontType = {
	id: string;
	price: PriceType | null;
} & ProductType

export type SubscriptionUserType = {
	cancel_at: string | null;
	cancel_at_period_end: string | null;
	canceled_at: string | null;
	created: Timestamp;
	current_period_end: Timestamp;
	current_period_start: Timestamp;
	ended_at: string | null;
	id: string;
	items: {
		billing_thresholds: string | null;
		created: Date;
		id: string
		metadata: Record<string, unknown>;
		object: string;
		plan: {
			aggregate_usage: null | string;
			product: string;
			interval: string;
			created: Date;
			usage_type: string;
		}
		price: {
			lookup_key: null | string,
			active: boolean;
			tax_behavior: string;
			billing_scheme: string;
			tiers_mode: null
		}
		quantity: number;
		subscription: string
	}[];
	metadata: Record<string, unknown>;
	price: unknown;
	prices: unknown;
	product: unknown;
	quantity: number;
	role: 'standart' | 'basic' | 'premium';
	status: string;
	stripeLink: string;
	trial_end: Date | null;
	trial_start: Date | null;
}
