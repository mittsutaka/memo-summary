import React from "react";

type Props = {
  bgColor?: string;
  color?: string;
};

const Badge: React.FC<Props> = ({ bgColor, color }) => {
  return <div className="px-3 py-1 text-center text-xs" style={{ color: color, backgroundColor: bgColor }}>お気に入り</div>;
};

export default Badge;
