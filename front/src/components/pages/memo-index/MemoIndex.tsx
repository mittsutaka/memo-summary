import React from "react";
import { Memo } from "../../../models/memo/type";
import Layout from "../../layouts/layout/Layout";

type Props = {
  className?: string;
  memos: Memo[];
};

const MemoIndex: React.FC<Props> = ({ memos }) => {
  return (
    <Layout>
      {memos.map((memo) => {
        return <div key={`${memo.Id}aaaa`}>{memo.Title}</div>;
      })}
    </Layout>
  );
};

export default MemoIndex;
