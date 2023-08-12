import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Profile = () => {
  const [userData, setUserData] = useState(null);


    const fetchUserData = async () => {
            const id = JSON.parse(localStorage.getItem("userId"));
     try {
       const response = await axios.get(
         `${import.meta.env.VITE_API_URL}/v1/user/${id}`
       ); // Replace with your API endpoint
       setUserData(response.data);
     } catch (error) {
       console.error("Error fetching user data:", error.message);
     }
   };
  useEffect(() => {
    fetchUserData();
  }, []);


  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800">User Profile</h2>
          <div className="mt-4 text-gray-600">
            <p className="mb-2">
              <span className="font-semibold">Name:</span> {userData?.name}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Username:</span> {userData?.username}
            </p>
          </div>
          <div className="mt-4">
            <Link
              to="/blogs"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              My Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
