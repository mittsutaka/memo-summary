import React from "react";
import { Label, Modal, Select, Textarea, TextInput } from "flowbite-react";
import Button from "../../../ui-elements/Button";
import { Category } from "../../../../models/category/type";
import useFetch from "../../../../hooks/useFecth";

type Props = {
  className?: string;
  title: string;
  switchCreateModal: (isOpen: boolean) => void;
  showModal: boolean;
};

const categoriesEndPoint = `${process.env.REACT_APP_BACKEND_END_POINT}/categories`;

const ModalCreateMemo: React.FC<Props> = ({ className, title, showModal, switchCreateModal }) => {
  const { data, error } = useFetch<Category[]>(categoriesEndPoint);
  return (
    <Modal show={showModal} onClose={() => switchCreateModal(false)}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="space-y-2">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="contents" value="タイトル" />
            </div>
            <TextInput type="text" placeholder="" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select your country" />
            </div>
            <Select required={true}>
              {data?.map((category) => {
                return <option key={category.Id}>{category.Name}</option>;
              })}
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="contents" value="内容" />
            </div>
            <Textarea id="contents" placeholder="" rows={4} />
          </div>
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
