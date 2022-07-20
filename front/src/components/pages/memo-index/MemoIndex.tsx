import React from "react";
import { Memo } from "../../../models/memo/type";
import Layout from "../../layouts/layout/Layout";
import Button from "../../ui-elements/Button";
import MemoCard from "./parts/MemoCard";
import ModalCreateMemo from "./parts/ModalCreateMemo";

type Props = {
  className?: string;
  memos: Memo[];
  modalId: string;
  showModal: boolean;
  switchCreateModal: (isOpen: boolean) => void;
};

const MemoIndex: React.FC<Props> = ({ memos, modalId, showModal, switchCreateModal }) => {
  return (
    <Layout>
      <ModalCreateMemo title="メモを作成する" showModal={showModal} switchCreateModal={switchCreateModal}/>
      <div>
        <div className="mb-4">
          <Button label="メモを作成する" onClick={() => switchCreateModal(true)} />
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
