import authProvider from "../auth";

export default async function authenticationLoader() {
  return { email: authProvider.email };
}
