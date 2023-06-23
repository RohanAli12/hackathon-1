'use client'
import React, { useEffect, useState } from 'react';
import Wrapper from '@/shared/Wrapper';
import Image from 'next/image';
import { client } from '../../sanity/lib/client';
import { ProductInterface } from '@/shared/ProductInterface';
import { urlForImage } from '../../sanity/lib/image';


const getUpcommingProductDetails = async (_id: string): Promise<ProductInterface> => {
    const res = await client.fetch(
        `*[_type=="upcomming" && _id == $_id]{
      _id,
      image,
      title,
      price,
      description
    }`,
        { _id }
    );
    return res[0];
};



const UpcommingProductsInfo = ({ params }: { params: ProductInterface }) => {
    const [upcommingProductDetails, setUpcommingProductDetails] = useState<ProductInterface | null>(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const details = await getUpcommingProductDetails(params._id);
            setUpcommingProductDetails(details);
        };

        fetchProductDetails();
    }, [params._id]);

    // Check if upcommingProductDetails is available before accessing its properties
    const productTitle = upcommingProductDetails?.title || '';
    const productDescription = upcommingProductDetails?.description || '';
    //@ts-ignore
    const productImage = upcommingProductDetails?.image;
    const productPrice = upcommingProductDetails?.price || '';

    return (
        <>
            {upcommingProductDetails && (
                <section className="mt-28">
                    <Wrapper>
                        <div className='m-auto'>
                            {/* upper-portion */}
                            <div className="flex  items-center space-y-5 flex-col md:flex-row">
                                {/* left-portion */}
                                <div className='flex-1 md:ml-20 '>
                                    {/* @ts-ignore */}
                                    <Image src={urlForImage(productImage).url()} width={500} height={300} alt="Product-Image" />
                                </div>
                                {/* right-portion */}
                                <div className="p-8 flex-1 hover:shadow-lg -mt-9">
                                    <p className='text-2xl font-semibold '>{productTitle}</p>
                                    <h1 className='font-bold text-xl mt-4'>Product Details:</h1>
                                    <p className='font-medium break-all tracking-wider mt-5'>{productDescription}</p>
                                    <div className='flex gap-x-4 mt-7'>
                                        <p className='font-bold text-xl'>Price:</p>
                                        <div className="text-xl ">${productPrice}</div>
                                    </div>
                                </div>
                            </div>
                            {/* bottom-portion */}
                        </div>
                    </Wrapper>
                </section>

            )}
        </>
    );
};

export default UpcommingProductsInfo;
