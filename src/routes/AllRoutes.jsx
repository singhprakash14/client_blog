import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import AllBlogs from "../pages/blogs/AllBlogs";
import SignUp from "../pages/auth/SignUp";
import DeleteBlog from "../pages/blogs/DeleteBlog";
import UpdateBlogs from "../pages/blogs/UpdateBlogs";
import SingleBlog from "../pages/blogs/SingleBlog";
import Profile from "../pages/auth/Profile";
import PrivateRoute from "../components/PRivateRoute";
import MyBlogs from "../pages/blogs/MyBlogs";
import CreateBlog from "../pages/blogs/CreateBlog";
import Dashboard from "../components/Dashboard"

const AllRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Dashboard/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route
        path="/blogs"
        element={
          <PrivateRoute>
            <AllBlogs />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-blogs"
        element={
          <PrivateRoute>
            <MyBlogs />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-blog"
        element={
          <PrivateRoute>
            <CreateBlog />
          </PrivateRoute>
        }
      />
      <Route
        path="/blogs/:id"
        element={
          <PrivateRoute>
            <SingleBlog />
          </PrivateRoute>
        }
      />
      <Route
        path="/delete-blogs/:id"
        element={
          <PrivateRoute>
            <DeleteBlog />
          </PrivateRoute>
        }
      />
      <Route
        path="/update-blogs/:id"
        element={
          <PrivateRoute>
            <UpdateBlogs />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
