import React, { useEffect } from "react";
import { Modal } from "flowbite-react";
import Button from "../../../ui-elements/Button";
import { Folder } from "../../../../models/folder/type";
import useFetch from "../../../../hooks/useFecth";
import { SelectBoxOption } from "../../../../types";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "../../../ui-elements/TextField";
import SelectField from "../../../ui-elements/SelectField";
import TextAreaField from "../../../ui-elements/TextAreaField";
import { ApiEndPoint } from "../../../../configs/apiEndPoint";
import { Memo } from "../../../../models/memo/type";

type Props = {
  className?: string;
  openModal: (isOpen: boolean, isUpdate?: boolean, id?: string) => void;
  showModal: boolean;
  isUpdate?: boolean;
  defaultValues?: Memo;
  upsertMemoHandler: SubmitHandler<Memo>;
};

const ModalUpsertMemo: React.FC<Props> = ({ className, showModal, openModal, isUpdate = false, defaultValues, upsertMemoHandler }) => {
  const { data, error } = useFetch<Folder[]>(ApiEndPoint.getFolders);
  const labelText = isUpdate ? "編集" : "作成";
  const title = `メモを${labelText}する`;

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
    reset,
    formState: { errors },
  } = useForm<Memo>({
    defaultValues: {
      title: "",
    },
  });

  return (
    <Modal show={showModal} onClose={() => openModal(false)}>
      <form onSubmit={handleSubmit(upsertMemoHandler)}>
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
              <Button
                variant="secondary"
                label="キャンセル"
                onClick={() => {
                  openModal(false);
                  reset();
                }}
              />
            </div>
            <div>
              <Button variant="primary" label={labelText} type="submit" />
            </div>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalUpsertMemo;
