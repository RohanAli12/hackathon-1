import React from 'react'


interface Props{
    onIncrease():void;
    onDecrease():void;
    qty:number
}
const QtyBtnComp = (props:Props) => {
  return (
    <div className='flex items-center gap-4'>
      <button onClick={props.onDecrease} className='w-12 h-12 rounded-full bg-red-500 hover:shadow-2xl hover:shadow-black '>-</button>
      <p className='text-xl font-extrabold'>{props.qty}</p>
      <button onClick={props.onIncrease} className='w-12 h-12 text-xl rounded-full bg-green-600 hover:shadow-2xl  hover:shadow-black'>+</button>
    </div>
  )
}

export default QtyBtnComp
