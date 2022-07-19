import React from "react";
import { Memo } from "../../../models/memo/type";
import Layout from "../../layouts/layout/Layout";
import Badge from "../../ui-elements/Badge";

type Props = {
  className?: string;
  memos: Memo[];
};

const MemoIndex: React.FC<Props> = ({ memos }) => {
  return (
    <Layout>
      <Badge bgColor="#FFF000" color="#333333" />
      {memos.map((memo) => {
        console.log(memo);
        return <div key={`${memo.Id}`}>{memo.Title}</div>;
      })}
    </Layout>
  );
};

export default MemoIndex;
