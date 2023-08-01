import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import { ProductInterface } from '@/shared/ProductInterface';
import { getAllProductSanity } from '@/app/cmsFetch';
import { urlForImage } from '../../../../sanity/lib/image';
import AddToCartBtn from '@/shared/AddToCartBtn';


const page = async({ params }: { params: ProductInterface }) => {
    const data: ProductInterface[] = await getAllProductSanity()
    const filterData = data.filter((items: any) => items._id === params._id)
    return (
        <>
        <div>
            {filterData.map((items)=>( 
                <section key={items._id} className="mt-28">
                    <Wrapper>
                        {/* upper-portion */}
                        <div className='m-auto'>
                            <div className="flex  items-center space-y-5 flex-col md:flex-row">
                                {/* left-portion */}
                                <div className='flex-1 md:ml-20 '>
                                    {/* @ts-ignore */}
                                    <Image src={urlForImage(items.image).url()} width={500} height={300} alt="Product-Image" />
                                </div>
                                {/* right-portion */}
                                <div className="p-8 flex-1 shadow-xl -mt-9">
                                    <p className='text-2xl font-semibold '>{items.title}</p>
                                    <p className='text-2xl font-extrabold text-slate-400'>{items.category.name}</p>
                                    <div className='flex gap-x-4 mt-7'>
                                        <p className='font-bold text-xl'>Price:</p>
                                        <div className="text-xl font-semibold ">${items.price}</div>
                                    </div>
                                    <div className='mt-7'><AddToCartBtn product={items} /></div>
                                </div>
                            </div>
                            {/* bottom-portion */}
                            <div className="relative mt-10">
                                <div className="md:text-8xl text-7xl tracking-widest font-extrabold text-slate-200">Overview</div>
                                <div className="absolute inset-0 flex md:mt-9 mt-7">
                                    <span className="md:text-3xl text-2xl font-extrabold text-slate-700">Product Information</span>
                                </div>
                            </div>
                            <div className='mt-7 space-y-5 '>
                                <p className='border-t border-gray-600'></p>
                                <div className='flex md:flex-row flex-col '>
                                    <h2 className='whitespace-nowrap font-bold  text-xl'>Product Details</h2>
                                    <p className=' font-medium break-all tracking-wider md:ml-24'>{items.description}</p>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </section>
            ))}
        </div>
        </>
    );
};

export default page;
