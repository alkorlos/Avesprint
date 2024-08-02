import {
	EMAIL_APP_USER,
	EMAIL_APP_PASSWORD
} from '$env/static/private';

import nodemailer from 'nodemailer';

export const emailTransporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	auth: {
		user: EMAIL_APP_USER,
		pass: EMAIL_APP_PASSWORD
	}
});
