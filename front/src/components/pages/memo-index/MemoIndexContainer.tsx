import React, { useState } from "react";
import MemoIndex from "./MemoIndex";
import { Memo } from "../../../models/memo/type";
import useFetch from "../../../hooks/useFecth";

// ローカルと本番環境で切り替える必要ありなので他ファイルに移動したほうがよさそう
const endPoint = `${process.env.REACT_APP_BACKEND_END_POINT}/memos?_expand=folder&_sort=updatedAt&_order=desc`;

const MemoIndexContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const openCreateMemoModal = (isOpen: boolean): void => setShowModal(isOpen);

  const { data, error } = useFetch<Memo[]>(endPoint);

  if (data) {
    return <MemoIndex showModal={showModal} openCreateModal={openCreateMemoModal} memos={data} className="text-3xl font-bold underline" ></MemoIndex>;
  }
  return <></>;
};

export default MemoIndexContainer;
