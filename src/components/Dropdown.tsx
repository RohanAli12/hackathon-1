import React, { useState } from 'react';
import bar from '/public/assets/bars.svg';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineLogin, AiOutlineShoppingCart } from 'react-icons/ai';
import CartBtn from '@/shared/CartBtn';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="backdrop-filter-none text-gray-800 font-semibold inline-flex items-center"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <Image src={bar} alt='bar' width={22} height={22} />
      </button>
      {dropdownOpen && (
        <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded shadow-lg">
          <li>
            <Link className="block text-xl px-4 py-2 text-gray-800 hover:bg-gray-200" href="/Products/Men">
              Men
            </Link>
          </li>
          <li>
            <Link className="block px-4 text-xl py-2 text-gray-800 hover:bg-gray-200" href="/Products/Women">
              Women
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 text-xl text-gray-800 hover:bg-gray-200" href="/Products/AllProducts">
              All Products
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 text-2xl text-gray-800 hover:bg-gray-200" href="/Cart">
              {<CartBtn/>}
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 text-3xl text-gray-800 hover:bg-gray-200" href="/register">
              {<AiOutlineLogin/>}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
