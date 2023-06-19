import {Image as IImage} from "sanity";



export interface ProductInterface {

    title:string,
    _id:string,
    description:string,
    price:number,
    image:IImage,
    size:string[],
    category:{
        name:string
    }

}