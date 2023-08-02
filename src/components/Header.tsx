'use client'
import Image from 'next/image';
import Dropdown from './Dropdown'
import logo from '/public/assets/logo.jpg';
import Link from 'next/link';
import Wrapper from '@/shared/Wrapper';
import { useState,useEffect } from 'react';
import { AiOutlineShoppingCart,AiOutlineLogin  } from 'react-icons/ai';
import CartBtn from '@/shared/CartBtn';




const Header = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 640);
        };

        // Attach the event listener on component mount
        window.addEventListener('resize', handleResize);

        // Call the handler initially to set the initial value
        handleResize();

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <header className='z-10  bg-opacity-70 backdrop-filter  backdrop-blur-lg fixed top-0 left-0 right-0 '>
            <Wrapper>
                <div className='flex py-6 items-center relative space-x-14'>
                    {/* logo */}
                    <div className='flex items-center font-extrabold text-xl md:text-2xl space-x-4'>
                        <Image src={logo} alt='Shoe-Logo' width={110} height={20} />
                        <Link href={"/"}><h1>Momentum</h1></Link>
                    </div>
                    {/* nav */}
                    
                    <ul className={`flex ${!isMobileScreen ? '' : 'hidden'} md:flex-row gap-x-4 md:space-x-3 md:justify-start  font-light text-xl md:text-2xl`}>
                        <li><Link href={"/Products/Men"}>Men</Link></li>
                        <li><Link href={"/Products/Women"}>Women</Link></li>
                        <li><Link href={"/Products/AllProducts"}>All Products</Link></li>
                    </ul>
                    {isMobileScreen?(<div className='absolute right-2 '><Dropdown/></div>):(
                        <div className=' absolute md:right-3  '>
                    <ul className=' font-light flex gap-x-7 text-xl md:text-2xl'>
                        <li><Link href={"/Cart"}><CartBtn/></Link></li>
                        <li><Link href={"/register"}><AiOutlineLogin  className='text-4xl'/></Link></li>
                    </ul>
                        </div>)}
                </div>
            </Wrapper>
        </header>
    )
}

export default Header;
