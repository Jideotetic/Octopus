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
import ErrorPage from "./ErrorPage";
import Spinner from "./components/Spinner";
import GlobalErrorPage from "./GlobalErrorPage";
import Dashboard from "./routes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Root />,
    errorElement: <GlobalErrorPage />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        action: forgotPasswordAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "verify-otp",
        element: <VerifyOTP />,
        action: verifyOTPAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "create-new-password",
        element: <CreateNewPassword />,
        action: createNewPasswordAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  </React.StrictMode>,
);
