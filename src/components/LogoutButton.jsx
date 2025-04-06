import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="cursor-pointer">
        <div className=" relative top-[40px] right-[200px] ">
          <img className="" src="./src/assets/bell.svg" alt="" />
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-[#509CDB] cursor-pointer text-white px-4 relative w-[120px] h-[40px] top-[5px] right-[127px] py-2 rounded-md hover:bg-red-600"
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoutButton;
