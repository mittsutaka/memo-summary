import { Label, Select } from "flowbite-react";
import React from "react";
import { SelectBoxOption } from "../../types";

type Props = {
  options: SelectBoxOption[] | undefined;
  className?: string;
  label: string;
  required?: boolean;
};

const SelectForm: React.FC<Props> = ({ className, label, options, required = false }) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label value={label} />
      </div>
      <Select required={required}>
        {options?.map((option) => {
          return <option key={option.Key}>{option.Name}</option>;
        })}
      </Select>
    </div>
  );
};

export default SelectForm;
