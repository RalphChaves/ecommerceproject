import React from "react";
import ReactDOM from "react-dom";
import Register from "./pages/Register/Register";
import { GlobalStyle } from "./styles/global";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Prod from "./pages/Prod/Prod";
import WishList from "./pages/WishList/WishList";

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/prod" element={<Prod />} />
        <Route path="/wishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
