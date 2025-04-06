import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = import.meta.env.VITE_API_URL;

export const postApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseApi,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts`,
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation({
      query: (postData) => ({
        url: "posts",
        method: "POST",
        body: postData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    getPost: builder.mutation({
      query: (postId) => `post/${postId}`,
      providesTags: ["Post"],
    }),
    getProfile: builder.mutation({
      query: (postId) => ({
        url: `profile/me${postId}`,
        method: "GET",
      }),
      invalidatesTags: ["Posts"],
    }),
    handleLike: builder.mutation({
      query: (postId) => ({
        url: `posts/like/${postId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Posts"],
    }),
    handleUnlike: builder.mutation({
      query: (postId) => ({
        url: `posts/unlike/${postId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useAddPostMutation,
  useDeletePostMutation,
  useGetPostMutation,
  useGetPostsQuery,
  useGetProfileMutation,
  useHandleLikeMutation,
  useHandleUnlikeMutation,
} = postApi;
