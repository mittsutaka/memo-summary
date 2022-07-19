import React from "react";

type Props = {
  bgColor?: string;
  color?: string;
  className?: string;
  label: string;
};

const Badge: React.FC<Props> = ({ bgColor, color, className, label }) => {
  return (
    <div className={`px-3 py-1 text-center text-xs ${className}`} style={{ color: color, backgroundColor: bgColor }}>
      {label}
    </div>
  );
};

export default Badge;