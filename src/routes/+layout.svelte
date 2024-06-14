<script lang="ts">
	import { page } from '$app/stores';
	import { Footer } from '$lib/Footer';
	import { Header } from '$lib/Header';
	import '../app.css';

	let pageTitle: string | undefined = undefined;

	$: {
		if ($page.url.pathname === '/about') {
			pageTitle = 'About Us';
		} else if ($page.url.pathname === '/services') {
			pageTitle = 'Our Services';
		} else if ($page.url.pathname === '/portfolio') {
			pageTitle = 'Our Portfolio';
		} else if ($page.url.pathname === '/contact') {
			pageTitle = 'Contact Us';
		} else {
			pageTitle = undefined;
		}
	}
</script>

<Header {pageTitle} />
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
