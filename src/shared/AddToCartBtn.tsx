'use client'
import React, { useState, useEffect } from 'react';
import { ProductInterface } from '@/shared/ProductInterface';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { decreament, increament, productQtyInCartSelector, saveCart } from '../../store/features/cartSlice';
import QtyBtnComp from '../components/QtyBtnComp';
import { getCookies, getCookie, setCookie } from "cookies-next";
import Link from 'next/link';
import toast from 'react-hot-toast';

interface Props {
  product: ProductInterface;
}

const updateCartItems = (items: { quantity: number; product_id: string }[]) => {
  if (items.length === 0) {
    // localStorage.removeItem("cartItems"); // Remove the "cartItems" key if the cart is empty
  } else {
    localStorage.setItem("cartItems", JSON.stringify(items)); // Update the "cartItems" key with the updated items
  }
};


export const removeCartItem = (productId: string) => {
  const getCart = localStorage.getItem("cartItems");
  const storeCartItem = getCart ? JSON.parse(getCart) : [];

  const updatedCartItems = storeCartItem.filter(
    (item: { product_id: string }) => item.product_id !== productId
  );

  updateCartItems(updatedCartItems);
};


const handleLocalCart = (product_id: string, newQty: number) => {
  const getCart = localStorage.getItem("cartItems");
  const storeCartItem = getCart ? JSON.parse(getCart) : [];

  const existingCartItemIndex = storeCartItem.findIndex(
    (item: { product_id: string }) => item.product_id === product_id
  );

  if (existingCartItemIndex !== -1) {
    // If the product is already in the cart, update its quantity
    const updatedCartItems = [...storeCartItem];
    updatedCartItems[existingCartItemIndex] = {
      ...updatedCartItems[existingCartItemIndex],
      quantity: newQty,
    };

    updateCartItems(updatedCartItems);
  } else {
    // If the product is not in the cart, add it
    const newCartItem = {
      quantity: newQty,
      product_id: product_id,
    };
    const updatedCartItems = [...storeCartItem, newCartItem];

    updateCartItems(updatedCartItems);
  }
};


const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector(state => productQtyInCartSelector(state, props.product._id)) || 0;
  const dispatch = useAppDispatch();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const cook = getCookie('authToken');
    if (cook) {
      setLoggedIn(true);
    }
  }, []);


  const toApi = () => {
    dispatch(increament(props.product));
    handleLocalCart(props.product._id, qty + 1);
    toast.success('Added To Cart!')
  };

  if (!isLoggedIn) {
    return (
      <div>
        <button className="cursor-not-allowed bg-gradient-to-r  from-blue-500 to-purple-700 h-10 md:h-14 w-44 md:w-60 hover:shadow-lg duration-300 hover:scale-105 text-sm text-white font-semibold md:text-lg sm:px-4 sm:py-3 rounded-full px-3 py-2 hover:bg-[#808080]" disabled>
          Add To Cart
        </button>
        <Link href="/register">
          <div className="bg-red-100 border mt-5 border-red-500 text-red-500 rounded-md p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M13.293 3.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-8-8a1 1 0 010-1.414l3-3a1 1 0 011.414 0l1.293 1.293L10 9.586l5.293-5.293 1.293-1.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm">
                  <span className="font-medium">Click here to login first</span> to add to cart.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (!qty) {
    return (
      <button className="bg-gradient-to-r from-blue-500 to-purple-700 h-10 md:h-14 w-44 md:w-60 hover:shadow-lg duration-300 hover:scale-105 text-sm text-white font-semibold md:text-lg sm:px-4 sm:py-3 rounded-full px-3 py-2 hover:bg-[#808080]" onClick={() => toApi()}>
        Add to cart
      </button>
    );
  }

  return (
    <QtyBtnComp
      qty={qty}
      onDecrease={() => {
        dispatch(decreament(props.product));
        toast.success("Removed Sucessfully")
        handleLocalCart(props.product._id, qty - 1);
      }}
      onIncrease={() => {
        dispatch(increament(props.product));
        toast.success("Added Sucessfully")
        handleLocalCart(props.product._id, qty + 1);
      }}
    />
  );
};

export default AddToCartBtn;
export { handleLocalCart };
