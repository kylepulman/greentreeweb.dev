<script>
	import { Footer } from '$lib/Footer';
	import { Header } from '$lib/Header';
	import '../app.css';
</script>

<Header />
<slot />
<Footer
	content={{
		title: 'Greentree Web Development',
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
					label: 'Blog',
					action: '/blog'
				},
				{
					label: 'Contact',
					action: '/contact'
				}
			]
		},
		services: {
			header: {
				heading: 'Services'
			},
			items: [
				{
					heading: 'Web Design'
				},
				{
					heading: 'Website Maintenance'
				},
				{
					heading: 'SEO Services'
				},
				{
					heading: 'Content Creation'
				},
				{
					heading: 'Logo Design'
				}
			]
		},
		year: new Date().getFullYear()
	}}
/>
