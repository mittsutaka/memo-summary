import React from "react";

type Props = {
  bgColor?: string;
  color?: string;
  className?: string;
  label: string;
};

const Badge: React.FC<Props> = ({ bgColor, color, className, label }) => {
  const style = { color: color, backgroundColor: bgColor };
  return (
    <div className={`px-3 py-0.5 text-center text-xs ${className}`} style={style}>
      {label}
    </div>
  );
};

export default Badge;