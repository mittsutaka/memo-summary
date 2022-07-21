import React, { useState } from "react";
import MemoIndex from "./MemoIndex";
import { Memo } from "../../../models/memo/type";
import useFetch from "../../../hooks/useFecth";
import { ApiEndPoint } from "../../../configs/apiEndPoint";
import axios from "axios";
import { useSWRConfig } from "swr";

const MemoIndexContainer: React.FC = () => {

  const { mutate } = useSWRConfig();

  // ここのstateの持ち方これでいいのだろうか、カスタムフック使った方がいい気がする
  const [selectedMemoId, setSelectedMemoId] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const openCreateMemoModal = (isOpen: boolean) => setShowCreateModal(isOpen);
  const openDeleteDialog = (isOpen: boolean, id?: string) => {
    if (id) setSelectedMemoId(id);
    setShowDeleteDialog(isOpen);
  };


  const deleteMemo = async (id: string) => {
    try {
      await axios.delete(`${ApiEndPoint.baseUrl}/memos/${id}`);
      mutate(ApiEndPoint.getMemos);
      openDeleteDialog(false);
      alert("削除しました。");

    } catch {
      alert("削除に失敗しました。");
    }
  };

  const { data, error } = useFetch<Memo[]>(ApiEndPoint.getMemos);

  if (data) {
    return <MemoIndex showCreateModal={showCreateModal} openCreateModal={openCreateMemoModal} memos={data} className="text-3xl font-bold underline" openDeleteDialog={openDeleteDialog} showDeleteDialog={showDeleteDialog} deleteMemo={() => deleteMemo(selectedMemoId)}></MemoIndex>;
  }
  return <></>;
};

export default MemoIndexContainer;
