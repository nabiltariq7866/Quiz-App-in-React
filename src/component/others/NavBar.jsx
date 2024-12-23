import React, { useContext, useState } from "react";
import image from "../../assets/QuizLogo.png";
import Modal from "./Modal";
import Login from "../Auth/Login";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import AppContext from "../../context/AuthContext";
const NavBar = () => {
  const context = useContext(AppContext);
  return (
    <>
      <div className="flex items-center justify-between z-10">
        <div className="text-2xl flex items-center justify-center font-medium w-[100px] h-[100px] rounded-full bg-[#ED4ABE]">
          <h1 className="flex items-center justify-center flex-col">
            <p className="ml-[-12px]">QUIZ</p>{" "}
            <p className="ml-[15px] mt-[-5px]">App</p>
          </h1>
        </div>
        <div className="flex gap-3">
          {/* <NavLink
            className={({ isActive }) =>
              clsx(
                { "bg-[#ED4ABE] text-white   ": isActive },
                "text-2xl font-semibold rounded hover:text-white  hover:bg-[##21888e] p-2",
                { "text-[#ED4ABE]": !isActive }
              )
            }
            to="/"
            end
          >
            Home
          </NavLink> */}
          {/* <NavLink className={({isActive})=>clsx({'bg-[#d92732] text-white   ': isActive},"text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",{"text-[#d92732]":!isActive})  } to="/" onClick={()=>context.setIsOpen(true)}>Math Quiz</NavLink>
      <NavLink className={({isActive})=>clsx({'bg-[#d92732] text-white   ': isActive},"text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",{"text-[#d92732]":!isActive})  } to="/" onClick={()=>context.setIsOpen(true)}>English Quiz</NavLink>
      <NavLink className={({isActive})=>clsx({'bg-[#d92732] text-white   ': isActive},"text-2xl font-semibold rounded hover:text-white  hover:bg-[#d92732] p-2",{"text-[#d92732]":!isActive})  } to="/" onClick={()=>context.setIsOpen(true)}>Html Quiz</NavLink> */}
        </div>
        <button
          onClick={() => context.setIsOpen(true)}
          className="bg-[#ED4ABE] text-white px-5 py-2 rounded text-lg font-medium"
        >
          Log In
        </button>
      </div>
      <Modal>
        <Login />
      </Modal>
    </>
  );
};

export default NavBar;
