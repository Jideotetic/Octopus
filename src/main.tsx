import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import Login from "./routes/Login";
import ForgotPassword from "./routes/ForgotPassword";
import VerifyOTP from "./routes/VerifyOTP";
import CreateNewPassword from "./routes/CreateNewPassword";
import forgotPasswordAction from "./actions/forgotPasswordAction";
import verifyOTPAction from "./actions/verifyOTPAction";
import createNewPasswordAction from "./actions/createNewPasswordAction";
import loginAction from "./actions/loginAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        action: forgotPasswordAction,
      },
      {
        path: "verify-otp",
        element: <VerifyOTP />,
        action: verifyOTPAction,
      },
      {
        path: "create-new-password",
        element: <CreateNewPassword />,
        action: createNewPasswordAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
