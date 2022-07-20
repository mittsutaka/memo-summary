import React from "react";
import { Modal } from "flowbite-react";
import Button from "../../../ui-elements/Button";
import { Category } from "../../../../models/category/type";
import useFetch from "../../../../hooks/useFecth";
import { SelectBoxOption } from "../../../../types";
import TextAreaForm from "../../../ui-elements/TextAreaForm";
import TextForm from "../../../ui-elements/TextForm";
import SelectForm from "../../../ui-elements/SelectForm";

type Props = {
  className?: string;
  title: string;
  switchCreateModal: (isOpen: boolean) => void;
  showModal: boolean;
};

const categoriesEndPoint = `${process.env.REACT_APP_BACKEND_END_POINT}/categories`;

const ModalCreateMemo: React.FC<Props> = ({ className, title, showModal, switchCreateModal }) => {
  const { data, error } = useFetch<Category[]>(categoriesEndPoint);
  
  const options = data?.map((category) => {
    const option: SelectBoxOption = {
      Key: String(category.Id),
      Name: category.Name,
    };
    return option;
  });

  return (
    <Modal show={showModal} onClose={() => switchCreateModal(false)}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          <TextForm required label="タイトル" />
          <SelectForm label="フォルダ" options={options} required />
          <TextAreaForm label="内容"/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="flex justify-end flex-grow">
          <div className="mr-4">
            <Button variant="secondary" label="キャンセル" />
          </div>
          <div>
            <Button variant="primary" label="作成" />
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreateMemo;
