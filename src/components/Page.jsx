import React from "react";

import MyNavbar from "./Navbar";
import Footer from "./Footer";

const Page = ({ children }) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <MyNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
