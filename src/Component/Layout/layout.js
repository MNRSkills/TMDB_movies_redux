import React from "react";
// import SearchBar from "./searchBar";
import Nav from "./nav";

const Layout = (props) => {
  return (
    <div className="Layout bg-yellow-500 relative">
      <div className="Navbar">
        <Nav />
      </div>
      <div className="content-body">{props.children}</div>
    </div>
  );
};

export default Layout;
