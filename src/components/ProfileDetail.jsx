import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavbarTop from "./Navbartop";
import Navbar from "./Navbar";
import { FaChevronRight, FaUser } from "react-icons/fa";
import LogoutButton from "./LogoutButton";
import Loading from "./Loading";
import { toast } from "react-toastify";

const ProfileDetail = () => {
  const location = useLocation();

  const showHeaderText =
    location.pathname === "/" || location.pathname === "/dashboard";

  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("ID mavjud emas.");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Iltimos, tizimga kiring.");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          `https://nt-devconnector.onrender.com/api/profile/user/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": token,
            },
          }
        );

        if (res.status === 200) {
          setProfile(res.data);
        } else {
          setError("Profil ma'lumotlari mavjud emas.");
        }
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setError("Profilni olishda xatolik.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <div className="flex">
        <div>
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
        </div>
        <div>
          <div className="w-[1280px] h-[95px] flex justify-between bg-[#FCFAFA] ">
            <div className="flex  relative top-[29px] left-[124px]">
              {showHeaderText && (
                <h1 className="w-[583px] h-[66px] text-start text-[16px] font-[500]">
                  Learn how to launch faster <br />
                  <span className="font-[400]">
                    watch our webinar for tips from our experts and get a
                    limited time offer.
                  </span>
                </h1>
              )}
            </div>
            <div className="flex gap-[10px]">
              <button
                type="button"
                className="border-[#f4f4f4] relative right-[530px] top-[5px] cursor-pointer w-[100px] h-[40px] bg-[#f4f4f4]"
              >
                <a href="/teachers">Go Back</a>
              </button>
            </div>
            <LogoutButton />
          </div>

          <div className="flex w-[1040px] ml-[66px] h-[601px]">
            <div className="text-start w-[520px] pt-[66px] ml-[163px]">
              <img
                className="w-[280px] h-[280px] rounded-[50%] "
                src={
                  profile?.user?.avatar ||
                  "https://gravatar.com/avatar/a1209dba74728e2ad3b48de66f92197d?d=mm&r=pg&s=200"
                }
                alt=""
              />
              <h1 className="pl-[90px] w-[300px] text-[20px] font-bold mt-[30px]">
                {profile.user.name}
              </h1>
              <p className="pl-[90px] w-[300px] my-[10px]">
                {profile.status} at <span>{profile.company}</span>
              </p>
              <p className="pl-[90px] w-[300px]">{profile.location}</p>
              <img
                className="bg-amber-800"
                src="./src/assets/Frame30085.svg"
                alt=""
              />
            </div>
            <div className="w-[520px] text-start">
              <h2 className="text-[20px] font-bold">
                {profile?.user?.about || "About topilmadi!"}
              </h2>
              <div className="">
                <div className="flex gap-[100px]">
                  <div className=" mt-[150px]">
                    <h2 className="text-[20px] font-bold ">Skill Set:</h2>
                    <p>{profile.skills}</p>
                  </div>
                  <div className=" mt-[150px]">
                    <p className="text-[20px] font-bold">Bio: </p>
                    <p>{profile.bio}</p>
                  </div>
                </div>

                <div className="flex gap-[100px]">
                  <div className=" mt-[150px]">
                    <h2 className="text-[20px] font-bold ">Data:</h2>
                    <p>{profile.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
