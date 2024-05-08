import { LoaderFunctionArgs, redirect } from "react-router-dom";

export default async function verifyOTPAction({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const box1 = formData.get("0")!.toString();
  const box2 = formData.get("1")!.toString();
  const box3 = formData.get("2")!.toString();
  const box4 = formData.get("3")!.toString();
  const box5 = formData.get("4")!.toString();
  const box6 = formData.get("5")!.toString();
  const otp = box1 + box2 + box3 + box4 + box5 + box6;

  console.log(otp);

  return redirect("/create-new-password");
}
