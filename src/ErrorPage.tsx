import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage;
  let errorCode;

  if (isRouteErrorResponse(error)) {
    errorCode = error.status;
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col justify-center gap-4 text-center">
        <p className="text-5xl font-bold">{errorCode}</p>
        <p>{errorMessage}</p>
        <p>
          <Link to="/" className="text-[#E87407] underline hover:no-underline">
            Go Home
          </Link>
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
