import Image from 'next/image'
import React from 'react'
import CurlentPaymentPreviewImage from '../public/assets/projects/CurlentPaymentPreview.png'

const About = () => {
    return (
        <div
            id="about"
            className="w-full md:h-screen p-2 flex items-center py-16"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="py-4 uppercase text-xl tracking-widest text-blue-500">
                        About
                    </p>
                    <h2>Who I Am</h2>
                    <p className="py-2 text-gray-600">
                        I am enthusiatic developer with entrepreneurial mindset
                    </p>
                    <p className="py-2 text-gray-600">
                        I&apos;m self-taught developer who learn to develop
                        full-stack web application by myself through many
                        project I was developed. I&apos;m project based learning
                        developer who love to learning by building projects
                        instead of learnig through theory based. I have 2+ years
                        of Full-stack web development experience by building
                        project with many idea from Social media,EdTech,NFT
                        marketplace, P2P Cryptocurrency market,Buy now pay later
                        from Crypto Stablecoin Bank as a supply,And Crypto
                        payment API.
                    </p>
                    <p className="py-2 text-gray-600">
                        I&apos;m on going to build impactful
                        business and crypto project for people around the world.
                        So I need to join with the most interesting team that
                        need to build the impactful crypto business and crypto
                        project. I want to help you build the product and
                        service for your customers or users with my skills on
                        full-stack web3 development.
                    </p>
                    <p className="py-2 text-gray-600">
                        Check out some of my latest projects.
                    </p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img
                        className="rounded-xl"
                        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1720&q=80"
                        alt="Curlent Payment Preview Page"
                    />
                </div>
            </div>
        </div>
    )
}

export default About
