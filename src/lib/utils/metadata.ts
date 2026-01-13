import { setPageMetadata, resetPageMetadata } from '$lib/stores/pageMetadata';
import { onDestroy } from 'svelte';

/**
 * Helper function to set page metadata in any route
 * Automatically resets to default when component is destroyed
 * 
 * @example
 * ```svelte
 * <script>
 *   import { usePageMetadata } from '$lib/utils/metadata';
 *   
 *   usePageMetadata({
 *     title: 'Digital Archaeology | Artdao',
 *     description: 'Exploring retro digital aesthetics...'
 *   });
 * </script>
 * ```
 */
export function usePageMetadata(metadata: {
	title?: string;
	description?: string;
	ogImage?: string;
	canonical?: string;
}) {
	setPageMetadata(metadata);
	
	onDestroy(() => {
		resetPageMetadata();
	});
}

