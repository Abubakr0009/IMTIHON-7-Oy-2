import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import NavbarTop from "./Navbartop";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    status: "",
    company: "",
    website: "",
    location: "",
    skills: "",
    githubUsername: "",
    bio: "",
  });
  const formRef = useRef(null);
  const getProfile = async () => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.error("Token topilmadi!");
      return;
    }

    try {
      const response = await fetch(
        "https://nt-devconnector.onrender.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.msg || "Profilni olishda xatolik");
      }
      console.log("Profil:", data);
      return data;
    } catch (error) {
      console.error("Xatolik:", error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.status ||
      !formData.company ||
      !formData.website ||
      !formData.location ||
      !formData.skills ||
      !formData.githubUsername ||
      !formData.bio
    ) {
      toast.error("Iltimos, barcha majburiy maydonlarni to'ldiring!");
      return;
    }

    try {
      await getProfile(formData);
      toast.success("Profil muvaffaqiyatli qo'shildi!");
      formRef.current.reset();
      navigate("/teachers");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
      toast.error("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex">
        <div>
          <Navbar />
        </div>
        <div>
          <NavbarTop />
          <div className="w-[1056px] h-[69px] ml-[38px] flex justify-between items-center mb-[14px]">
            <div>
              <h1 className="text-[20px] font-[500]">Add teacher</h1>
            </div>
          </div>
          <div className="w-[981px] text-start h-[515px] ml-[40px] bg-white rounded-lg">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-[981px] outline-hidden"
            >
              <div className="flex gap-[60px]">
                <div className="pr-2 w-[402px]">
                  <div className="mb-4 w-[402px] ">
                    <p className="text-[#888] pt-[20px] pb-[5px]  text-[14px]">
                      Enter Status
                    </p>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-[407px] h-[42px] pl-[5px] py-2 border text-[15px] border-[#ccc] outline-hidden"
                    >
                      <option value="">Select Professional Status</option>
                      <option value="developer">Developer</option>
                      <option value="junior developer">Junior Developer</option>
                      <option value="senior developer">Senior Developer</option>
                      <option value="manager">Manager</option>
                      <option value="student">Student or Learning</option>
                    </select>
                  </div>
                  <div>
                    <p className="text-[#888] pt-[20px] pb-[5px] text-[14px]">
                      Could be your own company or one you work for
                    </p>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-[407px] h-[42px] pl-[10px] p-1 text-[15px] border outline-hidden border-[#ccc]"
                      placeholder="Company"
                    />
                  </div>
                  <div>
                    <p className="text-[#888] pt-[20px] pb-[5px] text-[14px]">
                      Enter Website
                    </p>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-[407px] h-[42px] pl-[10px] p-1 outline-hidden text-[15px] border border-[#ccc]"
                      placeholder="Website"
                    />
                  </div>
                </div>
                <div className="w-1/2 pl-2">
                  <div>
                    <p className="text-[#888] pt-[20px] pb-[5px] text-[14px]">
                      Enter Location
                    </p>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-[407px] h-[42px] pl-[10px] p-1 outline-hidden text-[15px] border border-[#ccc]"
                      placeholder="Location"
                    />
                  </div>
                  <div>
                    <p className="text-[#888] pt-[20px] pb-[5px] text-[14px]">
                      Enter Skills (e.g. HTML,CSS,JavaScript)
                    </p>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      className="w-[407px] h-[42px] pl-[10px] p-1 outline-hidden text-[15px] border border-[#ccc]"
                      placeholder="Skills"
                    />
                  </div>
                  <div>
                    <p className="text-[#888] pt-[20px] pb-[5px] text-[14px]">
                      GitHub Username
                    </p>
                    <input
                      type="text"
                      name="githubUsername"
                      value={formData.githubUsername}
                      onChange={handleChange}
                      className="w-[407px] h-[42px] pl-[10px] p-1 outline-hidden text-[15px] border border-[#ccc]"
                      placeholder="GitHub Username"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[407px] mt-[36px] flex gap-[30px]">
                <div>
                  <p className="text-[#888] text-[14px]">About</p>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    placeholder="About"
                    required
                    className="border w-[407px] h-[172px] border-[#ccc] text-[#888] outline-hidden mt-[5px] text-[15px] pl-[10px] pt-[10px]"
                  />
                </div>
                <div className="flex gap-[10px] mt-4">
                  <button
                    type="button"
                    className="border-[#f4f4f4] cursor-pointer mt-[30px] w-[100px] h-[40px] bg-[#f4f4f4]"
                  >
              
                  </button>
                  <button
                    type="submit"
                    className="border bg-[#509CDB] relative bottom-[400px] left-[385px] py-2 rounded-md hover:bg-[#510CDB] cursor-pointer w-[120px] h-[40px] text-white"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
