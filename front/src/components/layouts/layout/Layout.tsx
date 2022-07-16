import React from "react";
import { ReactNode } from "react";
import Content from "../content/Content";
import SideMenu from "../side-menu/SideMenu";

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <SideMenu className="flex-none w-60"/>
      <Content className="grow bg-slate-200 p-8">{children}</Content>
    </div>
  );
};

export default Layout;
