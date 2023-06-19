import React, { useState } from 'react';
import bar from '/public/assets/bars.svg';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <Image src={bar} alt='bar' width={20} height={20} />
        {/* <svg
          className={`ml-2 h-5 w-5 transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 6.707a1 1 0 0 1 0 1.414L2.414 11h15.172a1 1 0 1 1 0 2H2.414l2.879 2.879a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0z"
            clipRule="evenodd"
          /> */}
        {/* </svg> */}
      </button>
      {dropdownOpen && (
        <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded shadow-lg">
          <li>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/Men">
              Men
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/Women">
              Women
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/All-Products">
              All Products
            </a>
          </li>
          <li>
            <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="/">
              {<AiOutlineShoppingCart/>}
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
