import Link from 'next/link'
import React, { FC } from 'react'

const Button:FC<{text:string}> = ({text}) => {
  return (
    <Link href="/Products/AllProducts">
        <button  className="bg-gradient-to-r from-blue-500 to-purple-700 h-10 md:h-14 w-44 md:w-60 hover:shadow-lg duration-300 hover:scale-105 text-sm  text-white font-semibold  md:text-lg  sm:px-4 sm:py-3  rounded-full px-3 py-2  hover:bg-[#808080]" >{text}</button>
    </Link>
  )
}

export default Button