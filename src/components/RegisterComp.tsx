'use client'
import Wrapper from '@/shared/Wrapper'
import { useState } from 'react'
import { v4 as uuid } from "uuid";
import { getCookies, getCookie, setCookie } from "cookies-next";
import Link from 'next/link';
 


const RegisterComp = () => {
    
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })
    const uid = uuid();
    const cook = getCookie('authToken')
    
    
    const handleChange = (event: any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async () => {
        if (!cook) {
            setCookie('authToken', uid)
        }
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(form),
            });
            //  setCookie("address","sdsad")
            const result = await res.json()        
            if (!res.ok) {
                console.log("fetch failed")
            }
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    return (

        <section className='mt-28'>
            <Wrapper>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label className='block text-md font-medium text-gray-900'>Client Name</label>
                        <input type="text"
                            name='name'
                            placeholder='Enter Client Name'
                            value={form.name}
                            required
                            onChange={handleChange}
                            className='bg-gray-50 border border-gray-300 text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-
                          [#6469ff] outline-none w-full p-3' />
                        <label className='block text-md font-medium text-gray-900'>Client Email</label>
                        <input type="email"
                            name='email'
                            value={form.email}
                            required
                            onChange={handleChange}
                            placeholder='Enter Client Email'
                            className='bg-gray-50 border border-gray-300 text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3' />
                        <label className='block text-md font-medium text-gray-900'>Client Password</label>
                        <input type="password"
                            name='password'
                            value={form.password}
                            required
                            onChange={handleChange}
                            placeholder='Enter Client Email'
                            className='bg-gray-50 border border-gray-300 text-gry-900 text-md rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none w-full p-3' />
                        <button  type='submit' className="mt-3 bg-slate-700 text-white font-medium rounded-md text-md py-3">
                                Submit
                            </button>
                    </form> 

                </div>
            </Wrapper>
        </section>
    )
}

export default RegisterComp
