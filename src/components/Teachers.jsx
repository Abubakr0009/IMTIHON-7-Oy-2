import React, { useState, useEffect, useContext } from "react";
import { Table, Space, Button, message } from "antd";
import { ImCheckmark } from "react-icons/im";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Navbar from "./Navbar";
import NavbarTop from "./Navbartop";
import { BsSearch } from "react-icons/bs";

const getGitHubName = async (githubUsername) => {
  try {
    if (!githubUsername) {
      console.log("GitHub username mavjud emas:", githubUsername);
      return null;
    }

    const response = await fetch(
      `https://api.github.com/users/${githubUsername}`
    );
    const data = await response.json();

    if (data && data.name) {
      return data.name;
    } else {
      return githubUsername;
    }
  } catch (err) {
    console.error("GitHub API xatolik:", err);
    return githubUsername;
  }
};

const Teachers = () => {
  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let storedToken = localStorage.getItem("token") || token;

        if (!storedToken) {
          setError("Token topilmadi, iltimos qayta login qiling.");
          message.error("Token not found, please log in again.");
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

        const profilesWithGitHubName = await Promise.all(
          data.map(async (item) => {
            const githubUsername = item.user.githubUsername || null;
            const githubName = githubUsername
              ? await getGitHubName(githubUsername)
              : null;
            return { ...item, githubName: githubName || "No name found" };
          })
        );

        setProfile(profilesWithGitHubName);
      } catch (err) {
        console.error("Xatolik:", err);
        setError(err.message || "Server yoki API bilan bog‘liq muammo yuzaga keldi.");
        message.error(err.message || "An error occurred.");
      }
    };

    fetchProfile();
  }, [token]);

  const columns = [
    {
      title: "Profile",
      key: "avatar",
      render: (text, record) => (
        <div className="flex flex-col items-center">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src={record.user.avatar}
            alt="Profile"
          />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "githubName",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Skills",
      key: "skills",
      render: (text, record) => (
        <ul className="text-[#17a2b8] flex flex-col">
          {record.skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="flex items-center">
              <ImCheckmark className="mr-2" />
              {skill}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/profileDetail/${record.user._id}`}>
            <Button className="bg-[#17a2b8] text-white py-2 px-4 rounded-md">
              View Profile
            </Button>
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div>
        <div className="flex">
          <div>
            <Navbar />
          </div>

          <div>
            <NavbarTop />

            <div className="w-[1056px] flex items-center bg-[#FCFAFA] justify-center ml-[38px] mb-[30px] h-[49px]">
              <BsSearch className="m-2" />
              <input
                type="text"
                className="w-[993px] outline-none h-[17px]"
                placeholder="Search for a student by name or email"
              />
            </div>
            <div className="w-[1062px] ml-[38px] h-[520px]">
              <Table
                columns={columns}
                dataSource={profile}
                rowKey="_id"
                scroll={{ y: 400 }}
                rowClassName="small-row"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
