export interface Product {
    id:string,
    name:string
    price:number
    imagePath:string
}
export interface CartItem {
    product:Product
    qty:number
}