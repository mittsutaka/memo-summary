import React from "react";
import { Toast as FlowBiteToast } from "flowbite-react";

type Props = {
  message: string;
  className?: string;
};

const Toast: React.FC<Props> = ({ className, message }) => {
  return (
    <FlowBiteToast translate="yes">
      <div className={`ml-3 text-sm font-normal ${className}`}>{message}</div>
      <FlowBiteToast.Toggle />
    </FlowBiteToast>
  );
};

export default Toast;
