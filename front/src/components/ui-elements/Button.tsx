import React from "react";

type Props = {
  className?: string;
  label?: string;
  variant?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const btnPrimary = "bg-blue-800 hover:bg-blue-700 text-white";
const btnSecondary = "bg-neutral-200 hover:bg-neutral-100 text-slate-800";
const btnWarning = "bg-red-600 hover:bg-red-500 text-white";

const switchBtnClass = (variant?: string) => {
  let btnClassName = btnPrimary;
  switch (variant) {
    case "primary":
      btnClassName = btnPrimary;
      break;
    case "secondary":
      btnClassName = btnSecondary;
      break;
    case "warning":
      btnClassName = btnWarning;
      break;
  }
  return btnClassName;
};

const Button: React.FC<Props> = ({ className, label, variant, onClick, type = "button" }) => {
  return (
    <button type={type} className={`${switchBtnClass(variant)} ${className} min-w-[120px] font-bold py-2 px-4 rounded `} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
