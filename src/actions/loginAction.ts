import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default async function loginAction({
  request,
}: LoaderFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, password);
  toast.success("Login successfully");

  return redirect("/");
}
