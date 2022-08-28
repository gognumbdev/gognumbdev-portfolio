import { NextRouter, useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main: FunctionComponent = () => {
    const router: NextRouter = useRouter()
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Let's Build Impactful Business Together
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm <span className="text-blue-500">Gognumb</span>
                    </h1>
                    <h1 className="py-4 text-gray-700">
                        A Full Stack Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm a full stack developer specializing in building
                        full-stack web application about cryptocurrency,DeFi and
                        NFT projects. I'm looking for join the crypto startup
                        with the challenging mission to build crypto project or
                        business that will satisfy customers needs.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
                                router.push('https://github.com/gognumbdev')
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
    )
}

export default Main
