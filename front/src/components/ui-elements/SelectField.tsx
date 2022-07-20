import { Label, Select } from "flowbite-react";
import React from "react";
import { SelectBoxOption } from "../../types";
import { UseFormRegister } from "react-hook-form";

type Props = {
  options: SelectBoxOption[] | undefined;
  className?: string;
  label: string;
  required?: boolean;
  register: UseFormRegister<any>;
  name: string;
};

const SelectField: React.FC<Props> = ({ className, label, options, register, name, required = false }) => {
  return (
    <div>
      <div className="mb-2 block">
        <span className="mr-1">
          <Label value={label} />
        </span>
        {required && <span className="text-red-600">*</span>}
      </div>
      <Select placeholder="" {...register(name, { required })}>
        <option></option>
        {options?.map((option) => {
          return <option key={option.key} value={option.value}>{option.name}</option>;
        })}
      </Select>
    </div>
  );
};

export default SelectField;
