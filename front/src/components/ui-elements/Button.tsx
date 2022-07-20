import React from "react";

type Props = {
  className?: string;
  label?: string;
  variant?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const btnPrimary = "bg-blue-800 hover:bg-blue-700 text-white";
const btnSecondary = "bg-neutral-200 hover:bg-neutral-100 text-slate-800";

const switchBtnClass = (variant?: string) => {
  let btnClassName = btnPrimary;
  switch (variant) {
    case "primary":
      btnClassName = btnPrimary;
      break;
    case "secondary":
      btnClassName = btnSecondary;
      break;
  }
  return btnClassName;
};

const Button: React.FC<Props> = ({ className, label, variant, onClick }) => {
  return (
    <button type="button" data-modal-toggle="createMemo" className={`${switchBtnClass(variant)} ${className} min-w-[120px] font-bold py-2 px-4 rounded`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
