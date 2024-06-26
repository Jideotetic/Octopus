import { useEffect, useRef, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const errors = useActionData() as { email: string };
  const emailRef = useRef<HTMLInputElement>(null);
  const [submitCount, setSubmitCount] = useState(0);

  useEffect(() => {
    if (errors?.email && submitCount > 0) {
      emailRef.current?.focus();
    }
  }, [errors, submitCount]);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleSubmitCountIncrease = () => {
    setSubmitCount((prevCount: number) => prevCount + 1);
  };

  function handleContactSupport() {
    toast.info("Contact internal control");
  }

  return (
    <>
      <ToastContainer />
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[430px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-2 text-2xl font-medium text-[#2A303C]">
            Forgot Password?
          </h2>
          <p className="text-sm text-[#2A303C]">
            Enter the email associated with your account. We will send you a
            verification code
          </p>
          <Form
            action="."
            noValidate
            method="post"
            className="mt-6 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#2A303C]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                disabled={busy}
                ref={emailRef}
                placeholder="Enter your email"
                className={`${errors?.email && "border-red-400 focus:ring-0"} peer form-input rounded-md border-neutral-300 shadow-sm placeholder:text-xs valid:border-neutral-300 focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50`}
              />
              <p className="h-1 text-xs text-red-500 peer-valid:invisible">
                {errors?.email && errors.email}
              </p>
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={handleContactSupport}
                className="text-center font-semibold text-[#E87407]"
              >
                Contact support
              </button>
            </div>
            <button
              type="submit"
              disabled={busy}
              onClick={handleSubmitCountIncrease}
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

export default ForgotPassword;
