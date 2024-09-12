import React from "react";
import SearchButton from "../atoms/SearchButton";
import CancelButton from "../atoms/CancelButton";

interface SearchBarProps {
  onSearch: () => void;
  onCancel: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onCancel }) => {
  return (
    <div className="flex flex-wrap items-start self-stretch px-80 py-6 text-xs tracking-wide leading-none whitespace-nowrap border-t border-solid border-t-zinc-300 text-neutral-500 max-md:px-5">
      <SearchButton onClick={onSearch} />
      <CancelButton onClick={onCancel} />
    </div>
  );
};

export default SearchBar;
