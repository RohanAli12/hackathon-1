import { getAllProductSanity } from '@/app/cmsFetch'
import Link from 'next/link'
import { ProductInterface } from '@/shared/ProductInterface'
import Wrapper from '@/shared/Wrapper'
import Image from 'next/image'
import { urlForImage } from '../../../../sanity/lib/image'

const page = async ({ params }: { params: { category: string } }) => {
    const data: ProductInterface[] = await getAllProductSanity()
    const filterData = data.filter((items: any) => items.category.name === params.category)
   
    return (   
        <section className="mt-28">
            <Wrapper>
                <div className=" grid  md:grid-cols-[repeat(3,auto)] grid-rows-[repeat(3,auto)]  justify-center  gap-10">
                    {params.category !== "AllProducts" &&
                        filterData.map((items: ProductInterface) => (         
                            <Link key={items._id} href={`/AllProductsInfo/${items._id}`}>
                                <div className="max-w-xl rounded overflow-hidden bg-[#E5E4E2] flex-col  flex shadow-lg  hover:scale-105  hover:duration-300 hover:ease-linear ">
                                    <Image src={urlForImage(items.image).url()} className='max-h-[280px] object-cover object-center ' width={400} height={400} alt="Upcomming Events" />
                                    <strong className="text-slate-700 font-extrabold text-2xl">{items.title}</strong>
                                    <div className="font-semibold text-xl mb-2">${items.price}</div>
                                </div>
                            </Link>
                            
                        ))
                    }
                    {params.category === "AllProducts" &&
                        data.map((items: ProductInterface) => (
                           <Link key={items._id} href={`/AllProductsInfo/${items._id}`}>
                                <div className="max-w-xl rounded overflow-hidden bg-[#E5E4E2] flex-col  flex shadow-lg  hover:scale-105  hover:duration-300 hover:ease-linear ">
                                    <Image src={urlForImage(items.image).url()} className='max-h-[280px] object-cover object-center ' width={400} height={400} alt="Upcomming Events" />
                                    <strong className="text-slate-700 font-extrabold text-2xl">{items.title}</strong>
                                    <div className="font-semibold text-xl mb-2">${items.price}</div>
                                </div>
                           </Link>
                        ))
                    }
                </div>
            </Wrapper>
        </section>
    )
}

export default page
