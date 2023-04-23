import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

import Home from "./pages/home";
import Login  from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


