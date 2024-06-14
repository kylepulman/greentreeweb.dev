type Header = {
	title: string;
	navigation: {
		label: string;
		action: string;
	}[];
};

export const content: Header = {
	title: 'Greentree Web\nDevelopment',
	navigation: [
		{
			label: 'Home',
			action: '/'
		},
		{
			label: 'About',
			action: '/about'
		},
		{
			label: 'Services',
			action: '/services'
		},
		{
			label: 'Portfolio',
			action: '/portfolio'
		},
		{
			label: 'Blog',
			action: '/blog'
		},
		{
			label: 'Contact',
			action: '/contact'
		}
	]
}

export { default as Header } from './index.svelte';
