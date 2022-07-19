import React from "react";
import { Memo } from "../../../models/memo/type";
import Layout from "../../layouts/layout/Layout";
import MemoCard from "./parts/MemoCard";

type Props = {
  className?: string;
  memos: Memo[];
};

const MemoIndex: React.FC<Props> = ({ memos }) => {
  return (
    <Layout>
      {memos.map((memo) => {
        return <MemoCard memo={memo} />;
      })}
    </Layout>
  );
};

export default MemoIndex;
