import React from "react";
import { Modal } from "flowbite-react";
import Button from "../../../ui-elements/Button";
import { Folder } from "../../../../models/folder/type";
import useFetch from "../../../../hooks/useFecth";
import { SelectBoxOption } from "../../../../types";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "../../../ui-elements/TextField";
import SelectField from "../../../ui-elements/SelectField";
import TextAreaField from "../../../ui-elements/TextAreaField";
import axios from "axios";

type Props = {
  className?: string;
  title: string;
  openModal: (isOpen: boolean) => void;
  showModal: boolean;
};

type FormMemo = {
  title: string;
  folderId: number;
  contents: string;
  updatedAt: Date;
};

const foldersEndPoint = `${process.env.REACT_APP_BACKEND_END_POINT}/folders`;

const memoPostEndpoint = `${process.env.REACT_APP_BACKEND_END_POINT}/memos`;

const ModalCreateMemo: React.FC<Props> = ({ className, title, showModal, openModal }) => {
  const { data, error } = useFetch<Folder[]>(foldersEndPoint);

  const options = data?.map((folder) => {
    const option: SelectBoxOption = {
      key: String(folder.id),
      name: folder.name,
      value: folder.id,
    };
    return option;
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormMemo>();

  const onSubmit: SubmitHandler<FormMemo> = async (memo) => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    memo.updatedAt = new Date();
    try{
      const res = await axios.post(memoPostEndpoint, memo);
      openModal(false);
    }
    catch{alert("作成に失敗しました。")}

  };

  return (
    <Modal show={showModal} onClose={() => openModal(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <TextField required label="タイトル" register={register} name="title" />
            {errors.title && <span style={{ color: "red" }}>タイトルは必須です。</span>}
            <SelectField label="フォルダ" options={options} required register={register} name="folderId" />
            {errors.folderId && <span style={{ color: "red" }}>フォルダは必須です。</span>}
            <TextAreaField label="内容" register={register} name="contents" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex justify-end flex-grow">
            <div className="mr-4">
              <Button variant="secondary" label="キャンセル" onClick={() => openModal(false)} />
            </div>
            <div>
              <Button variant="primary" label="作成" type="submit" />
            </div>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalCreateMemo;
