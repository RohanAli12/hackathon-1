'use client'
import React from 'react'
import { ProductInterface } from '@/shared/ProductInterface'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { decreament, increament, productQtyInCartSelector } from '../../store/features/cartSlice'
import QtyBtnComp from '../components/QtyBtnComp'

interface Props {
  product: ProductInterface
}

const AddToCartBtn = (props: Props) => {
  const qty = useAppSelector(state => productQtyInCartSelector(state, props.product._id))

  const dispatch = useAppDispatch()


  if (!qty) return (<button className='bg-slate-400 border w-20 h-20' onClick={() => dispatch(increament(props.product))}> Add to cart</button>)
  return (
    <QtyBtnComp qty={qty}
      onDecrease={() => dispatch(decreament(props.product))}
      onIncrease={() => dispatch(increament(props.product))} />
      )

}

export default AddToCartBtn
