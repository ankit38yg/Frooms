import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./assets/pages/Signup";
import About from "./assets/pages/About";
import Home from "./assets/pages/Home";
import Profile from "./assets/pages/Profile";
import SignIn from "./assets/pages/SignIn";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./assets/components/Header";

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
