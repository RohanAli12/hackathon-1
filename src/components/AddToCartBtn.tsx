import React from 'react'
import { ProductInterface } from '@/shared/ProductInterface'
import { useAppSelector } from '../../store/store'
import { productQtyInCartSelector } from '../../store/features/cartSlice'
import Providers from './Providers'

interface Props{
    product:ProductInterface
}

const AddToCartBtn = (props:Props) => {
        const qty = useAppSelector(state=>productQtyInCartSelector(state,props.product._id))

        if(!qty) return <div>
         Add to cart
        </div>
         return (
         <div>
           AddToCartBtn
         </div>
       )
}

export default AddToCartBtn
