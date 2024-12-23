import React from "react";
import Header from "../others/Header";
import { Outlet } from "react-router-dom";
import backgroundVideo from "../../assets/original-c0bad33f8b724462934b45c18fce0965.mp4";
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
