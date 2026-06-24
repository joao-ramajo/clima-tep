import nodemailer from "nodemailer";

export const send = async (message: Record<string, string>) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
	});

	await transporter.sendMail(message);
};
