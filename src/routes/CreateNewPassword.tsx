import { Form, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateNewPassword = () => {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  return (
    <>
      <ToastContainer />
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[430px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-2 text-2xl font-medium text-[#2A303C]">
            Create a new password
          </h2>
          <p className="text-sm text-[#2A303C]">
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
                autoComplete="off"
                required
                disabled={busy}
                minLength={8}
                className="form-input rounded-md border-neutral-300 shadow-sm placeholder:text-xs focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] placeholder-shown:focus:border-red-400 placeholder-shown:focus:ring-red-400 focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50"
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
                autoComplete="off"
                required
                disabled={busy}
                minLength={8}
                className="form-input rounded-md border-neutral-300 shadow-sm placeholder:text-xs focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] placeholder-shown:focus:border-red-400 placeholder-shown:focus:ring-red-400 focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-md bg-[#E87407] p-2 text-[#F9F7F0] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {busy ? "Signing In..." : "Sign In"}
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateNewPassword;
