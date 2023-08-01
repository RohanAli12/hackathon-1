import { client } from '../../sanity/lib/client';
import { ProductInterface } from '@/shared/ProductInterface';


  export const getAllProductSanity = async() =>{
      const res = await client.fetch(
               `*[_type=="product"]{
             _id,
             image,
             title,
             price,
             description,
             size,
             category->{
               name
             },
           }`,
           {
            Cache:"no-store"
           }
           );
           return res;
           
  }

