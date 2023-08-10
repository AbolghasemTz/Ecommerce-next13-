"use client"
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

function SearchIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <CiSearch size={24}  className="absolute text-[#417F56] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={handleIconClick} />
      {isOpen && (
        <input type="text" placeholder="جستجو..." className="absolute top-8 px-2 left-1/2 transform -translate-x-1/2 py-2 w-64 rounded-lg border border-[#E5F2E9] focus:outline-none focus:ring-2 focus:ring-[#417F56] focus:border-transparent" />
      )}
    </div>
  );
}

export default SearchIcon;