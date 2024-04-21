import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./assets/pages/Signup";
import About from "./assets/pages/About";
import Home from "./assets/pages/Home";
import Profile from "./assets/pages/Profile";
import signin from "./assets/pages/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
