import React from "react";

type Props = {
  label: string;
  selected?:boolean;
};

const SideMenuItem: React.FC<Props> = ({ label,selected }) => {
  return (
    <div className={`text-lg flex justify-center py-4 ${selected ? "bg-slate-200":""}`}>
      <span className="text-lg">{label}</span>
    </div>
  );
};

export default SideMenuItem;
