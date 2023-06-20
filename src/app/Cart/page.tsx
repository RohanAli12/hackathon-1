"use client"
import React from 'react'
import { useAppSelector } from '../../../store/store'
import CartItemCard from '@/widgets/CartItemCard'

const Cart = () => {
  const cartItems = useAppSelector((state)=>state.cart.cartItems)
  return (
    <div className='p-2 mt-28'>
      {
        cartItems.map((item)=>(
          // eslint-disable-next-line react/jsx-key
          <CartItemCard cartItem={item}  />
        ))
      }
    </div>
  )
}

export default Cart
