import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideMenus from "./SideMenus";

function Layout({ children }: any) {  
  return (
    <>
      <Header />
      {children}
      <Footer />
      <SideMenus />
    </>
  );
}

export default Layout;
