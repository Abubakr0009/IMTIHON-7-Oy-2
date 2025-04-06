import React from "react";
import LogoutButton from "./LogoutButton";
import { useLocation } from "react-router-dom";

const NavbarTop = () => {
  const location = useLocation();

  const showHeaderText =
    location.pathname === "/" || location.pathname === "/dashboard";
  return (
    <>
      <div className="w-[1280px] h-[95px] flex justify-between bg-[#FCFAFA] ">
        <div className="flex  relative top-[29px] left-[124px]">
          {showHeaderText && (
            <h1 className="w-[583px] h-[66px] text-start text-[16px] font-[500]">
              Learn how to launch faster <br />
              <span className="font-[400]">
                watch our webinar for tips from our experts and get a limited
                time offer.
              </span>
            </h1>
          )}
        </div>
        <LogoutButton />
      </div>
    </>
  );
};

export default NavbarTop;
