'use client'
import Wrapper from '@/shared/Wrapper'
import { useEffect, useState } from 'react'
import { v4 as uuid } from "uuid";
import { getCookies, getCookie, setCookie } from "cookies-next";
import { toast } from 'react-hot-toast';
import Button from '@/shared/Button';
import Image from 'next/image'

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
    useEffect(() => {
        if (form.password.length > 8) {
            toast.error('Password should be less than 8 characters');
        }
    }, [form.password]);

    const handleSubmit = async () => {
        if (!cook) {
            setCookie('authToken', uid)
        }
        const loadingToastId = toast.loading('Submitting...');
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(form),
            });
            toast.dismiss(loadingToastId);

            //  setCookie("address","sdsad")
            if (res.ok) {
                localStorage.setItem('formSubmitted', 'true'); // Store flag in local storage
                toast.success('Welcome!');
            }
            const result = await res.json()
            if (!res.ok) {
                toast.error(<b>Could not save.</b>);
                console.log('fetch failed');
            }
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    if (cook) {
        toast('Welcome!',
            {
                icon: '👏',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
        return (
            <section className='mt-36'>
                <Wrapper>
                    <div className='mt-20 font-bold tracking-wider text-xl md:text-3xl'>You are Logged in</div>
                    <div className='flex flex-col items-center mt-24 font-bold text-2xl  md:text-5xl'>
                        <h1 className='md:tracking-wider mb-6'>Click below to Shop.</h1>
                        <Button text="START SHOPPING" />
                        <p className='mb-44'></p>
                    </div>
                </Wrapper>
            </section>
        )
    }

    return (
        <section className='mt-28'>
            <Wrapper>
                <div>
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* <Image className="mx-auto h-10 w-auto" width={100} height={100} src={"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"} alt="Your Company" /> */}
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
                        </div>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="/" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div className="mt-2">
                                        <input id="text" name="name" placeholder='  Enter Name'
                                            value={form.name}

                                            onChange={handleChange} type="text" autoComplete="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div className="mt-2">
                                        <input id="email" name="email" type="email" value={form.email}

                                            onChange={handleChange}
                                            placeholder='  Enter Email' autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input id="password" name="password" value={form.password}

                                            onChange={handleChange}
                                            placeholder='  Enter Password' type="password" autoComplete="current-password" required className="block w-full rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default RegisterComp
