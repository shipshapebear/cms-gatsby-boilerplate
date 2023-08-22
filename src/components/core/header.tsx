import { Link } from "gatsby";
import React from "react";

const Header = () => {
  return (
    <header className="h-16 bg-muted sticky top-0">
      <div className="max-w-screen-xl flex mx-auto justify-between items-center h-full px-4">
        <Link to="/">Logo</Link>
        <div className="flex gap-4">
          <Link to="/">Index </Link>
          <Link to="/home">Home</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
