// Dropdown.js
import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ sections, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (selectedOption) => {
    const updatedSections = sections.map((section) => ({
      ...section,
      options: section.options.map((option) =>
        option.value === selectedOption.value ? { ...option, selected: !option.selected } : option
      ),
    }));

    onSelect(selectedOption);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded inline-flex items-center w-full"
      >
        Select Options
        <svg
          className={`fill-current h-4 w-4 ml-2 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M5 8l5 5 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md">
          {sections.map((section) => (
            <div key={section.title} className="p-4">
              <p className="font-bold mb-2">{section.title}</p>
              {section.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(option)}
                >
                  <input
                    type="checkbox"
                    checked={option.selected}
                    onChange={() => handleSelect(option)}
                    className="mr-2 cursor-pointer"
                  />
                  <span>{option.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
