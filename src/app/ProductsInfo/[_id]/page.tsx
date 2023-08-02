'use client'
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import { ProductInterface } from '@/shared/ProductInterface';
import { getUpcommingSanity } from '@/app/cmsUpcommingFetch';
import { urlForImage } from '../../../../sanity/lib/image';
import AddToCartBtn from '@/shared/AddToCartBtn';


const page = async ({ params }: { params: ProductInterface }) => {
    const data: ProductInterface[] = await getUpcommingSanity()
    const filterData = data.filter((items: ProductInterface) => items._id === params._id)
    return (
        <>
            <div>
                {filterData.map((items) => (
                    <section key={items._id} className="mt-28">
                        <Wrapper>
                            <div className='m-auto'>
                                {/* upper-portion */}
                                <div className="flex  items-center space-y-5 flex-col md:flex-row">
                                    {/* left-portion */}
                                    <div className='flex-1 md:ml-20 '>
                                        {/* @ts-ignore */}
                                        <Image src={urlForImage(items.image).url()} width={500} height={300} alt="Product-Image" />
                                    </div>
                                    {/* right-portion */}
                                    <div className="p-8 flex-1 hover:shadow-lg -mt-9">
                                        <p className='text-2xl font-semibold '>{items.title}</p>
                                        <h1 className='font-bold text-xl mt-4'>Product Details:</h1>
                                        <p className='font-medium break-all tracking-wider mt-5'>{items.description}</p>
                                        <div className='flex gap-x-4 mt-7'>
                                            <p className='font-bold text-xl'>Price:</p>
                                            <div className="text-xl ">${items.price}</div>
                                        </div>
                                        <div className='mt-7'><AddToCartBtn product={items} /></div>
                                    </div>
                                </div>
                                {/* bottom-portion */}
                            </div>
                        </Wrapper>
                    </section>
                ))}
            </div>
        </>
    );
};

export default page;
