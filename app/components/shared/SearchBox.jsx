import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SearchBox = ({ search, chgHandler, isShowing, searchResults, setIsShowing }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Logic to hide dropdown when clicking outside
        if (isShowing) {
          // Assuming there's a method to update `isShowing` to false
          // You need to pass `setIsShowing` as a prop or use it in a state management solution
          setIsShowing(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isShowing]);

  useEffect(() => {
    // Hide dropdown when search input is cleared
    if (search === '') {
      setIsShowing(false);
    }
  }, [search]);

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
              >
                <Link href={`/card-creator/${item.id}`}  >
                  <Image src={item.image} width={54} height={54} className="border" />
                  <span className="w-full pl-2">
                    {item.playerName}<br />
                    {item.overall}
                  </span>
                </Link>

              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBox;
