import { useEffect, useRef, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";

const CreateNewPassword = () => {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";
  const errors = useActionData() as {
    newPassword: string;
    confirmPassword: string;
    passwordMatch: string;
  };
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [submitCount, setSubmitCount] = useState(0);

  useEffect(() => {
    if (
      (errors?.newPassword ||
        errors?.confirmPassword ||
        errors?.passwordMatch) &&
      submitCount > 0
    ) {
      errors?.newPassword
        ? newPasswordRef.current?.focus()
        : confirmPasswordRef.current?.focus();
    }
  }, [errors, submitCount]);

  useEffect(() => {
    newPasswordRef.current?.focus();
  }, []);

  const handleSubmitCountIncrease = () => {
    setSubmitCount((prevCount: number) => prevCount + 1);
  };

  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[430px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-2 text-2xl font-medium text-[#2A303C]">
            Create a new password
          </h2>
          <p className="text-sm text-[#2A303C]">
            Create a new password to continue. This password will be used to log
            into your account
          </p>
          <Form
            action="."
            noValidate
            method="post"
            className="mt-6 flex flex-col gap-5"
          >
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
                ref={newPasswordRef}
                disabled={busy}
                minLength={8}
                className={`${errors?.newPassword && "border-red-400 focus:ring-0"} peer form-input rounded-md border-neutral-300 shadow-sm placeholder:text-xs valid:border-neutral-300 focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] placeholder-shown:focus:border-red-400 placeholder-shown:focus:ring-red-400 focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50`}
              />
              <p className="h-1 text-xs text-red-500 peer-valid:invisible">
                {errors?.newPassword && errors.newPassword}
              </p>
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
                ref={confirmPasswordRef}
                minLength={8}
                className={`${errors?.confirmPassword && "border-red-400 focus:ring-0"} peer form-input rounded-md border-neutral-300 shadow-sm placeholder:text-xs valid:border-neutral-300 focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] placeholder-shown:focus:border-red-400 placeholder-shown:focus:ring-red-400 focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50`}
              />
              <p className="h-1 text-xs text-red-500 peer-valid:invisible">
                {errors?.confirmPassword && errors.confirmPassword}
              </p>
              <p className="h-1 text-xs text-red-500">
                {errors?.passwordMatch && errors?.passwordMatch}
              </p>
            </div>
            <button
              type="submit"
              disabled={busy}
              onClick={handleSubmitCountIncrease}
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
