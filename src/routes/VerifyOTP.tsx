import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Form, useNavigate, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authProvider from "../auth";

interface VerifyOTPProps {
  length?: number;
}

// Regex to check if the input enter is a valid number
const DIGITS = new RegExp(/^\d+$/);

const VerifyOTP = ({ length = 6 }: VerifyOTPProps) => {
  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  // Function to handle moving to next input when one is filled
  function focusToNextInput(target: HTMLElement) {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  }

  // Function to handle moving to previous input when and input is deleted or navigated using arrow keys
  function focusToPrevInput(target: HTMLElement) {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  }

  // Function to handle input change
  function handleTextChange(e: ChangeEvent<HTMLInputElement>, id: number) {
    const target = e.target;
    const targetValue = target.value;

    // Check if the input is a valid number
    const isDigit = DIGITS.test(targetValue);

    // If input is not a number return
    if (!isDigit && targetValue !== "") {
      return;
    }

    // If the input is empty space return
    if (targetValue === " ") {
      return;
    }

    // Move to the next input when the input is filled
    if (targetValue.length === 1 && id < length - 1) {
      focusToNextInput(target);
    }

    const newPin = [...OTP];
    newPin[id] = targetValue;
    setOTP(newPin);
  }

  function inputOnKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    focusToPrevInput(target);
  }

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
  }, []);

  // function inputOnFocus(e: FocusEvent<HTMLInputElement>) {
  //   const { target } = e;

  //   const prevInputEl =
  //     target.previousElementSibling as HTMLInputElement | null;

  //   if (prevInputEl && prevInputEl.value === "") {
  //     return prevInputEl.focus();
  //   }

  //   target.setSelectionRange(0, target.value.length);
  // }

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
              {Array.from({ length }, (_, id) => (
                <input
                  key={id}
                  type="text"
                  maxLength={1}
                  name={id.toString()}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  value={OTP[id]}
                  disabled={busy}
                  onChange={(e) => handleTextChange(e, id)}
                  onKeyDown={inputOnKeyDown}
                  // onFocus={inputOnFocus}
                  ref={(ref) =>
                    (inputRef.current[id] = ref as HTMLInputElement)
                  }
                  pattern="\d{1}"
                  required
                  className="form-input w-12 border-neutral-300 text-center text-lg font-extrabold shadow-sm placeholder:text-xs first:rounded-s last:rounded-e valid:border-2 valid:border-[#E87407] valid:ring-[#E87407] focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] placeholder-shown:focus:border-red-400 placeholder-shown:focus:ring-red-400 focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                />
              ))}
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
