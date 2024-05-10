import { useEffect, useState } from "react";
import { Form, useNavigate, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authProvider from "../auth";
import OTPInput from "react-otp-input";

const VerifyOTP = () => {
  const [otp, setOtp] = useState<string>("");

  function handleResendCode() {
    toast.success("Email sent successfully");
  }

  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (authProvider.email === "" && localStorage.getItem("email") === null) {
      navigate("/create-new-password");
    } else if (authProvider.email === "") {
      setEmail(localStorage.getItem("email") as string);
    } else {
      setEmail(authProvider.email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[430px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-2 text-2xl font-medium text-[#2A303C]">
            We sent a code to your email.
          </h2>
          <p className="text-sm text-[#2A303C]">
            Enter the 6 digit verification code that was sent to your email:{" "}
            {email}
          </p>
          <Form action="." method="post" className="mt-6 flex flex-col gap-5">
            <div className="flex justify-center">
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                skipDefaultStyles={true}
                renderInput={(props, id) => (
                  <input
                    name={id.toString()}
                    disabled={busy}
                    pattern="\d{1}"
                    required
                    {...props}
                    className="form-input w-12 border-neutral-300 text-center text-lg font-extrabold shadow-sm placeholder:text-xs first:rounded-s last:rounded-e valid:border-2 valid:border-[#E87407] valid:ring-[#E87407] focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] placeholder-shown:focus:border-red-400 placeholder-shown:focus:ring-red-400 focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                )}
              />
            </div>

            <div className="flex justify-center gap-1">
              <p>Didn't get the code?</p>
              <button
                type="button"
                onClick={handleResendCode}
                className="font-semibold text-[#E87407]"
              >
                Resend Code
              </button>
            </div>

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-md bg-[#E87407] p-2 text-[#F9F7F0] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Continue
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
