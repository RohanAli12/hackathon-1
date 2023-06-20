import { ProductInterface } from "@/shared/ProductInterface"

// export interface Product {
//     id:string,
//     name:string
//     price:number
//     imagePath:string
// }
export interface CartItem {
    product:ProductInterface
    qty:number
}