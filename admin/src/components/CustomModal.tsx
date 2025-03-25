import { Modal, Button } from "react-bootstrap";

interface CustomModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  message: React.ReactNode;
  variant?: "success" | "danger" | "warning" | "info";
}

const variantColors = {
  success: "bg-success text-white",
  danger: "bg-danger text-white",
  warning: "bg-warning text-dark",
  info: "bg-info text-dark",
};

function CustomModal({ show, onClose, title, message, variant = "info" }: CustomModalProps) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton className={variantColors[variant]}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant={variant} onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
