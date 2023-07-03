import { useEffect, useState } from "react";
import { totalPriceSelector, saveCartItems } from "../../store/features/cartSlice";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { toast } from "react-hot-toast";
import svg  from '../../public/assets/x.svg';
import Image from "next/image";


const CheckOut = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginOpen(!isLoginOpen);
  };
  const totalPrice = useAppSelector(totalPriceSelector)
  // form declearation
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    amount:"",
    city: "",
    state: "",
  })

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };;
  
  const getCart = localStorage.getItem("cartItems");
  console.log(getCart)
  const storeCartItem = getCart ? JSON.parse(getCart): getCart;
  console.log(storeCartItem)
  // Extract the quantity and product_id from each cart item
  const formattedCartItems = storeCartItem.map((item:any) => ({
    quantity: item.quantity,
    product_id: item.product_id,
  }));
    
  const handleSubmit = async () => {  
      try {
        const [orderRes, orderItemRes] = await Promise.all([
          fetch("/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
          }),
          fetch("/api/orderitems", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formattedCartItems),
          }),
        ]);
        console.log(form.amount)
        if (orderRes.ok && orderItemRes.ok) {
          localStorage.clear();

          handleLoginClick();
        } else {
          console.log("Order or Order item creation failed");
        }
      } catch (error) {
        console.log(error);
      }
    };

    const checkout = async() =>{
    const loading =   toast.loading("Submitting")
    await  handleSubmit()
    toast.dismiss(loading)
    toast.success("Submitted")
    localStorage.removeItem("cartItems")
    }
  return (
    <div>
      <button className="bg-gradient-to-r mt-7 from-blue-500 to-purple-700 h-10 md:h-14 w-44 md:w-60 hover:shadow-lg duration-300 hover:scale-105 text-sm text-white font-semibold md:text-lg sm:px-4 sm:py-3 rounded-full px-3 py-2 hover:bg-[#808080]" onClick={handleLoginClick}>CheckOut</button>
      {isLoginOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-slate-400 z-50">
          <div className="bg-gradient-to-r from-[#4f69fb] to-[#a27df9] p-8 rounded-lg">
            {/* Login form */}
            <div className="flex flex-row justify-between items-center">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <Image src={svg} alt="X" width={20} className="-mt-3 cursor-pointer" onClick={handleLoginClick} />
            </div>
            <form onSubmit={checkout} className="space-y-2 md:space-y-3">
              <label className='block text-md font-medium text-gray-900'>Name</label>
              <input type="text"
                name='name'
                placeholder='Name'
                value={form.name}
                required
                onChange={handleChange}
                className='bg-gray-50 border border-gray-300 text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-
                          [#6469ff] outline-none w-full p-3' />
              <label className='block text-md font-medium text-gray-900'>Email</label>
              <input type="email"
                name='email'
                value={form.email}
                required
                onChange={handleChange}
                placeholder='Email'
                className='bg   -gray-50 border border-gray-300 text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3' />
              <label className='block text-md font-medium text-gray-900'>Amount</label>
              <input type="text"
                name='amount'
                readOnly
                value={`$${totalPrice}`}
                // onChange={handleChange}
                className='bg-gray-50 border border-gray-300 text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3' />
              <label className='block text-md font-medium text-gray-900'>Billing Address</label>
              <input type="text"
                name='address'
                value={form.address}
                required
                onChange={handleChange}
                placeholder='Address'
                className='bg-gray-50 border border-gray-300  text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3' />
              <div className="flex gap-x-3 items-center">
                <label className='block text-md font-medium text-gray-900'>City</label>
                <input type="text"
                  name='city'
                  value={form.city}
                  required
                  onChange={handleChange}
                  placeholder='City'
                  maxLength={8}
                  className='bg-gray-50 border border-gray-300 text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3' />
                <label className='block text-md font-medium text-gray-900'>State</label>
                <input type="text"
                  name='state'
                  value={form.state}
                  required
                  maxLength={10}
                  onChange={handleChange}
                  placeholder='state'
                  className='bg-gray-50 border border-gray-300 text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3' />
              </div>
              <div className="flex flex-col items-center">
                <button className="bg-gradient-to-r mt-5 from-blue-500 to-purple-700 h-10 md:h-14 w-44 md:w-60 shadow-2xl hover:shadow-lg duration-300 hover:scale-105 text-sm text-white font-semibold md:text-lg sm:px-4 sm:py-3 rounded-full px-3 py-2 hover:bg-[#808080]" type="submit">CheckOut</button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut