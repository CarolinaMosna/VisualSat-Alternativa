import React, { useEffect } from 'react';
import './NosotrosModal.css';

const NosotrosModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="nosotros-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="nosotros-modal-title"
    >
      <div
        className="NosotrosModalCard"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="nosotrosModalHeader">
          <h4 id="nosotros-modal-title">Nosotros</h4>
          <button
            type="button"
            className="nosotros-modal-close"
            onClick={onClose}
            aria-label="Cerrar modal de nosotros"
          >
            &times;
          </button>
        </div>

        <div className="nosotrosModalBody">
          <p>Somos VisualSat</p>
        </div>
      </div>
    </div>
  );
};

export default NosotrosModal;