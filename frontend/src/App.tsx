import React, { useState } from "react";
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
import StockDisplay from "./pages/StockDisplay";
import PrivateRoute from "./components/PrivateRoute";
import UserDashboard from "./pages/UserDashboard";
import SymbolResults from "./components/SymbolResults";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Router>
        <div>
          <Header />
          <Quote />
          <section className="flex justify-between py-8 px-16">
            <SearchCompanyProfile />
            <SearchCompanyTicker open={open} setOpen={setOpen} />
            {open ? <SymbolResults open={open} setOpen={setOpen} /> : null}
          </section>
          <section className="w-full max-w-screen-xl mx-auto p-0 text-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/stock/:stockTicker" element={<StockDisplay />} />
              <Route path="/user/:userId" element={<PrivateRoute />}>
                <Route path="/user/:userId" element={<UserDashboard />} />
              </Route>
            </Routes>
          </section>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
