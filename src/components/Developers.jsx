import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "./Navbar";
import Loading from "./Loading";
import { FaUser } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";

const Developers = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let storedToken = localStorage.getItem("token") || token;

        if (!storedToken) {
          setError("Token topilmadi, iltimos qayta login qiling.");
          setLoading(false);
          return;
        }

        const res = await fetch(
          "https://nt-devconnector.onrender.com/api/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-Auth-Token": storedToken,
            },
          }
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.msg || "Noma’lum xatolik yuz berdi!");
        }

        setProfile(Array.isArray(data) ? data : [data]);
      } catch (err) {
        console.error("Xatolik:", err);
        setError(
          err.message || "Server yoki API bilan bog‘liq muammo yuzaga keldi."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token]);

  if (loading)
    return (
      <p>
        <Loading />
      </p>
    );
  if (error) return <p className="text-red-500">❌ {error}</p>;
  if (profile.length === 0)
    return (
      <p className="text-yellow-500">⚠ Profil ma'lumotlari mavjud emas!</p>
    );
  const ProfileClick = async () => {
    const res = await fetch(
      `https://nt-devconnector.onrender.com/api/profile/${user_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": storedToken,
        },
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-4 ml-[220px] rounded-lg">
        <h2 className="text-[#17a2b8]   text-[50px] font-bold">Developers</h2>
        <div className="flex items-center py-2 ">
          <FaUser className="mr-3 w-6 h-6" />
          <h2 className="text-xl py-[15px]">
            Browse and connect with developers
          </h2>
        </div>
        {profile.map((item) => (
          <div
            key={item._id}
            className=" border bg-[#f4f4f4]  border-[#ccc] flex  w-[955px] h-[248px] mb-[16px] items-center"
          >
            <div className="w-[214px] h-[214px] m-[15px]  flex flex-col items-center">
              <img
                className="w-[214px] h-[214px] rounded-[100px]"
                src={item.user.avatar}
                alt=""
              />
            </div>
            <div className="w-[428px]  h-[174px] m-[15px]">
              <h3 className="text-[24px] font-[600]">{item.user.name}</h3>
              <p className="text-[#aaa] text-[14px] my-[5px]  h-[30px]">
                {item.status} at {item.company}
              </p>
              <p className="h-[30px] my-[16px]">{item.location}</p>
              <div className="flex gap-[8px]">
                <button
                  onClick={() => ProfileClick(item.user._id)}
                  className="w-[119px] cursor-pointer bg-[#17a2b8] text-white h-[38.4px] p-[7px] border-[#17a2b8]"
                >
                  View Profile
                </button>
              </div>
            </div>
            <div className="w-[214px] flex items-center cursor-pointer overflow-hidden h-[174px]">
              <ul className="text-[#17a2b8] flex flex-col">
                {item.skills.slice(0, 4).map((skill, index) => (
                  <li key={index} className="flex items-center ">
                    <ImCheckmark className="mr-2" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Developers;
