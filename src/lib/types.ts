import type { ContentShape } from './Content';
import type { VisualShape } from './Visual';

export type ContentBlock = {
	order: (keyof ContentShape)[];
	raw: ContentShape;
	content: Map<keyof ContentShape, ContentShape[keyof ContentShape]>;
	visual: VisualShape;
};

export type CallsToAction = {
	label: string;
	action: string;
}[];
