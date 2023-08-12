import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    fetchBlogData(id);
  }, [id]);

  const fetchBlogData = async (id) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/v1/blog/${id}`);
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error.message);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 ">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" 
          alt={blogData.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            {blogData.title}
          </h2>
          <div className="mt-4 text-gray-600">{blogData.content}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
