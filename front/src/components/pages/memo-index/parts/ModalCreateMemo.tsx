import React from "react";
import { Label, Modal, Textarea, TextInput } from "flowbite-react";
import Button from "../../../ui-elements/Button";

type Props = {
  className?: string;
  title: string;
  switchCreateModal: (isOpen: boolean) => void;
  showModal: boolean;
};

const ModalCreateMemo: React.FC<Props> = ({ className, title, showModal, switchCreateModal }) => {
  return (
    <Modal show={showModal} onClose={() => switchCreateModal(false)}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <div className="space-y-2">
          <div className="mb-6">
            <div className="mb-2 block">
              <Label htmlFor="contents" value="タイトル" />
            </div>
            <TextInput type="text" id="title" placeholder="" required={true} />
          </div>
          <div id="textarea">
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
