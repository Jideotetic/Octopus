const VerifyOTP = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[390px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-1 text-xl font-medium text-[#2A303C]">
            We sent a code to your email.
          </h2>
          <p className="text-sm text-[#2A303C]">
            Enter the 6 digit verification code that was sent to your email:
          </p>
          <form action="" method="post" className="mt-6 flex flex-col gap-5">
            <div className="flex justify-center">
              <input
                type="text"
                name="otp"
                className="form-input w-12 rounded-s border-neutral-300 placeholder:text-xs"
              />
              <input
                type="text"
                name="otp"
                className="form-input w-12 border-neutral-300 placeholder:text-xs"
              />
              <input
                type="text"
                name="otp"
                className="form-input w-12 border-neutral-300 placeholder:text-xs"
              />
              <input
                type="text"
                name="otp"
                className="form-input w-12 border-neutral-300 placeholder:text-xs"
              />
              <input
                type="text"
                name="otp"
                className="form-input w-12 border-neutral-300 placeholder:text-xs"
              />
              <input
                type="text"
                name="otp"
                className="form-input w-12 rounded-e border-neutral-300 placeholder:text-xs"
              />
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
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
