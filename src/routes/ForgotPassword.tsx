import { Link, Form } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[390px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-1 text-2xl font-bold text-[#2A303C]">
            Forgot Password?
          </h2>
          <p className="text-xs text-[#2A303C]">
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
                placeholder="Enter your email"
                className="form-input rounded-md border-neutral-300 placeholder:text-xs"
              />
            </div>
            <Link to={`/`} className="text-center font-semibold text-[#E87407]">
              Contact support
            </Link>
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
