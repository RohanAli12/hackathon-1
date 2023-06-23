import React from 'react';
import { CartItem } from '../../interfaces';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import QtyBtnComp from '@/components/QtyBtnComp';
import { decreament, increament, removeFromCart } from '../../store/features/cartSlice';
import { useAppDispatch } from '../../store/store';
import { TrashIcon } from '@heroicons/react/24/solid'
import Wrapper from '@/shared/Wrapper';
import { handleLocalCart,removeCartItem } from '@/shared/AddToCartBtn';


interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  //   const imageUrl = cartItem.product?.image ? urlForImage(cartItem.product.image).url() : '';
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(cartItem.product._id))
    removeCartItem(cartItem.product._id);
  }

  return (
    <section className='mt-28'>
      <Wrapper>
        <div className="flex flex-col md:flex-row gap-5">
          <Image src={urlForImage(cartItem.product.image).url()} width={200} height={200} className='rounded-xl' alt={cartItem.product?.title} />
          <div className='flex flex-row gap-6 md:gap-x-16'>
            <div className='space-y-3'>
              <p className='font-mono text-xl md:text-2xl'>{cartItem.product.title}</p>
              <p className='font-bold text-lg'>{cartItem.product.category.name}</p>
              <p className='font-bold text-lg'>Delivery Estimation</p>
              <p className='font-bold text-lg text-yellow-300'>5 Working Days</p>
              <p className='text-lg font-semibold'>${cartItem.product.price}</p>
              <p className='text-lg font-extrabold'>Total Price: ${cartItem.qty * cartItem.product.price}</p>
            </div>
            <div className='flex flex-col items-end justify-between'>
              <button onClick={handleRemove} className='w-12 h-12 p-2 rounded-full bg-red-500 hover:shadow-2xl  hover:shadow-black '><TrashIcon /></button>
              <QtyBtnComp qty={cartItem.qty}
                onDecrease={() => {
                  dispatch(decreament(cartItem.product))
                  handleLocalCart(cartItem.product._id, cartItem.qty - 1)
                }}
                onIncrease={() => {
                  dispatch(increament(cartItem.product))
                  handleLocalCart(cartItem.product._id, cartItem.qty + 1)
                }} />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>

  );
}

export default CartItemCard;
