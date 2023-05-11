import { redirect } from '@sveltejs/kit';

export function load({ params, url }) {
	const category = url.pathname.split('/')[3];
	if (category === 'summary') {
		throw redirect(302, 'https://google.com');
	}
	return {
		category,
		post: params.post
	};
}
