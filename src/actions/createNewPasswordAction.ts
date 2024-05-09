import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { toast } from "react-toastify";

export default async function createNewPasswordAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const newPassword = formData.get("new-password");
  const confirmPassword = formData.get("confirm-password");

  console.log(newPassword, confirmPassword);

  if (newPassword !== confirmPassword) {
    return toast.error("Password do not match!");
  }
  toast.success("Login successfully");

  return redirect("/dashboard");
}
