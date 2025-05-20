import { writable } from 'svelte/store';

// Initialize with a default value
export const metaballProgress = writable(0);

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getMetaballProgress = (containerRef: any) => {
	if (!containerRef) return;

	const viewportHeight = containerRef.clientHeight;
	const currentSection = Math.floor(containerRef.scrollTop / viewportHeight) + 1;
	const totalSections = Math.ceil(containerRef.scrollHeight / viewportHeight);
	const sectionProgress = (containerRef.scrollTop % viewportHeight) / viewportHeight;

	// Calculate progress as multiples of 33.33 (100/3) for each section
	const rawProgress = (currentSection - 1 + sectionProgress) * (100 / 3);
	const progress = Math.round(rawProgress / 33.33) * 33.33;

	// console.log('progress', progress);

	// Update store and dispatch event
	metaballProgress.set(progress);
};
