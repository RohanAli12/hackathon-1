import { toast } from "react-hot-toast";
import getStripePromise from '../lib/stripe'
 

const StripeCheckOut = () => {
    const getCart = localStorage.getItem("cartItems");
    const storeCartItem = getCart ? JSON.parse(getCart) : getCart;
    // Extract the quantity and product_id from each cart item
    const formattedCartItems = storeCartItem.map((item: any) => ({
        quantity: item.quantity,
        product_id: item.product_id,
    }));

    const products = storeCartItem.map((item: any) => ({
        quantity: item.quantity,
        price: item.price,
        title:item.title,
        product_id:item.product_id
    }))
    const handleSubmit = async () => {
        const stripe = await getStripePromise()
        try {
            const [stripeRes] = await Promise.all([
                fetch("/api/stripe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    cache: "no-cache",
                    body: JSON.stringify(products),
                }),
                fetch("/api/orderitems", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formattedCartItems),
                }),
            ]);
            const data = await stripeRes.json()
            if(data.session){
                stripe?.redirectToCheckout({sessionId:data.session.id})
            }
            if (stripeRes.ok ) {
                // localStorage.clear();
            } else {
                console.log("Order or Order item creation failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const checkout = async () => {
        const loading = toast.loading("loading...")
        await handleSubmit()
        toast.dismiss(loading)
        toast.success("Ready To Order 😊")
        // localStorage.removeItem("cartItems")
    }
    return (
        <div>
            <button className="bg-gradient-to-r mt-7 from-blue-500 to-purple-700 h-10 md:h-14 w-44 md:w-60 hover:shadow-lg duration-300 hover:scale-105 text-sm text-white font-semibold md:text-lg sm:px-4 sm:py-3 rounded-full px-3 py-2 hover:bg-[#808080]" onClick={checkout}>CheckOut</button>
        </div>
    )
}

export default StripeCheckOut
