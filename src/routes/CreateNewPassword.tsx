import { Link, Form } from "react-router-dom";

const CreateNewPassword = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[390px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-1 text-2xl font-bold text-[#2A303C]">
            Create a new password
          </h2>
          <p className="text-xs text-[#2A303C]">
            Create a new password to continue. This password will be used to log
            into your account
          </p>
          <Form action="." method="post" className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="new-password"
                className="text-sm font-medium text-[#2A303C]"
              >
                Enter New Password
              </label>
              <input
                type="password"
                name="new-password"
                id="new-password"
                placeholder="Enter password"
                className="form-input rounded-md border-neutral-300 placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-[#2A303C]"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Re-enter password"
                className="form-input rounded-md border-neutral-300 placeholder:text-xs"
              />
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

export default CreateNewPassword;
