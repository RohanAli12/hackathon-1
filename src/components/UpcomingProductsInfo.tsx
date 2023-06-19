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
      price
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
    //@ts-ignore
    const productImage = upcommingProductDetails?.image;
    const productPrice = upcommingProductDetails?.price || '';

    return (
        <>
            {upcommingProductDetails && (
                <section className="mt-28">
                    <Wrapper>
                        <div>
                            {/* upper-portion */}
                            <div>
                                {/* left-portion */}
                                <div>

                                    {/* Render the retrieved data */}
                                    <p>{productTitle}</p>
                                    {/* @ts-ignore */}
                                    <Image src={urlForImage(productImage).url()} width={400} height={400} alt="Product-Image" />
                                    <div className="text-xl hover:shadow-lg">{productPrice}</div>
                                </div>
                                {/* right-portion */}
                                <div className=""></div>
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
