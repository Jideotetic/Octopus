import { LoaderFunctionArgs, redirect } from "react-router-dom";

interface Errors {
  newPassword?: string;
  confirmPassword?: string;
  passwordMatch?: string;
}

export default async function createNewPasswordAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const newPassword = formData.get("new-password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  const errors: Errors = {};

  if (newPassword === "") {
    errors.newPassword = "Please enter a new password";
  } else if (newPassword?.length < 8) {
    errors.newPassword = "Password must be > 7 characters";
  }

  if (confirmPassword === "") {
    errors.confirmPassword = "Please re-enter your password";
  } else if (confirmPassword?.length < 8) {
    errors.confirmPassword = "Password must be > 7 characters";
  } else if (newPassword !== confirmPassword) {
    errors.passwordMatch = "Password do not match";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  return redirect("/dashboard");
}
