import dotenv from "dotenv";

import { getEnv } from "../../common/utils/get.env.js";

dotenv.config();
const appConfig = () => ({
  NODE_ENV: getEnv("NODE_ENV", "development"),
  PORT: getEnv("PORT", 3000),
});

export const envConfig = appConfig();
