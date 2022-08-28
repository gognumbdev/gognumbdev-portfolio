import { FunctionComponent, useEffect, useState } from 'react'
import { NextRouter, useRouter } from 'next/router'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar: FunctionComponent = () => {
    const [nav, setNav] = useState(false)
    const [shadowed, setShadowed] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadowed(true)
            } else {
                setShadowed(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    const router: NextRouter = useRouter()
    return (
        <div
            className={
                shadowed
                    ? 'fixed w-full h-50 shadow-xl z-[100]'
                    : 'fixed w-full h-50 z-[100]'
            }
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 py-4">
                <p
                    className="font-bold cursor-pointer"
                    onClick={() => router.push('/')}
                >
                    <span className="text-blue-500">Gognumb</span>
                    <span className="">Dev</span>
                </p>
                <div className="font-bold">
                    <ul className="hidden md:flex">
                        <li
                            className="ml-10 text-sm uppercase hover:border-b"
                            onClick={() => router.push('/')}
                        >
                            Home
                        </li>
                        <li
                            className="ml-10 text-sm uppercase hover:border-b"
                            onClick={() => router.push('/#about')}
                        >
                            About
                        </li>
                        <li
                            className="ml-10 text-sm uppercase hover:border-b"
                            onClick={() => router.push('/#skills')}
                        >
                            Skills
                        </li>
                        <li
                            className="ml-10 text-sm uppercase hover:border-b"
                            onClick={() => router.push('/#projects')}
                        >
                            Projects
                        </li>
                        <li
                            className="ml-10 text-sm uppercase hover:border-b"
                            onClick={() => router.push('/#contact')}
                        >
                            Contact
                        </li>
                    </ul>
                    <div className="md:hidden" onClick={handleNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Menu Window on the left */}
            <div
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                        : ''
                }
            >
                <div
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className="flex w-full itens-ccenter justify-between">
                            <p className="font-bold">
                                <span className="">Gognumb</span>
                                <span className="text-blue-500">Dev</span>
                            </p>
                            <div
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                                onClick={handleNav}
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let's build something impactful for the people
                                in this world together.
                            </p>
                        </div>
                    </div>

                    {/* List of menu  */}
                    <div className="py-4 flex flex-col">
                        <ul>
                            <li
                                className="py-4 text-sm"
                                onClick={() => router.push('/')}
                            >
                                Home
                            </li>
                            <li
                                className="py-4 text-sm"
                                onClick={() => router.push('/')}
                            >
                                About
                            </li>
                            <li
                                className="py-4 text-sm"
                                onClick={() => router.push('/')}
                            >
                                Skills
                            </li>
                            <li
                                className="py-4 text-sm"
                                onClick={() => router.push('/')}
                            >
                                Projects
                            </li>
                            <li
                                className="py-4 text-sm"
                                onClick={() => router.push('/')}
                            >
                                Contact
                            </li>
                        </ul>

                        {/* Contact */}
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let's Connext
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
