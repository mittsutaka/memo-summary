import React, { useState } from "react";
import MemoIndex from "./MemoIndex";
import { Memo } from "../../../models/memo/type";
import useFetch from "../../../hooks/useFecth";

const endPoint = `${process.env.REACT_APP_BACKEND_END_POINT}/memos?_expand=`;

const MemoIndexContainer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleCreateMemoModal = (isOpen: boolean): void => setShowModal(isOpen);

  const { data, error } = useFetch<Memo[]>(endPoint);

  if (data) {
    return <MemoIndex showModal={showModal} switchCreateModal={toggleCreateMemoModal} memos={data} className="text-3xl font-bold underline" ></MemoIndex>;
  }
  return <></>;
};

export default MemoIndexContainer;
