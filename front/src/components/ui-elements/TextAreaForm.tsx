import { Label, Textarea } from "flowbite-react";
import React from "react";

type Props = {
  className?: string;
  label: string;
  required?: boolean;
};

const TextAreaForm: React.FC<Props> = ({ className, label, required = false }) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="contents" value={label} />
      </div>
      <Textarea id="contents" placeholder="" rows={4} required={required} />
    </div>
  );
};

export default TextAreaForm;
