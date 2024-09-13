import React from "react";

import Button from "../atoms/Button";

interface SearchBarProps {
  onSearch: () => void;
  onCancel: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onCancel }) => {
  return (
    <div className="flex flex-wrap items-start self-stretch px-80 py-6 text-xs tracking-wide leading-none whitespace-nowrap border-t border-solid border-t-zinc-300 text-neutral-500 max-md:px-5">
      <Button text="Search" variant="search" onClick={onSearch} />
      <Button text="Cancel" variant="cancel" onClick={onCancel} />
    </div>
  );
};

export default SearchBar;
