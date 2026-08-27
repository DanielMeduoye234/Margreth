import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  const icons = {
    success: <CheckCircle2 className="toast-icon text-success" size={20} />,
    error: <AlertCircle className="toast-icon text-error" size={20} />,
    info: <Info className="toast-icon text-info" size={20} />
  };

  return (
    <div className={`toast-banner toast-${type}`}>
      <div className="toast-content">
        {icons[type]}
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close" onClick={onClose} aria-label="Close notification">
        <X size={16} />
      </button>
    </div>
  );
};
