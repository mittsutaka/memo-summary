import React from "react";
import MemoIndex from "./MemoIndex";
import { Memo } from "../../../models/memo/type";
import useFetch from "../../../hooks/useFecth";

const endPoint = `${process.env.REACT_APP_BACKEND_END_POINT}/memos`;

const MemoIndexContainer: React.FC = () => {

  const { data, error } = useFetch<Memo[]>(endPoint);

  if (data) {
    return <MemoIndex memos={data} className="text-3xl font-bold underline"></MemoIndex>;
  }
  return <></>
};

export default MemoIndexContainer;
