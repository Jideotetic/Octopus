import { LoaderFunctionArgs, redirect } from "react-router-dom";
import authProvider from "../auth";

export default async function forgotPasswordAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email") as string;

  authProvider.email = email;

  console.log(email);

  return redirect("/verify-otp");
}
