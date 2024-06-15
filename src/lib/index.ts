import type { ContentBlock } from './types';

type ProcessedContent = { content: ContentBlock['content']; visual: ContentBlock['visual'] };
export const processContent = (blocks: ContentBlock[]): ProcessedContent[] => {
	const processed: ProcessedContent[] = [];

	for (const i of blocks) {
		if (i.content && i.raw) {
			for (const j of i.order) {
				i.content.set(j, i.raw[j]);
			}

			processed.push({ content: i.content, visual: i.visual });
		}
	}

	return processed;
};
