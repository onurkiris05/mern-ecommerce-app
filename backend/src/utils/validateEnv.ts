import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
  MONGO_CONNECTION_STRING: str(),
  PORT: port(),
  JWT_SECRET: str(),
  STRIPE_SECRET: str(),
});
