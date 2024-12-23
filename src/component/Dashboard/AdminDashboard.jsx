import React from "react";
import Header from "../others/Header";
import { Outlet } from "react-router-dom";
const AdminDashboard = ({ children }) => {
  return (
    <div className="p-7 w-full min-h-screen  login-bg ">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
