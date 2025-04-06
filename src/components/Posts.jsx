import React, { useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "./Navbar";
import { FaUser } from "react-icons/fa";
import LikeButton from "./LikeButton";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostsQuery,
} from "../redux/getPosts";

const Posts = () => {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [deletePost] = useDeletePostMutation();

  const formRef = useRef();

  const { data, error, isLoading, refetch } = useGetPostsQuery();
  const [addPost] = useAddPostMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = formRef.current.text.value.trim();
    if (!text) {
      console.error("Matn bo‘sh bo‘lishi mumkin emas!");
      return;
    }

    try {
      await addPost({ text }).unwrap();
      toast.success("Post qo‘shildi");
      formRef.current.reset();
      refetch();
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };
  const handleDelete = async (postId) => {
    try {
      await deletePost(postId).unwrap();
      toast.success("Post o‘chirildi:");
    } catch (error) {
      console.error("Post o‘chirishda xatolik:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-4 ml-[220px] rounded-lg">
        <h2 className="text-[#17a2b8] text-[50px] font-bold">Posts</h2>
        <div className="flex items-center py-2 ">
          <FaUser className="mr-3 w-6 h-6" />
          <h2 className="text-xl py-[15px]">Welcome to the community</h2>
        </div>
        <p className="bg-[#17a2b8] mb-[20px] w-[1037.5px] pl-[5px] flex items-center font-[600] h-[35px] text-white">
          Say Something...
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <textarea
            name="text"
            placeholder="Create a post"
            rows="5"
            cols="109"
            required
            className="border border-[#ccc] text-[#ccc] text-[20px] pl-[20px] pt-[10px]"
          />
          <br />
          <button
            className="border cursor-pointer w-[100px] h-[40px] my-[20px] bg-[#343a40] text-white"
            type="submit"
          >
            Submit
          </button>
        </form>

        {data?.map((post) => (
          <div
            key={post._id}
            className="border border-[#ccc] flex w-[1037.5px] h-[164.5px] mb-[16px] items-center"
          >
            <div className="w-[177px] h-[132px] m-[15px] flex flex-col items-center">
              <img
                className="w-[100px] h-[100px] rounded-[50px]"
                src={post?.avatar}
                alt=""
              />
              <p className="text-[#17a2b8] text-[18px] font-[700]">
                {post.name}
              </p>
            </div>
            <div className="w-[712px] h-[125px] m-[15px]">
              <h3 className="my-[16px]">{post.text}</h3>
              <p className="text-[#aaa] text-[14px] mb-[5px]">
                Posted on {new Date(post.date).toLocaleDateString("uz-UZ")}
              </p>
              <div className="flex gap-[8px] items-center">
                <LikeButton postId={post._id} token={token} />
                <button
                  onClick={() => navigate(`/card/${post._id}`)}
                  className="w-[119px] bg-[#17a2b8] text-white h-[38.4px] p-[7px] border-[#17a2b8]"
                >
                  Discussion
                </button>
                {user && post.user === user._id && (
                  <button
                    className="bg-red-500 w-[100px] h-[40px] text-white cursor-pointer px-4 py-1"
                    onClick={() => handleDelete(post._id)}
                  >
                    O'chirish
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
