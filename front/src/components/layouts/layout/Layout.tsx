import React from "react";
import { ReactNode } from "react";
import Content from "../content/Content";
import SideMenu from "../side-menu/SideMenu";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <SideMenu />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
