import React from "react";
import { Memo } from "../../../models/memo/type";
import Layout from "../../layouts/layout/Layout";
import Button from "../../ui-elements/Button";
import Dialog from "../../ui-elements/Dialog";
import MemoCard from "./parts/MemoCard";
import ModalCreateMemo from "./parts/ModalCreateMemo";

type Props = {
  className?: string;
  memos: Memo[];
  showCreateModal: boolean;
  openCreateModal: (isOpen: boolean) => void;
  showDeleteDialog: boolean;
  openDeleteDialog: (isOpen: boolean, id?: string) => void;
  deleteMemo: () => void;
};

const deleteWarningMessage = "削除すると元に戻せませんがよろしいですか？";

const MemoIndex: React.FC<Props> = ({ memos, showCreateModal, openCreateModal, showDeleteDialog, openDeleteDialog, deleteMemo}) => {
  return (
    <Layout>
      <ModalCreateMemo title="メモを作成する" showModal={showCreateModal} openModal={openCreateModal} />
      {/* 何を削除するかを表示するようにしときたい */}
      <Dialog message={deleteWarningMessage} okButtonText="削除" cancelButtonText="キャンセル" show={showDeleteDialog} openDialog={openDeleteDialog} okClickEvent={deleteMemo} />
      <div>
        <div className="mb-4">
          <Button label="メモを作成する" onClick={() => openCreateModal(true)} />
        </div>
        <div className="flex flex-wrap">
          {memos.map((memo) => {
            return (
              <div key={memo.id} className="mr-4 mb-4">
                <MemoCard className="h-56 w-48" memo={memo} deleteEvent={() => openDeleteDialog(true, memo.id)} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MemoIndex;
