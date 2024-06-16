export const load = () => {
	return {
		page: {
			title: 'Contact Us',
			description: 'Description for Contact page.'
		}
	};
};

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		for (const [key, value] of formData.entries()) {
			console.log(key, value);
		}
	}
};
