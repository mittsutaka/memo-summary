import React from "react";
import { Memo } from "../../../models/memo/type";
import Layout from "../../layouts/layout/Layout";
import Button from "../../ui-elements/Button";
import MemoCard from "./parts/MemoCard";

type Props = {
  className?: string;
  memos: Memo[];
};

const MemoIndex: React.FC<Props> = ({ memos }) => {
  return (
    <Layout>
      <div>
        <div className="mb-4">
        <Button label="メモを作成する" />
        </div>
        <div className="flex flex-wrap">
          {memos.map((memo) => {
            return <MemoCard key={memo.Id} className="mr-4 h-56 w-48" memo={memo} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MemoIndex;
