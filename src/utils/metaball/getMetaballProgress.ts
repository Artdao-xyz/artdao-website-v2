import { metaballProgress } from '../../routes/artifice/store';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getMetaballProgress = (containerRef: any) => {
	if (!containerRef) return;

	const { scrollTop, scrollHeight, clientHeight } = containerRef;

	const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;

	metaballProgress.set(progress);
};
