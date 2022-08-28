import Image from 'next/image'
import React from 'react'
import HTML5 from '../public/assets/skills/HTML5.png'
import CSS from '../public/assets/skills/CSS.png'
import Firebase from '../public/assets/skills/Firebase.png'
import Github from '../public/assets/skills/Github.png'
import Javascript from '../public/assets/skills/Javascript.png'
import MongoDB from '../public/assets/skills/MongoDB.png'
import Next from '../public/assets/skills/Next.png'
import NodeJS from '../public/assets/skills/NodeJS.png'
import Python from '../public/assets/skills/Python.png'
import ReactImage from '../public/assets/skills/React.svg'
import Redux from '../public/assets/skills/Redux.png'
import Solidity from '../public/assets/skills/Solidity.png'
import Tailwindcss from '../public/assets/skills/Tailwindcss.png'
import Typescript from '../public/assets/skills/Typescript.png'
import Rust from '../public/assets/skills/Rust.png'

const Skills = () => {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div></div>
            <p className="text-xl tracking-widest uppercase text-blue-500">
                Skills
            </p>
            <h2 className="py-4">What I can do</h2>
            <div className="grid md:grod-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={HTML5}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={CSS}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Javascript}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Typescript}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Typescript</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Github}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Firebase}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={ReactImage}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>React</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Redux}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Redux</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Next}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Next</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Tailwindcss}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Tailwindcss</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Python}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Rust}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Rust</h3>
                        </div>
                    </div>
                </div>

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="mx-auto">
                            <Image
                                src={Solidity}
                                alt="/"
                                width={60}
                                height={60}
                                objectFit="contain"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Solidity</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
