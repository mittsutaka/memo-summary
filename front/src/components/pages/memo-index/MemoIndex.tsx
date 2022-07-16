import React from "react";
import Layout from "../../layouts/layout/Layout";

type Props = {
  name: string;
  className?: string;
};

const MemoIndex: React.FC<Props> = ({ name }) => {
  return <Layout>{name}</Layout>
};

export default MemoIndex;
