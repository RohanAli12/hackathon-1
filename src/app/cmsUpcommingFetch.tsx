import { client } from '../../sanity/lib/client';
import { ProductInterface } from '@/shared/ProductInterface';


  export const getUpcommingSanity = async() =>{
      const res = await client.fetch(
               `*[_type=="upcomming"]{
             _id,
             image,
             title,
             price,
             description,
           }`,
           {
            Cache:"no-store"
           }
           );
           return res;
           
  }

