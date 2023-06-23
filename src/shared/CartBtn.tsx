'use client'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { totalCartItemsSelector, totalPriceSelector } from "../../store/features/cartSlice"
import { useAppSelector } from "../../store/store"

interface Props{
  className?:string
}

const CartBtn = (props:Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector)
//   const val = 'h'
  return (
    <div className={`${props.className} relative`}>
      <AiOutlineShoppingCart className='  text-3xl md:text-4xl'/>
      {!!totalItems && <div
      key={totalItems}
      className="bg-red-600 flex justify-center items-center  animate-pingOnce rounded-full w-6 text-base absolute -top-3.5 left-5 md:-top-4  md:-right-2 text-white">
        {totalItems}
        </div>}
    </div>
  )
}

export default CartBtn
