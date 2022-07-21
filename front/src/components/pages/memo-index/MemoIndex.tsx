import React from "react";
import { Memo } from "../../../models/memo/type";
import Layout from "../../layouts/layout/Layout";
import Button from "../../ui-elements/Button";
import Dialog from "../../ui-elements/Dialog";
import MemoCard from "./parts/MemoCard";
import ModalUpsertMemo from "./parts/ModalUpsertMemo";

type Props = {
  className?: string;
  memos: Memo[];
  showUpsertModal: boolean;
  openUpsertModal: (isOpen: boolean, isUpdate?: boolean, id?: string) => void;
  showDeleteDialog: boolean;
  openDeleteDialog: (isOpen: boolean, id?: string) => void;
  deleteMemo: () => void;
  isUpdate?: boolean;
  selectedMemoId: string;
};

const deleteWarningMessage = "削除すると元に戻せませんがよろしいですか？";

const MemoIndex: React.FC<Props> = ({ memos, showUpsertModal, openUpsertModal, showDeleteDialog, openDeleteDialog, deleteMemo, isUpdate, selectedMemoId }) => {
  return (
    <Layout>
      {showUpsertModal && <ModalUpsertMemo showModal={showUpsertModal} openModal={openUpsertModal} isUpdate={isUpdate} selectedMemoId={selectedMemoId} />}

      {/* 何を削除するかを表示するようにしときたい */}
      <Dialog message={deleteWarningMessage} okButtonText="削除" cancelButtonText="キャンセル" show={showDeleteDialog} openDialog={openDeleteDialog} okClickEvent={deleteMemo} />
      <div>
        <div className="mb-4">
          <Button label="メモを作成する" onClick={() => openUpsertModal(true)} />
        </div>
        <div className="flex flex-wrap">
          {memos.map((memo) => {
            return (
              <div key={memo.id} className="mr-4 mb-4">
                <MemoCard className="h-56 w-48" memo={memo} updateEvent={() => openUpsertModal(true, true, memo.id)} deleteEvent={() => openDeleteDialog(true, memo.id)} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MemoIndex;
