import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import NavbarTop from "../components/Navbartop";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex">
        <div>
          <Navbar />
        </div>
        <div>
          <NavbarTop />
          <div className="">
            <h1 className="text-[36px] font-[600] w-[776px] ml-[127px]">
              Welcome to your dashboard, Udemy school
            </h1>
            <p className="w-[325px] h-[30px] text-[24px] font-[600] ml-[232px] mt-[23px] mb-[10px]">
              Uyo/school/@teachable.com
            </p>
          </div>
          <div className="flex flex-col gap-[51px] w-[758px] ml-[126px] h-[488px]">
            <div className="flex  gap-[20px] ml-[88px] mt-[68px] ">
              <div className="w-[36px]">
                <img
                  className="bg-[#EFF3FA] w-[36px] h-[36px]"
                  src="./src/assets/profile.svg"
                  alt=""
                />
              </div>
              <div className="w-[583px] text-start  ">
                <h2 className="text-[24px] font-[500] mb-[16px]">
                  Add other admins
                </h2>
                <p className="text-[14px] font-[400]">
                  Create rich course content and coaching products for your
                  students. <br /> When you give them a pricing plan, they’ll
                  appear on your site!
                </p>
              </div>
            </div>
            <div className="flex  gap-[20px] ml-[88px] ">
              <div className="">
                <img
                  className="rounded-[8px] bg-[#EFF3FA] "
                  src="./src/assets/Frame.svg"
                  alt=""
                />
              </div>
              <div className="w-[583px] text-start ">
                <h2 className="text-[24px] font-[500] mb-[16px]">
                  Add other admins
                </h2>
                <p className="text-[14px] font-[400]">
                  Create rich course content and coaching products for your
                  students. <br /> When you give them a pricing plan, they’ll
                  appear on your site!
                </p>
              </div>
            </div>
            <div className="flex  gap-[20px] ml-[88px] ">
              <div className="w-[36px]">
                <img
                  className="rounded-[8px] bg-[#EFF3FA] w-[36px] h-[36px]"
                  src="./src/assets/Frame12.svg"
                  alt=""
                />
              </div>
              <div className="w-[583px] text-start ">
                <h2 className="text-[24px] font-[500] mb-[16px]">
                  Add other admins
                </h2>
                <p className="text-[14px] font-[400]">
                  Create rich course content and coaching products for your
                  students. <br /> When you give them a pricing plan, they’ll
                  appear on your site!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
