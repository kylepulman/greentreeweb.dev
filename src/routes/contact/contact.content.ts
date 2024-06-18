import type { ContactShape } from '$lib/Contact';
import type { HeadShape } from '../_components/Head';
import contactContent from '../_content/contactContent';

export default {
	page: {
		title: 'Contact Us',
		description: 'Description for Contact page.'
	},
	contactOne: {
		blockHeader: {
			icon: contactContent.blockHeader.icon,
			detail: ["I'd love to set up a time to learn more about your business and how I could bring value to it."]
		},
		chips: contactContent.chips,
		form: contactContent.form
	}
} satisfies {
	page: HeadShape;
	contactOne: ContactShape;
};
