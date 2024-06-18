import type { BlockHeaderShape } from '$lib/_BlockHeader';
import type { ArticleShape } from '$lib/types';

export { default as Cards } from './index.svelte';

export type CardShape = {
	header?: BlockHeaderShape;
	articles: ArticleShape[];
};
