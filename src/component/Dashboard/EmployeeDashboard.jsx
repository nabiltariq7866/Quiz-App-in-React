import React from "react";
import Header from "../others/Header";
import { Outlet } from "react-router-dom";
const EmployeeDashboard = () => {
  return (
    <div className="p-4 min-h-screen login-bg">
      <Header />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
