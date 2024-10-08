// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const elementIsVisibleInViewport = (el: any, partiallyVisible = false) => {
	console.log('element', el);

	if (el) {
		console.log('bounding rect', el.getBoundingClientRect());

		const { top, left, bottom, right } = el.getBoundingClientRect();
		const { innerHeight, innerWidth } = window;
		return partiallyVisible
			? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
					((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
			: top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
	}
};
