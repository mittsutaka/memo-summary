import React from "react";

type Props = {
  className?: string;
  label?: string;
  variant?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>;

const btnPrimary = "bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

// まだprimaryしかない
const switchBtnClass = (variant?: string) => {
  let btnClassName = btnPrimary;
  switch (variant) {
    case "primary":
      btnClassName = btnPrimary;
  }
  return btnClassName;
};

const Button: React.FC<Props> = ({ className, label, variant,onClick }) => {
  return <button className={`${switchBtnClass(variant)} ${className}`} onClick={onClick}>{label}</button>;
};

export default Button;
