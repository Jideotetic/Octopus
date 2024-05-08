import { Form } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  function handleContactSupport() {
    toast.info("Kindly contact risk for support");
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
          <Form action="." method="post" className="mt-6 flex flex-col gap-5">
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
                required
                placeholder="Enter your email"
                className="form-input rounded-md border-neutral-300 shadow-sm placeholder:text-xs focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] focus:invalid:border-red-400 focus:invalid:ring-red-400"
              />
            </div>
            <button
              type="button"
              onClick={handleContactSupport}
              className="text-center font-semibold text-[#E87407]"
            >
              Contact support
            </button>
            <button
              type="submit"
              className="w-full rounded-md bg-[#E87407] p-2 text-[#F9F7F0]"
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
