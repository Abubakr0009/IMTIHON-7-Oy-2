import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import {
  useGetPostMutation,
  useHandleLikeMutation,
  useHandleUnlikeMutation,
} from "../redux/getPosts";

export default function LikeButton({ postId, token, userId }) {
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [getPost] = useGetPostMutation();
  const [handleLike] = useHandleLikeMutation();
  const [handleUnlike] = useHandleUnlikeMutation();

  const handleLikeClick = async () => {
    if (!postId) {
      console.error("postId topilmadi!");
      return;
    }

    console.log("Like bosildi, post ID:", postId);

    try {
      const response = await handleLike(postId).unwrap();
      console.log("Like muvaffaqiyatli qo‘shildi!", response);
      toast.success("Like bosildi!");
      setLikeCount((prev) => prev + 1);
    } catch (error) {
      console.error("Like qo‘shishda xatolik:", error);
    }
  };

  const handleUnlikeClick = async () => {
    if (!postId) {
      console.error("postId topilmadi!");
      return;
    }

    console.log("Unlike bosildi, post ID:", postId);

    try {
      const response = await handleUnlike(postId).unwrap();
      console.log("Like muvaffaqiyatli olib tashlandi!", response);
      toast.success("Like olib tashlandi!");
      setLikeCount((prev) => prev - 1);
    } catch (error) {
      console.error("Unlike qilishda xatolik:", error);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleLikeClick}
        className={`p-2  flex items-center gap-2 ${
          liked ? "bg-blue-500 cursor-not-allowed text-white" : "bg-gray-300 "
        }`}
        disabled={loading || liked}
      >
        <BiSolidLike />
        Like
        {likeCount > 0 && (
          <span className="text-lg font-semibold">{likeCount} </span>
        )}
      </button>
      <button
        onClick={handleUnlikeClick}
        className={`p-2 flex items-center gap-2 ${
          !liked ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 text-white"
        }`}
        disabled={loading || !liked}
      >
        <BiSolidDislike />
        Unlike
      </button>
    </div>
  );
}
