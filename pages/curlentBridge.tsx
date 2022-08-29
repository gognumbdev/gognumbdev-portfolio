import Image from 'next/image'
import CurlentBridgeImage from '../public/assets/projects/CurlentBridge.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import { NextRouter, useRouter } from 'next/router'
import Head from 'next/head'

const CurlentBridge = () => {
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
                    src={CurlentBridgeImage}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Curlent Bridge</h2>
                    <h3>
                        Concept : Crypto Bridge for transfer tokens between two
                        blockchains
                    </h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p className="my-4">Project</p>
                    <h2 className="my-4">Overview</h2>
                    <p className="">
                        Curlent Bridge is cross-chain transaction service for
                        DeFi user to make seamless cross-chain transfer
                        transaction between two blockchain. Curlent bridge is on
                        the test phase that you can bridge Curlent token between
                        blockhain test network such as Ethereum Kovan
                        Network,BSC Test Network,Polygon Mumbai Network,Optimism
                        Kovan Network. You can mint Curlent token on every chain
                        which we provides for you,they are ERC-20 tokens and
                        BEP-20 token. For example,you can bridge Curlent
                        Ethereum Token (aka CETH) on Ethereum Kovan Network to
                        be Curlent BSC Token (aka CBSC) on BSC Test Network and
                        similar action for other conditions between the
                        blockchains we provided.
                    </p>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://curlent-bridge.vercel.app/')
                        }
                    >
                        Website
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push(
                                'https://github.com/gognumbdev/curlent-bridge'
                            )
                        }
                    >
                        Code on Github
                    </button>
                    <button
                        className="px-8 py-2 mt-4 mr-8"
                        onClick={() =>
                            router.push('https://www.youtube.com/watch?v=KuynsyPbtkg')
                        }
                    >
                        DEMO
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

export default CurlentBridge
