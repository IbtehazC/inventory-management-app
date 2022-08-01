import React, { ReactChildren, ReactNode } from "react";
import Navbar from "../../component/navbar/Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
