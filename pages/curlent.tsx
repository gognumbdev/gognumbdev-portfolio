import Image from 'next/image'
import CurlentImage from '../public/assets/projects/Curlent.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import { NextRouter, useRouter } from 'next/router'
import Head from 'next/head'

const Curlent = () => {
    const router: NextRouter = useRouter()
    return (
        <div className="w-full">
            <Head>
                <title>Curlent</title>
            </Head>
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="contain"
                    src={CurlentImage}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Curlent (MVP developed for YCombinator Summer 2022 batch)</h2>
                    <h3>Co-develop with Jinnapat (CTO of my old startup) </h3>
                    <h3>
                        Concept : Buy-Now-Pay-Later for SMEs supplied credit by
                        DeFi user who deposits stablecoins on Curlent platform
                    </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p className="my-4">Project</p>
                    <h2 className="my-4">Overview</h2>
                    <p className="">
                        Curlent allow Crypto supplier to deposit and withdraw
                        stablecoins to Curlent like a digital bank so that
                        Curlent have a credit to serve buy-now-pay-later for
                        SMEs to spend their credit to operate their business.
                        This project doesn&apos;t charge your real money,It&apos;s just
                        full-stack web for your inteaction. I develop in the
                        crypto supplier development tasks.
                    </p>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://curlent.vercel.app/')
                        }
                    >
                        Website
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://github.com/Jinnapat/neobank')
                        }
                    >
                        Code on Github
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://www.youtube.com/watch?v=s_KPxGPIAos')
                        }
                    >
                        DEMO
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://www.canva.com/design/DAE8ch_iZGI/eG_OWzhLiR-fKXOgdvijfA/view?utm_content=DAE8ch_iZGI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')
                        }
                    >
                        Pitch Deck for investor
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://www.canva.com/design/DAE8hJ_Z7Dg/KgWdxu5VRRywfOTxAc3bgA/view?utm_content=DAE8hJ_Z7Dg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')
                        }
                    >
                        Pitch deck for SME (customers)
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://www.youtube.com/watch?v=tlzncYV19kA')
                        }
                    >
                        Pitching for Y Combinator
                    </button>
                </div>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                <div className="px-16 py-2 grid grid-cols-3 md:grid-cols-1">
                    <p className="font-bold pb-2">Technology stack</p>
                    <div className="">
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">Next.js</span>{' '}
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">Tailwindcss</span>{' '}
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">HeadlessUI</span>{' '}
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">Redux.js</span>{' '}
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">Next.js API </span>{' '}
                            for building server to process curlent APIs which will interact with database
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">MongoDB</span>{' '}
                            database using for store and retrieve data to process for Curlent services.
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">Mongoose</span>{' '}
                            javascript library for interact with MongoDB more convenient
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">Ethers.js</span>{' '}
                            for develop ethereum development task on browser
                            such as interact with MetaMask wallet,Coinbase
                            wallet, process crypto payment from user
                            transaction.
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">Hardhat</span> for
                            smart contract development environment{' '}
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2">Solidity</span>{' '}
                            smart contract programming language for Ethereum
                            Virtual Machine compatible blockchain, Solidity
                            using for develop smart contract to make cross-chain
                            transaction includes ERC-20 token,BEP-20 token ,and
                            bridge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Curlent
