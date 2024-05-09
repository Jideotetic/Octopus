import authProvider from "../auth";

export default async function authenticationLoader() {
  const fetchClasses = new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("loading"));
    }, 3000);
  });

  const res = await fetchClasses;
  return { email: authProvider.email, res };
}
