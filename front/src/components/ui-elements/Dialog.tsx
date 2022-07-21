import { Modal } from "flowbite-react";
import React from "react";
import Button from "./Button";

type Props = {
  className?: string;
  okButtonText: string;
  cancelButtonText?: string;
  message: string;
  show: boolean;
  openDialog: (isOpen: boolean) => void;
  okClickEvent?: () => void;
};

const Dialog: React.FC<Props> = ({ className, message, cancelButtonText, okButtonText, show, openDialog, okClickEvent }) => {
  return (
    <Modal
      show={show}
      size="md"
      popup={true}
      onClose={() => {
        openDialog(false);
      }}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{message}</h3>
          <div className="flex justify-center gap-4">
            {cancelButtonText && (
              <Button
                variant="secondary"
                label={cancelButtonText}
                onClick={() => {
                  openDialog(false);
                }}
              >
                {cancelButtonText}
              </Button>
            )}
            <Button variant="warning" onClick={okClickEvent} label={okButtonText} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Dialog;
