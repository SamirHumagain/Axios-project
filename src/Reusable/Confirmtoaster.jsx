import React from "react";

const Confirmtoaster = ({ message, onConfirm, onCancel }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-2">Confirmation</h2>
        <p>{message}</p>
        <div className="flex justify-end mt-4 gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmtoaster;
