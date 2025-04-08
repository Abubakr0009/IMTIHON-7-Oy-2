import React from "react";
import "./App.css";
import Register from "./page/Register";
import { Route, Routes,Navigate } from "react-router-dom";
import Login from "./page/Login";
import ProtectedRoute from "./router/ProtectedRoute";
import Home from "./page/Home";
import Developers from "./components/Developers";
import Dashboard from "./page/Dashboard";
import Posts from "./components/Posts";
import Teachers from "./components/Teachers";
import CreateProfile from "./components/CreateProfile";
import ProfileDetail from "./components/ProfileDetail";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/createProfile" element={<CreateProfile />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/profileDetail/:id" element={<ProfileDetail />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
