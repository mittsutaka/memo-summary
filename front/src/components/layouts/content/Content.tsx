import React from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Content: React.FC<Props> = ({ children, className }) => {
  return (
    <main className={className}>
      <div className="rounded h-full p-8 bg-white">{children}</div>
    </main>
  );
};

export default Content;
