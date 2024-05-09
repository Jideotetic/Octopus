import { Link, Form, useNavigation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigation = useNavigation();
  const busy = navigation.state === "submitting";

  return (
    <>
      <ToastContainer />
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[430px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-1 text-2xl font-medium text-[#2A303C]">Welcome!</h2>
          <p className="text-sm text-[#2A303C]">
            Please enter your credential to sign in!
          </p>
          <Form action="." method="post" className="mt-6 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#2A303C]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                disabled={busy}
                placeholder="Enter your email"
                className="form-input rounded-md border-neutral-300 shadow-sm placeholder:text-xs focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-[#2A303C]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                minLength={8}
                autoComplete="off"
                required
                disabled={busy}
                className="form-input rounded-md border-neutral-300 shadow-sm placeholder:text-xs focus:border-[#E87407] focus:outline-none focus:ring-1 focus:ring-[#E87407] placeholder-shown:focus:border-red-400 placeholder-shown:focus:ring-red-400 focus:invalid:border-red-400 focus:invalid:ring-red-400 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  disabled={busy}
                  className="focus:ring-none form-checkbox cursor-pointer rounded-sm border-neutral-300 text-[#E87407] focus:ring-[#E87407] focus:ring-offset-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <label htmlFor="remember-me" className="text-sm text-[#2A303C]">
                  Remember me
                </label>
              </div>
              <Link
                to={`forgot-password`}
                className="font-semibold text-[#E87407]"
              >
                Forgot password?
              </Link>
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

export default Login;
