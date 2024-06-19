import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const usenavigate = useNavigate();
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === " " || username === null) {
      usenavigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="header">
        <Link className="lin" to={"/"}>
          Home
        </Link>
        <Link style={{ float: "right" }} className="lin" to={"/login"}>
          Logout
        </Link>
      </div>
      <div className="text-center">
        <h1>Wlcome to My React Project</h1>
      </div>
    </div>
  );
}
