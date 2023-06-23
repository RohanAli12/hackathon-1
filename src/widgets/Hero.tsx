import React from 'react'
import Wrapper from '@/shared/Wrapper'
import Image from 'next/image'
import HeroPoster from '/public/assets/HeroPoster.svg'
import brandLogo from '/public/assets/brands.svg'
import Button from '@/shared/Button'


const Hero = () => {
    return (
        <section className='mt-28'>
            <Wrapper>
                <div className='flex items-center  flex-col md:flex-row'>
                    {/* left portion */}
                    <div className='flex-1 '>
                        <div className=' flex-col flex space-y-7'>
                        <p className='font-extrabold text-center text-white text-md md:text-xl box-content rounded-md bg-slate-700 md:h-6 w-20 md:w-28 p-4'>{"Sale 75%"}</p>
                        <strong className='text-3xl md:text-6xl   font-extrabold  bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent  tracking-wider'>Redfefining Streetwear with Your Favorite Shoe Brand</strong>
                        <p className='text-lg md:text-xl italic'>{`"Anyone can beat you, but no one can beat your footwear game as long as you wear Momentum."`}</p>
                        <Button text="START SHOPPING"/>
                        <Image src={brandLogo}  alt='Puma-SteveMedden-Kangroo-Addidas'/>
                        </div>
                    </div>
                    {/* right portion */}
                    <div className='flex-1'>
                        <Image src={HeroPoster} alt='Hero Picture' />
                    </div>
                </div>
            </Wrapper>

        </section>
    )
}

export default Hero
