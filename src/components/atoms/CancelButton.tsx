import React from "react";

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
  return (
    <button className="gap-2.5 self-stretch p-4 rounded" onClick={onClick}>
      Cancel
    </button>
  );
};

export default CancelButton;
