import { LoaderFunctionArgs, redirect } from "react-router-dom";

interface Errors {
  otp?: string;
}

export default async function verifyOTPAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();

  const box1 = formData.get("0")!.toString();
  const box2 = formData.get("1")!.toString();
  const box3 = formData.get("2")!.toString();
  const box4 = formData.get("3")!.toString();
  const box5 = formData.get("4")!.toString();
  const box6 = formData.get("5")!.toString();
  const otp = box1 + box2 + box3 + box4 + box5 + box6;
  const errors: Errors = {};

  if (otp === "") {
    errors.otp = "Please enter OTP";
  } else if (otp?.length < 6) {
    errors.otp = "Please complete OTP";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  return redirect("/create-new-password");
}
