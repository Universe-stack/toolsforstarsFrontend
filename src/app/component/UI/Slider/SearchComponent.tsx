//@ts-nocheck
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);


  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://createcamp.onrender.com/tools/api/search-tools?query=${query}`);
      const data = await response.json();
      console.log(data, 'data from Algolia');
      setResults(data.tools);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(true);
    handleSearch();
  };

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      inputRef.current &&
      !inputRef.current.contains(e.target)
    ) {
      setShowDropdown(false); // Hide dropdown when clicking outside
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const generateLink = (productType, productId) => {
    switch (productType) {
      case 'saas':
        return `/saas/products/${productId}`;
      case 'app':
        return `/apps/products/${productId}`;
      case 'course':
        return `/course/products/${productId}`;
      default:
        return '#';
    }
  };

  return (
    <section className='relative'>
      <div className='flex justify-center gap-2'>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search tools..."
          className='border border-[#ccc] py-2 px-2 rounded-lg bg-starsWhite text-starsBlack'
          ref={inputRef}
        />
        <button
          type="button" // Ensure button does not trigger form submission
          onClick={handleSearch}
          className='bg-starsBlack text-starsWhite py-2 px-4 rounded-lg'
        >
          <span className='text-starsWhite'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="11" cy="11" r="7" stroke-width="2"></circle>
            <line x1="17" y1="17" x2="21" y2="21" stroke-width="2" stroke-linecap="round"></line>
          </svg>
          </span>
        </button>
      </div>
      {showDropdown && (
        <div className="absolute mt-2 w-full max-h-60  z-[900] " ref={dropdownRef}>
          {results.length > 0 ? (
            <ul className='bg-starsWhite border border-starsBlack h-[10rem] overflow-y-auto'>
              {results.map((tool) => (
                <Link href={generateLink(tool.productType, tool.objectID)} key={tool.objectID}>
                  <li key={tool.objectID} className='p-2 rounded-md  cursor-pointer m-4 hover:bg-[#ccc] hover:text-starsBlack flex justify-between items-center'>
                    <div className='w-[70%]'>
                      <h3 className="font-[700]">{tool.name}</h3>
                      <p className="font-[400] text-[14px]">{tool.productType}</p>
                    </div>
                    <div className='w-[30%]'>
                        <Image src={`${tool.logo}`} alt={tool.name} width={250} height={250} className='object-contain w-full h-full rounded-md' />
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <div className="p-2 text-center bg-starsWhite m-2">No results found</div>
          )}
        </div>
      )}
    </section>
  );
};

export default SearchComponent;
