import React,{FC} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductInterface } from '@/shared/ProductInterface'
import { urlForImage } from '../../sanity/lib/image'


const UpcommingComponent:FC<{item:ProductInterface}> = ({item}) => {
  
  // const infoPageUrl = `/product/${item._id}?image=${encodeURIComponent(urlForImage(item.image).url())}&price=${encodeURIComponent(item.price)}&description=${encodeURIComponent(item.description)}&title=${encodeURIComponent(item.title)}`;
  return (
   <Link href={`/ProductsInfo/${item._id}`}>
    <div className="max-w-xl rounded overflow-hidden bg-[#E5E4E2] md:flex-col flex-col flex shadow-lg  hover:scale-105 md:hover:scale-105  hover:duration-300 hover:ease-linear ">
          <Image src={urlForImage(item.image).url()} className='max-h-[280px] object-cover object-center ' width={400} height={400}  alt="Upcomming Events" />
          <strong className="text-slate-700 font-extrabold text-2xl">{item.title}</strong>
          <div className="font-semibold text-xl mb-2">${item.price}</div>          
    </div>
   </Link>
  )
}

export default UpcommingComponent
