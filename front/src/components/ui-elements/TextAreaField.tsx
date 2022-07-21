import { Label, Textarea } from "flowbite-react";
import React from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  className?: string;
  label: string;
  required?: boolean;
  register: UseFormRegister<any>;
  name: string;
  rows?: number;
};

const TextAreaField: React.FC<Props> = ({ className, label, register, name, required = false, rows }) => {
  return (
    <div>
      <div className="mb-2 block">
        <span className="mr-2">
          <Label htmlFor="contents" value={label} />
        </span>
        {required && <span className="text-red-600">*</span>}
      </div>
      <Textarea id="contents" placeholder="" rows={rows} {...register(name, { required })} />
    </div>
  );
};

export default TextAreaField;
