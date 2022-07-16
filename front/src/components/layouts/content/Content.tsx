import React from "react";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Content: React.FC<Props> = ({ children }) => {
  return <div className="text-2xl font-bold underline">{children}ss</div>;
};

export default Content;