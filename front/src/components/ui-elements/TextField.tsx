import { Label, TextInput } from "flowbite-react";
import React from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  className?: string;
  label: string;
  required?: boolean;
  register: UseFormRegister<any>;
  name: string;
};

const TextField: React.FC<Props> = ({ className, label, required = false, register, name }) => {
  return (
    <div className={className}>
      <div className="mb-2 block">
        <span className="mr-1">
          <Label value={label} />
        </span>
        {required && <span className="text-red-600">*</span>}
      </div>
      <TextInput type="text" placeholder="" {...register(name, { required })} />
    </div>
  );
};

export default TextField;
