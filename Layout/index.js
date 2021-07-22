import React from "react";
import BottomNavigator from "./../Components/BottomNavigator/BottomNavigator";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      {/* <BottomNavigator/> */}
    </div>
  );
};

export default Layout;
