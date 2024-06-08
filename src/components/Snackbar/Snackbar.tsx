import { useEffect } from "react";
import "./Snackbar.css";

interface SnackbarProps {
  message: string;
  isVisible: boolean;
  onClose(): void;
}

const Snackbar: React.FC<SnackbarProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return <div className={`snackbar ${isVisible ? "show" : ""}`}>{message}</div>;
};

export default Snackbar;
