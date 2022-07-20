import React from "react";
import { Memo } from "../../../models/memo/type";
import Layout from "../../layouts/layout/Layout";
import Button from "../../ui-elements/Button";
import MemoCard from "./parts/MemoCard";
import ModalCreateMemo from "./parts/ModalCreateMemo";

type Props = {
  className?: string;
  memos: Memo[];
  showModal: boolean;
  openCreateModal: (isOpen: boolean) => void;
};

const MemoIndex: React.FC<Props> = ({ memos, showModal, openCreateModal }) => {
  return (
    <Layout>
      <ModalCreateMemo title="メモを作成する" showModal={showModal} openModal={openCreateModal} />
      <div>
        <div className="mb-4">
          <Button label="メモを作成する" onClick={() => openCreateModal(true)} />
        </div>
        <div className="flex flex-wrap">
          {memos.map((memo) => {
            return (
              <div key={memo.id} className="mr-4 mb-4">
                <MemoCard className="h-56 w-48" memo={memo} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MemoIndex;
