import React, { useState } from "react";
import MemoIndex from "./MemoIndex";
import { Memo } from "../../../models/memo/type";
import useFetch from "../../../hooks/useFecth";
import { ApiEndPoint } from "../../../configs/apiEndPoint";

const MemoIndexContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const openCreateMemoModal = (isOpen: boolean): void => setShowModal(isOpen);

  const { data, error } = useFetch<Memo[]>(ApiEndPoint.getMemos);

  if (data) {
    return <MemoIndex showModal={showModal} openCreateModal={openCreateMemoModal} memos={data} className="text-3xl font-bold underline" ></MemoIndex>;
  }
  return <></>;
};

export default MemoIndexContainer;
