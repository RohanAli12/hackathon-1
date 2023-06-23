"use client"
import React,{useState} from 'react'
import { useAppSelector } from '../../../store/store'
import CartItemCard from '@/widgets/CartItemCard'
import Wrapper from '@/shared/Wrapper'
import {BiShoppingBag} from 'react-icons/bi'
import { productQtyInCartSelector, totalPriceSelector } from '../../../store/features/cartSlice'
import CheckOut from '@/components/CheckOutComp'
import { CartItem } from '../../../interfaces'

const Cart = () => {
  const cartItems = useAppSelector((state)=>state.cart.cartItems)
  const totalPrice = useAppSelector(totalPriceSelector)  
  if(cartItems.length == 0){
   return(
    <section className='mt-36'>
        <Wrapper>
        <h3 className='mt-20 font-bold tracking-wider text-xl md:text-3xl'>Shopping Cart</h3>
        <div className='flex flex-col items-center mt-24 font-bold text-2xl  md:text-5xl'>
        <p className='text-5xl md:text-6xl'><BiShoppingBag/></p>
        <h1 className='md:tracking-wider'>No Items in your shopping bag.</h1>
        <p className='mb-44'></p>
        </div>
        </Wrapper>
      </section>
  )
}

  return (
    <section className='mt-28'>
      <Wrapper>
      <h3 className='mt-28 font-bold tracking-wider text-xl md:text-3xl'>Shopping Cart</h3>
        <div className='flex md:flex-row flex-col'>
      <div className='md:w-8/12'>
      {
        cartItems.map((item: CartItem)=>(
          // eslint-disable-next-line react/jsx-key
          <CartItemCard cartItem={item}/>
        ))
      }
      </div>
       {/* Left  */}
       <div className='md:w-4/12 border mt-12 bg-slate-200 rounded-lg items-center flex flex-col'>
            <h1 className='text-3xl  md:text-4xl font-serif mt-4'>Order Summary</h1>
            <div className='flex text-2xl font-sans mt-5 gap-x-5'>
            <h3>Products:</h3>
            {!!cartItems.length && <p>{cartItems.length}</p>}
            </div>
            <div className='flex text-2xl font-sans mt-5 gap-x-8'>
            <h3>Sub Total:</h3>
            {!!totalPrice && <p>${totalPrice}</p>}
            </div>
            {/* <button className="bg-gradient-to-r mt-7 from-blue-500 to-purple-700 h-10 md:h-14 w-44 md:w-60 hover:shadow-lg duration-300 hover:scale-105 text-sm text-white font-semibold md:text-lg sm:px-4 sm:py-3 rounded-full px-3 py-2 hover:bg-[#808080]">CheckOut</button> */}
            <CheckOut /> 
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Cart
