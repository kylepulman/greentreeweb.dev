export { default as Chips } from './index.svelte';

export type ChipsShape = {
	action: string;
	label: string;
	icon?: {
		source?: string;
	};
}[];
