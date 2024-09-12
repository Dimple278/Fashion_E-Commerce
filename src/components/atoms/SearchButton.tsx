import React from "react";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex-1 shrink gap-2.5 self-stretch p-4 rounded bg-stone-100 min-w-[240px] max-md:max-w-full"
      onClick={onClick}
    >
      Search
    </button>
  );
};

export default SearchButton;
