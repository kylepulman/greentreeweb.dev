export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		for (const [key, value] of formData.entries()) {
			console.log(key, value);
		}
	}
};
