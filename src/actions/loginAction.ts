import { LoaderFunctionArgs, redirect } from "react-router-dom";

interface Errors {
  email?: string;
  password?: string;
}

export default async function loginAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // const rememberMe = formData.get("remember-me");
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

  if (password === "") {
    errors.password = "Please enter your password";
  } else if (password?.length < 8) {
    errors.password = "Password must be > 7 characters";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  return redirect("/dashboard");
}
