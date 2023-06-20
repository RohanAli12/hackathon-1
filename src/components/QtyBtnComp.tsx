import React from 'react'
import {TrashIcon} from '@heroicons/react/24/solid'

interface Props{
    onIncrease():void;
    onDecrease():void;
    qty:number
}
const QtyBtnComp = (props:Props) => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <button onClick={props.onDecrease} className='w-9 h-9 rounded-full bg-neutral-600 hover:shadow-2xl hover:shadow-black '>{props.qty==1?<TrashIcon/>:"-"}</button>
      <p>{props.qty}</p>
      <button onClick={props.onIncrease} className='w-9 h-9 rounded-full bg-neutral-600 hover:shadow-2xl  hover:shadow-black'>+</button>
    </div>
  )
}

export default QtyBtnComp
