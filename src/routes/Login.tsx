import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <div className="w-full max-w-[390px] rounded-2xl bg-white p-8 shadow">
          <h2 className="mb-1 text-2xl font-bold text-[#2A303C]">Welcome!</h2>
          <p className="text-xs text-[#2A303C]">
            Please enter your credential to sign in!
          </p>
          <form action="" method="post" className="mt-6 flex flex-col gap-5">
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
                placeholder="Enter your email"
                className="form-input rounded-md border-neutral-300 placeholder:text-xs"
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
                className="form-input rounded-md border-neutral-300 placeholder:text-xs"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center justify-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="form-checkbox hover:focus:ring-none cursor-pointer rounded-sm border-neutral-300 text-[#E87407] focus:ring-[#E87407]"
                />
                <label htmlFor="remember" className="text-sm text-[#2A303C]">
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

export default Login;
