import React from "react";

type Props = {
  name?: string;
};

const SideMenu: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};

export default SideMenu;