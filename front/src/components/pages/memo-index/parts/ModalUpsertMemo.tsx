import React, { useState } from "react";
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
import axios from "axios";
import { useSWRConfig } from "swr";

type Props = {
  className?: string;
  openModal: (isOpen: boolean, isUpdate?: boolean, id?: string) => void;
  showModal: boolean;
  isUpdate?: boolean;
  defaultValues?: Memo;
  selectedMemoId: string;
};

const ModalUpsertMemo: React.FC<Props> = ({ className, showModal, openModal, isUpdate = false, selectedMemoId }) => {
  const { data: folders } = useFetch<Folder[]>(ApiEndPoint.getFolders);
  const { data: memo } = useFetch<Memo>(`${ApiEndPoint.getMemo}/${selectedMemoId}`);
  const labelText = isUpdate ? "編集" : "作成";
  const title = `メモを${labelText}する`;

  const options = folders?.map((folder) => {
    const option: SelectBoxOption = {
      key: String(folder.id),
      name: folder.name,
      value: folder.id,
    };
    return option;
  });

  const { mutate } = useSWRConfig();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Memo>();

  if (!isUpdate || memo) {

    // もっといい書き方あると思う。
    if(isUpdate){
      setValue("contents", memo?.contents);
      setValue("title", String(memo?.title));
      setValue("folderId", String(memo?.folderId));
    }
    
    const upsertMemoHandler: SubmitHandler<Memo> = async (memo) => {
      axios.defaults.headers.common["Content-Type"] = "application/json";
      memo.updatedAt = new Date();
      const labelText = isUpdate ? "編集" : "作成";
      const url = isUpdate ? `${ApiEndPoint.postMemo}/${selectedMemoId}` : ApiEndPoint.postMemo;

      try {
        if (isUpdate) {
          memo.id = selectedMemoId;
          await axios.put(url, memo);
        } else {
          await axios.post(url, memo);
        }
        mutate(ApiEndPoint.getMemos);
        openModal(false);
        reset();
      } catch {
        alert(`${labelText}に失敗しました。`);
      }
    };

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
  } else {
    return <></>;
  }
};

export default ModalUpsertMemo;
