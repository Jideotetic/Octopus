import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    localStorage.removeItem("email");
  }, []);

  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <p>Dashboard</p>
        <Link to="/" className="rounded bg-[#E87407] p-2 text-white">
          Log out
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
