import React from "react";
import MemoIndex from "./MemoIndex";

type Props = {
  name: string;
  className?:string;
};

const MemoIndexContainer: React.FC<Props> = ({ name,className }) => {
  return <MemoIndex className="text-3xl font-bold underline" name="test"></MemoIndex>
};

export default MemoIndexContainer;
