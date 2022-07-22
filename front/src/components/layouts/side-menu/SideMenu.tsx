import React from "react";
import SideMenuItem from "../side-menu-item/SideMenuItem";

type Props = {
  className?: string;
};

const SideMenu: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <div className="flex justify-center py-8">
        <h1 className="text-3xl">MEMO</h1>
      </div>
      <SideMenuItem label="メモ" selected/>
    </header>
  );
};

export default SideMenu;
