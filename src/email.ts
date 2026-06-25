import nodemailer from "nodemailer";
import { requiredEnv } from "./utils/requireEnv.js";

export const send = async (message: Record<string, string>) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: requiredEnv("MAIL_USER"),
			pass: requiredEnv("MAIL_PASS"),
		},
	});

	await transporter.sendMail(message);
};
