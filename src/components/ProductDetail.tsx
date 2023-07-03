'use client'
import React, { useEffect, useState } from 'react';
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import { client } from '../../sanity/lib/client';
import { ProductInterface } from '@/shared/ProductInterface';
import { urlForImage } from '../../sanity/lib/image';
import AddToCartBtn from '../shared/AddToCartBtn';



const AllProductsData = async (_id: string): Promise<ProductInterface> => {
    const res = await client.fetch(
        `*[_type=="product"  && _id == $_id]{
      _id,
      image,
      title,
      price,
      description,
      size,
      category->{
        name,
        _id
      }
    }`,
        { _id }
    );
    return res[0];
};



const ProductDetail = ({ params }: { params: ProductInterface }) => {
    const [upcommingProductDetails, setUpcommingProductDetails] = useState<ProductInterface | null>(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const details = await AllProductsData(params._id);
            setUpcommingProductDetails(details);
        };
        fetchProductDetails();
    }, [params._id]);

    // Check if upcommingProductDetails is available before accessing its properties
    const productTitle = upcommingProductDetails?.title || '';
    const productDescription = upcommingProductDetails?.description || '';
    const productCategory = upcommingProductDetails?.category.name || '';
    const productSize = upcommingProductDetails?.size || '';
    //@ts-ignore
    const productImage = upcommingProductDetails?.image;
    const productPrice = upcommingProductDetails?.price || '';

    return (
        <>
            {upcommingProductDetails && (
                <section className="mt-28">
                    <Wrapper>
                        {/* upper-portion */}
                        <div className='m-auto'>
                            <div className="flex  items-center space-y-5 flex-col md:flex-row">
                                {/* left-portion */}
                                <div className='flex-1 md:ml-20 '>
                                    {/* @ts-ignore */}
                                    <Image src={urlForImage(productImage).url()} width={500} height={300} alt="Product-Image" />
                                </div>
                                {/* right-portion */}
                                <div className="p-8 flex-1 shadow-xl -mt-9">
                                    <p className='text-2xl font-semibold '>{productTitle}</p>
                                    <p className='text-2xl font-extrabold text-slate-400'>{productCategory}</p>
                                    <div className='flex gap-x-4 mt-7'>
                                        <p className='font-bold text-xl'>Price:</p>
                                        <div className="text-xl font-semibold ">${productPrice}</div>
                                    </div>
                                    <div className='mt-7'><AddToCartBtn product={upcommingProductDetails} /></div>
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
                                    <p className=' font-medium break-all tracking-wider md:ml-24'>{productDescription}</p>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </section>

            )}
        </>
    );
};

export default ProductDetail;
