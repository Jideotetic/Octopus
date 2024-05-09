import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-100.21px)] flex-col items-center justify-center">
        <p>Dashboard</p>
        <Link to="/">Log out</Link>
      </div>
    </>
  );
};

export default Dashboard;
