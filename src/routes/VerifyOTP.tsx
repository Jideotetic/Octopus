import { Form } from "react-router-dom";

const VerifyOTP = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[430px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-2 text-2xl font-medium text-[#2A303C]">
            We sent a code to your email.
          </h2>
          <p className="text-sm text-[#2A303C]">
            Enter the 6 digit verification code that was sent to your email:
          </p>
          <Form action="." method="post" className="mt-6 flex flex-col gap-5">
            <div className="flex justify-center">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    name="otp"
                    className="form-input w-12 border-neutral-300 placeholder:text-xs  first:rounded-s last:rounded-e"
                  />
                ))}
            </div>
            <div className="flex justify-center gap-1">
              <p>Didn't get the code?</p>
              <button type="button" className="font-semibold text-[#E87407]">
                Resend Code
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#E87407] p-2 text-[#F9F7F0]"
            >
              Sign In
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
