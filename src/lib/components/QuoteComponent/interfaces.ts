import type { IAboutItem } from '$lib/elements/AboutCard/interfaces';

/** One block in the zine artist-feature column: pull quote vs body copy. */
export type QuoteSegment =
	| { type: 'quote'; text: string }
	| { type: 'content'; text: string };

/**
 * Same shape as {@link IAboutItem} with optional zine layout:
 * - `segments`: alternating quote / content blocks (Figma artist feature). When set, `text` is not rendered.
 * - `quote`: legacy single pull quote below the body (when not using `segments`).
 */
export interface IQuoteItem extends IAboutItem {
	quote?: string;
	segments?: QuoteSegment[];
	/** When false, hide the large section title. Default true. */
	showSectionTitle?: boolean;
	/** When false, hide “Artist Feature” / “In conversation…” lines. Default true (only Mitchell uses both). */
	showArtistFeature?: boolean;
}
