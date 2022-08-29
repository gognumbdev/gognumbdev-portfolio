import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
    const router: NextRouter = useRouter()
    return (
        <div id="contact" className="w-full lg:h-screen">
            {/* Left Side */}
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-blue-500">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left Side */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shado-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <img
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                    alt="Contact"
                                />
                            </div>
                            <div>
                                <h2 className="py-2">Khemmapich Panyana</h2>
                                <p>Full Stack Developer</p>
                                <p className="py-4">
                                    I&apos;m focus on web3 development includes
                                    cryptocurrency,DeFi,NFT. I&apos;m available for
                                    freelance or full-time positions. Contact me
                                    and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8">
                                    Connect With Me
                                </p>
                                <div className="flex items-center justify-between py-4">
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                                        onClick={() =>
                                            router.push(
                                                'https://www.linkedin.com/in/khemmapich-panyana-a33230216/'
                                            )
                                        }
                                    >
                                        <FaLinkedinIn />
                                    </div>
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                                        onClick={() =>
                                            router.push(
                                                'https://github.com/gognumbdev'
                                            )
                                        }
                                    >
                                        <FaGithub />
                                    </div>
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                                        onClick={() =>
                                            alert(
                                                'Please send your email to gognumbdev@gmail.com'
                                            )
                                        }
                                    >
                                        <AiOutlineMail />
                                    </div>
                                    <div
                                        className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
                                        onClick={() => router.push('/#contact')}
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form action="">
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Name
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name=""
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">
                                            Phone Number
                                        </label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                            name=""
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">
                                        Email
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                        name=""
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">
                                        Subject
                                    </label>
                                    <input
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        type="email"
                                        name=""
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label className="uppercase text-sm py-2">
                                        Message
                                    </label>
                                    <textarea
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        rows={10}
                                    />
                                </div>

                                <button className="w-full p-4 text-gray-100">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* ... */}
                <div className="flex justify-center py-12">
                    <div className="rounded-full shadow-lg shadow-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <HiOutlineChevronDoubleUp
                            className="m-auto text-blue-500"
                            size={30}
                            onClick={() => router.push('/')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
