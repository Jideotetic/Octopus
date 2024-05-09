import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p>Dashboard</p>
        <Link to="/">Log out</Link>
      </div>
    </>
  );
};

export default Dashboard;
