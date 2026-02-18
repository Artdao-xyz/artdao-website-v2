import { writable } from 'svelte/store';

export interface PageMetadata {
	title?: string;
	description?: string;
	ogImage?: string;
	canonical?: string;
}

const defaultMetadata: PageMetadata = {
	title: 'Artdao',
	description: 'Artists helping artists',
	ogImage: 'https://artdao.xyz/banner.png',
	canonical: 'https://artdao.xyz'
};

export const pageMetadata = writable<PageMetadata>(defaultMetadata);

export function setPageMetadata(metadata: Partial<PageMetadata>) {
	pageMetadata.update((current) => ({
		...current,
		...metadata
	}));
}

export function resetPageMetadata() {
	pageMetadata.set(defaultMetadata);
}

