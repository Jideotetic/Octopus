import { LoaderFunctionArgs, redirect } from "react-router-dom";

export default async function forgotPasswordAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email");

  console.log(email);

  return redirect("/verify-otp");
}
