import { LoaderFunctionArgs, redirect } from "react-router-dom";
import authProvider from "../auth";

interface Errors {
  email?: string;
  password?: string;
}

export default async function forgotPasswordAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email") as string;

  authProvider.email = email;

  localStorage.setItem("email", email);

  const errors: Errors = {};

  if (email === "") {
    errors.email = "Please enter your email";
  } else if (!email?.includes("@")) {
    errors.email = "Not a valid email";
  } else if (
    email.indexOf("@") === email.length - 1 ||
    email.indexOf(".") === email.length - 1
  ) {
    errors.email = "Not a valid email";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  return redirect("/verify-otp");
}
