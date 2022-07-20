import { Label, TextInput } from "flowbite-react";
import React from "react";

type Props = {
  className?: string;
  label: string;
  required?: boolean;
};

const TextForm: React.FC<Props> = ({ className, label, required = false }) => {
  return (
    <div className={className}>
      <div className="mb-2 block">
        <Label value={label} />
      </div>
      <TextInput type="text" placeholder="" required={required} />
    </div>
  );
};

export default TextForm;
