import Image from 'next/image'
import CurlentPaymentImage from '../public/assets/projects/CurlentPaymentPreview.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import { NextRouter, useRouter } from 'next/router'
import Head from 'next/head'

const CurlentPayment = () => {
    const router: NextRouter = useRouter()
    return (
        <div className="w-full">
            <Head>
                <title>Curlent Payment</title>
            </Head>
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="contain"
                    src={CurlentPaymentImage}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Curlent Payment</h2>
                    <h3>Concept : Crypto Payment API</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p className="my-4">Project</p>
                    <h2 className="my-4">Overview</h2>
                    <p className="">
                        Curlent Payment is crypto payment infrastructure to
                        allow online business to integrate APIs and accept
                        crypto payment from their customer with seamless
                        experience for their customer. Although Curlent Payment
                        is still MVP but you can try to make crypto payment
                        transaction on blockchain test network includes Ethereum
                        Ropsten Network, BSC Test Netowrk, Optimism Kovan
                        Network,Polygon Mumbai Network. You can make transaction
                        with MetaMask wallet , Coinbase Wallet, and Terra
                        Station Wallet. We still provides link to network
                        faucets in the case that you need to test our crypto
                        payment service.
                    </p>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://curlent-payment.vercel.app/')
                        }
                    >
                        Website
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://github.com/gognumbdev/curlent')
                        }
                    >
                        Code on Github
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://www.youtube.com/watch?v=U695k6padMw')
                        }
                    >
                        DEMO
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://www.canva.com/design/DAE_nXXT7aQ/PQlMvldoMWsRaxj3HvtghA/view?utm_content=DAE_nXXT7aQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')
                        }
                    >
                        Pitch Deck
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://www.canva.com/design/DAE_X9ifOaA/9f6gsc4_qTcrXUxMxr3yaQ/view?utm_content=DAE_X9ifOaA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton')
                        }
                    >
                        Proposal
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
                            <span className="font-bold mx-2">Ethers.js</span>{' '}
                            for develop ethereum development task on browser
                            such as interact with MetaMask wallet,Coinbase
                            wallet, process crypto payment from user
                            transaction.
                        </p>
                        <p className="text-gray-600 py-2 flex items-center">
                            <RiRadioButtonFill />{' '}
                            <span className="font-bold mx-2"> Hardhat </span>{' '}
                            for smart contract development environment{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurlentPayment
