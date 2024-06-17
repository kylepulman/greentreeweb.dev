export const load = async () => {
	const global = {
		title: 'Greentree Web Development',
		description: 'Business websites for home and outdoor services.',
		email: 'kyle@greentreeweb.dev',
		phone: '910-386-7339',
		navigation: {
			header: {
				heading: 'Navigation'
			},
			items: [
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
					label: 'Contact',
					action: '/contact'
				}
			]
		},
		year: new Date().getFullYear()
	};

	return {
		global
	};
};
