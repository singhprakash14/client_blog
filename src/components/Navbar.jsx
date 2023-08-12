import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [userData, setUserData] = useState(null);
    const id = JSON.parse(localStorage.getItem("userId"));
    const fetchUserData = async () => {
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
    <nav className="bg-gray-800 text-white py-4 px-6  left-0 w-full mb-8 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/blogs" className="text-2xl font-semibold mr-4">
            My Blog App
          </Link>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/my-blogs">My Blogs</Link>
            </li>
            <li>
              <Link to="/create-blog">Create Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <span className="hidden md:inline">{userData?.username}</span>
          <span className="hidden md:inline cursor-pointer" onClick={()=>{localStorage.clear();window.location.reload()}}>Logout</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
