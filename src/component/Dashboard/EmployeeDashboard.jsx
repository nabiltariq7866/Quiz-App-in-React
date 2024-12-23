import React from "react";
import Header from "../others/Header";
import TaskListNumber from "../others/TaskListNumber";
import TaskList from "../TaskList/TaskList";
import { Outlet } from "react-router-dom";
import backgroundVideo from "../../assets/original-c0bad33f8b724462934b45c18fce0965.mp4";
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
