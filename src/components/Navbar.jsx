import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#152259] w-[241px] items-center justify-between  h-[700px]">
        <div className="border border-b-[#BDBDBD]">
          <img
            className="mt-[26px] ml-[88px]"
            src="./src/assets/Ellipse 6.svg"
            alt=""
          />
          <p className="items-center h-[40px]  w-[192px] mt-[13px] mb-[27px]  ml-[25px]  text-white">
            <span className="text-[14px] w-[131px] h-[17px] relative top-[7px]    font-[600]">
              Udemy Inter. school
            </span>
          </p>
        </div>
        <ul className="w-[192px] relative top-[15px] left-[25px] flex flex-col">
          <li className="">
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                `text-white flex  pt-[11px] pl-[16px]  p-[8px] text-[14px] font-[600] rounded hover:bg-[#509CDB] ${
                  isActive ? "bg-[#509CDB]" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    className="mt-[3px] w-[16px] h-[16px] mr-[16px]"
                    src="./src/assets/home-2.svg"
                    alt=""
                  />
                  Dashboard
                  {isActive && (
                    <FaChevronRight className=" mt-[4px] ml-[44px]" />
                  )}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teachers"
              className={({ isActive }) =>
                `text-white flex items-center pt-[11px] pl-[16px] p-[8px] text-[14px] font-[600] rounded hover:bg-[#509CDB] ${
                  isActive ? "bg-[#509CDB]" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    className="mt-[3px] w-[16px] h-[16px] mr-[16px]"
                    src="./src/assets/home-2.svg"
                    alt=""
                  />
                  Teachers
                  {isActive && <FaChevronRight className="ml-[60px]" />}
                </>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/createProfile"
              className={({ isActive }) =>
                `text-white flex items-center pt-[11px] pl-[16px] p-[8px] text-[14px] font-[600] rounded hover:bg-[#509CDB] ${
                  isActive ? "bg-[#509CDB]" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    className="mt-[3px] w-[16px] h-[16px] mr-[16px]"
                    src="./src/assets/home-2.svg"
                    alt=""
                  />
                  Add Teachers
                  {isActive && (
                    <FaChevronRight className="relative left-[28px]" />
                  )}
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"#"}
              className="text-white flex pt-[11px] pl-[16px] p-[8px] text-[14px] font-[600] rounded hover:bg-[#509CDB]"
            >
              <img
                className="mt-[3px] w-[16px] h-[16px] mr-[16px]"
                src="./src/assets/teacher.svg"
                alt=""
              />
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"#"}
              className="text-white flex pt-[11px] pl-[16px] p-[8px] text-[14px] font-[600] rounded hover:bg-[#509CDB]"
            >
              <img
                className="mt-[3px] w-[16px] h-[16px] mr-[16px]"
                src="./src/assets/bank.svg"
                alt=""
              />
              Billing
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"#"}
              className="text-white flex pt-[11px] pl-[16px] p-[8px] text-[14px] font-[600] rounded hover:bg-[#509CDB]"
            >
              <img
                className="mt-[3px] w-[16px] h-[16px] mr-[16px]"
                src="./src/assets/setting-2.svg"
                alt=""
              />
              Settings and profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"#"}
              className="text-white pt-[11px] pl-[16px]  flex p-[8px] text-[14px] font-[600] rounded hover:bg-[#509CDB]"
            >
              <img
                className="mt-[3px] w-[16px] h-[16px] mr-[16px]"
                src="./src/assets/chart-square.svg"
                alt=""
              />
              Exams
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={"/posts"}
              className="text-white p-[8px] text-[18px] hover:text-[#17a2b8]"
            >
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="text-white p-[8px]  text-[18px] hover:text-[#17a2b8]"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/developers"}
              className="text-white p-[8px] text-[18px] hover:text-[#17a2b8]"
            >
              Developers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="text-white p-[8px] text-[18px] hover:text-[#17a2b8]"
            >
              Login
            </NavLink>
          </li> */}
        </ul>
        <ul className=" mt-[90px] w-[192px] relative top-[15px] left-[25px] flex flex-col">
          <li>
            <NavLink
              to="#"
              className="text-white pt-[11px] pl-[16px]  flex items-center p-[8px] text-[14px] font-[600] rounded hover:bg-[#509CDB]"
            >
              <img
                className="mt-[3px] w-[16px] h-[16px] mr-[16px]"
                src="./src/assets/bank.svg"
                alt=""
              />
              Features
              <span className="ml-[20px] w-[41px] text-[10px] flex  justify-center rounded-[10px] text-black bg-[#B9D7F1] font-[600] h-[14px]">
                NEW
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
