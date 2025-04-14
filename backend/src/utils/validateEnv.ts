import { cleanEnv, str } from "envalid";

export default cleanEnv(process.env, {
  MONGO_CONNECTION_STRING: str(),
  JWT_SECRET: str(),
  STRIPE_SECRET: str(),
});
