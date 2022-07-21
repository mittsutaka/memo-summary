import React, { useState } from "react";
import MemoIndex from "./MemoIndex";
import { Memo } from "../../../models/memo/type";
import useFetch from "../../../hooks/useFecth";
import { ApiEndPoint } from "../../../configs/apiEndPoint";
import axios from "axios";
import { useSWRConfig } from "swr";
import { useForm, SubmitHandler } from "react-hook-form";

const MemoIndexContainer: React.FC = () => {
  const { mutate } = useSWRConfig();

  // ここのstateの持ち方これでいいのだろうか、カスタムフック使った方がいい気がする
  const [selectedMemoId, setSelectedMemoId] = useState("");
  const [showUpsertModal, setShowUpsertModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const openUpsertMemoModal = (isOpen: boolean, isUpdate?: boolean, id?: string) => {
    if (isUpdate && id) {
      setIsUpdate(true);
      setSelectedMemoId(id);
    }
    setShowUpsertModal(isOpen);
    if (!isOpen) {
      setSelectedMemoId("");
      setIsUpdate(false);
    }
  };

  const openDeleteDialog = (isOpen: boolean, id?: string) => {
    if (id) setSelectedMemoId(id);
    setShowDeleteDialog(isOpen);
  };

  const deleteMemoAsync = async () => {
    try {
      await axios.delete(`${ApiEndPoint.baseUrl}/memos/${selectedMemoId}`);
      mutate(ApiEndPoint.getMemos);
      openDeleteDialog(false);
      alert("削除しました。");
    } catch {
      alert("削除に失敗しました。");
    }
  };
  
  const upsertMemoHandler: SubmitHandler<Memo> = async (memo) => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    memo.updatedAt = new Date();
    const labelText = isUpdate ? "編集" : "作成";
    try {
      await axios.post(ApiEndPoint.postMemo, memo);
      mutate(ApiEndPoint.getMemos);
      setShowUpsertModal(false);
    } catch {
      alert(`${labelText}に失敗しました。`);
    }
  };

  const { data, error } = useFetch<Memo[]>(ApiEndPoint.getMemos);

  if (data) {
    return (
      <MemoIndex
        showUpsertModal={showUpsertModal}
        openUpsertModal={openUpsertMemoModal}
        memos={data}
        className="text-3xl font-bold underline"
        openDeleteDialog={openDeleteDialog}
        showDeleteDialog={showDeleteDialog}
        deleteMemo={deleteMemoAsync}
        upsertMemoHandler={upsertMemoHandler}
        isUpdate={isUpdate}
      ></MemoIndex>
    );
  }
  return <></>;
};

export default MemoIndexContainer;
