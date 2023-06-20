import React from 'react';
import { CartItem } from '../../interfaces';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/image';
import QtyBtnComp from '@/components/QtyBtnComp';
import { decreament, increament } from '../../store/features/cartSlice';
import { useAppDispatch } from '../../store/store';

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({cartItem}: Props) => {
//   const imageUrl = cartItem.product?.image ? urlForImage(cartItem.product.image).url() : '';
const dispatch=useAppDispatch()
  return (
    <div className='grid grid-cols-4 items-center py-2'>
      {/* <Image src={imageUrl} width={200} height={200} alt={cartItem.product?.title} /> */}
      <p>title:{cartItem.product.title}</p>
      <p>price:{cartItem.product.price}</p>
      <p>&#xd7;</p>
      <QtyBtnComp qty={cartItem.qty} 
      onDecrease={()=>dispatch(decreament(cartItem.product))}
      onIncrease={()=>dispatch(increament(cartItem.product))} />
    </div>
  );
}

export default CartItemCard;
