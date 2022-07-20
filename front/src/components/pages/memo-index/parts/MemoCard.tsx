import React from "react";
import { Memo } from "../../../../models/memo/type";
import Badge from "../../../ui-elements/Badge";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import FormatDateString from "../../../../utils/FormatDateString";

type Props = {
  className?: string;
  memo: Memo;
};

const MemoCard: React.FC<Props> = ({ memo,className }) => {
  return (
    <div className={`flex flex-col max-w-xs border-2 border-gray-300 rounded-md p-3 ${className}`}>
      <div className="flex items-center mb-2">
        <div className="flex-grow">
          <Badge label={memo.folder?.name} className="w-fit" bgColor={memo.folder?.backgroundColorCode} color={memo.folder?.colorCode} />
        </div>
        <div className="flex flex-grow justify-end">
          <PencilIcon className="h-5 w-5 text-gray-500 mr-2" />
          <TrashIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>
      <div className="mb-2 flex-grow">
        <div>
          <span className="font-bold text-sm">{memo.title}</span>
        </div>
        <div>
          <span className="text-xs">{memo.contents}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-xs text-gray-400">{FormatDateString(memo.updatedAt)}</span>
      </div>
    </div>
  );
};

export default MemoCard;
