import React from "react";

import MyNavbar from "./Navbar";
import Footer from "./Footer";

const Page = ({ child }) => {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <MyNavbar />
      {child}
      <Footer />
    </div>
  );
};

export default Page;
