import React from "react";
import { Memo } from "../../../../models/memo/type";
import Badge from "../../../ui-elements/Badge";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import FormatDateString from "../../../../utils/FormatDateString";

type Props = {
  className?: string;
  memo: Memo;
  deleteEvent: () => void;
};

const MemoCard: React.FC<Props> = ({ memo, className, deleteEvent }) => {

  return (
    <div className={`flex flex-col max-w-xs border-2 border-gray-300 rounded-md p-3 ${className}`}>
      <div className="flex items-center mb-2">
        <div className="flex-grow">
          <Badge label={memo.folder?.name} className="w-fit" bgColor={memo.folder?.backgroundColorCode} color={memo.folder?.colorCode} />
        </div>
        <div className="flex flex-grow justify-end">
          <div className="cursor-pointer hover:bg-slate-200 rounded-full p-1 mr-0.5">
            <PencilIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
          </div>
          <div className="cursor-pointer hover:bg-slate-200 rounded-full p-1" onClick={deleteEvent}>
            <TrashIcon className="h-5 w-5 text-gray-500 " />
          </div>
        </div>
      </div>
      <div className="mb-2 flex-grow">
        <div className="mb-2">
          <span className="font-bold text-sm line-clamp-2">{memo.title}</span>
        </div>
        <div>
          <span className="text-xs line-clamp-6">{memo.contents}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-xs text-gray-400">{FormatDateString(memo.updatedAt)}</span>
      </div>
    </div>
  );
};

export default MemoCard;
