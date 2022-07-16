import React, { useEffect } from "react";
import MemoIndex from "./MemoIndex";
import axios, { AxiosResponse } from "axios";
import { Memo } from "../../../models/memo/type";

const endPoint = `${process.env.REACT_APP_BACKEND_END_POINT}/memos`;

const MemoIndexContainer: React.FC = () => {
  const [memos, setMemos] = React.useState<Memo[]>([]);

  const getMemos = async () => {
    const response: AxiosResponse<Memo[]> = await axios.get(endPoint);
    setMemos(response.data);
  };

  useEffect(() => {
    getMemos();
  }, []);

  return <MemoIndex memos={memos} className="text-3xl font-bold underline"></MemoIndex>;
};

export default MemoIndexContainer;
