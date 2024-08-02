import { json } from '@sveltejs/kit';

export const GET = async () => {
	try {
		const response = await fetch(
			'https://medium.com/feed/avesprint'
		);

		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}

		const data = await response.text();

		return json({ data });
	} catch (error) {
		console.error(error);

		return { error: 'Unable to fetch data' };
	}
};
