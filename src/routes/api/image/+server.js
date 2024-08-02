import {
	ALLOWED_DOMAIN_IMAGE
} from '$env/static/private';

export const GET = async ({ request, url }) => {
	try {
		const referer = request.headers.get('referer');

		if (referer && !referer.startsWith(ALLOWED_DOMAIN_IMAGE)) {
			return new Response('Access denied', { status: 403 });
		}

		const targetUrl = url.searchParams.get('url');
		const allowedUrlPattern = /^https:\/\/cdn-images-\d+\.medium\.com\/.*$/;

		if (!allowedUrlPattern.test(targetUrl)) {
			return new Response('URL not allowed', { status: 403 });
		}

		const response = await fetch(targetUrl);

		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}

		const contentType = response.headers.get('Content-Type');

		if (contentType && !contentType.startsWith('image/')) {
			return new Response('The URL does not lead to an image', { status: 403 });
		}

		return response;
	} catch (error) {
		console.error(error);

		return { error: 'Unable to fetch image' };
	}
};
