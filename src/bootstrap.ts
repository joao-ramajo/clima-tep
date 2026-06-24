import { existsSync } from "node:fs";
import { loadEnvFile } from "node:process";

export const bootstrap = () => {
	if (existsSync(".env")) {
		loadEnvFile();
	}
};
