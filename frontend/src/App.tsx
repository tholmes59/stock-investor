import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
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
          <section className="flex justify-between py-8 px-16">
            <SearchCompanyProfile />
            <SearchCompanyTicker />
          </section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
