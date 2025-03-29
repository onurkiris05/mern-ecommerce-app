import { Modal } from "react-bootstrap";
import { Button } from "../Button";

interface ConfirmModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  yesText?: string;
  noText?: string;
  yesColor?: string;
  noColor?: string;
}

function ConfirmModal({
  show,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to proceed?",
  yesText = "Yes",
  noText = "No",
  yesColor = "red",
  noColor = "lightgray",
}: ConfirmModalProps) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer className="d-flex justify-content-center gap-4">
        <Button.Secondary size="1.5rem" color={noColor} onClick={onClose}>
          {noText}
        </Button.Secondary>
        <Button.Secondary size="1.5rem" color={yesColor} onClick={onConfirm}>
          {yesText}
        </Button.Secondary>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
