import {
	EMAIL_APP_TO_ADDRESS
} from '$env/static/private';

import { fail } from '@sveltejs/kit';

import { emailTransporter } from '$lib/services/emailTransporter.js';

export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();

			const name = data.get('name')?.toString();
			const email = data.get('email')?.toString();

			const reason = data.get('reason')?.toString();
			const message = data.get('message')?.toString();
			const subject = data.get('subject')?.toString();

			// check spam, the value should be "speak"
			if (subject !== 'speak') {
				return {
					status: 200,
					body: {
						message: 'Email sent successfully'
					}
				};
			}

			const mailOptions = {
				from: `"${name}" <${email}>`,
				to: EMAIL_APP_TO_ADDRESS,
				subject: reason,
				text: message
			};

			const info = await emailTransporter.sendMail(mailOptions);

			return {
				status: 200,
				body: {
					message: 'Email sent successfully',
					messageId: info.messageId
				}
			};
		} catch (error) {
			return fail(500, {
				error: 'Internal server error'
			});
		}
	}
};

export const prerender = false;
