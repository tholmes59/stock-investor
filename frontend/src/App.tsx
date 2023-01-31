import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Quote from "./components/Quote";
import SearchCompanyProfile from "./components/SearchCompanyProfile";
import SearchCompanyTicker from "./components/SearchCompanyTicker";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Quote />
          <section className="flex justify-between py-8 px-16">
            <SearchCompanyProfile />
            <SearchCompanyTicker />
          </section>
          <section className="w-full max-w-3xl mx-auto p-0 text-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </section>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
