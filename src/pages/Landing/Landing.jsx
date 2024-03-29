import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Landing = () => {
  return (
    <div className="landing">
      <Nav />
      <div className="welcomeText text-center text-white d-flex justify-content-center align-items-center flex-column ">
        <h1 className="fw-bold fs-1 p-5">
          This is ManageUs that helps you manage users datas.
        </h1>
        <Link className="link-btn fs-2" to="/register">
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default Landing;
