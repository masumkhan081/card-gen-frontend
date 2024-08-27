import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useAtom } from 'jotai'; // Assuming you are using Jotai for state management
import { isCurrentActEdit, selectedItemsAtom } from '../Atom/GlobalStates';

const SearchBox = ({ search, chgHandler, isShowing, searchResults, setIsShowing }) => {
  const [selectedItems, setSelectedItems] = useAtom(selectedItemsAtom);
  const [isCurrentActEdits, setIsCurrentActEdits] = useAtom(isCurrentActEdit);
  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log('Selected Items:', selectedItems); // Log selectedItems to the console

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isShowing) {
          setIsShowing(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isShowing, selectedItems]); // Added selectedItems to the dependency array

  useEffect(() => {
    if (search === '') {
      setIsShowing(false);
    }
  }, [search]);

  const handleItemClick = (item) => {
    setSelectedItems(() =>  item); // Adds the clicked item to selectedItems
    console.log('Clicked Item:', item); // Logs the clicked item to the console
    setIsShowing(false); // Optionally hide the dropdown after selection
    setIsCurrentActEdits(true);
     
  };


  return (
    <>
      <input
        type="search"
        id="search"
        placeholder="Search..."
        className="mb-7"
        value={search}
        onChange={chgHandler}
      />

      {isShowing && (
        <div
          ref={dropdownRef}
          className='absolute z-10 top-[71px] border border-gray-300 left-[25px] right-[25px]'
        >
          <ul className='p-0'>
            {searchResults.map((item) => (
              <li
                key={item.id}
                className='cursor-pointer hover:bg-gray-200 p-[1px] items-center flex border-b hover:no-underline'
                onClick={() => handleItemClick(item)}
              >
                <Image src={item.image} width={54} height={54} className="border" />
                <span className="w-full pl-2">
                  {item.playerName}<br />
                  {item.overall}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </>
  );
};

export default SearchBox;
