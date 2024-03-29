import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container m-auto">
      <div className="text-center text-[25px]">Async Race</div>
      <div className="flex justify-center gap-3 mb-4">
        <Link to={"/"}>Garage</Link>
        <Link to={"/winners"}>Winners</Link>
      </div>
    </div>
  );
};

export default Header;
