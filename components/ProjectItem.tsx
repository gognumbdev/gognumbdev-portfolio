import Image from 'next/image'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'

interface projectProps {
    image: any
    title: string
    skills: string[]
    projectUrl: string
}

const ProjectItem = ({ image, title, skills, projectUrl }: projectProps) => {
    const router: NextRouter = useRouter()
    return (
        <div
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 
        rounded-xl p-4 group hover:bg-gradient-to-r from-blue-500 to-blue-300 cursor-pointer"
        >
            <Image
                className="rounded-xl group-hover:opacity-10"
                src={image}
                alt="/"
                objectFit="contain"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                    {title}
                </h3>
                {skills.map((skill) => (
                    <p key={skill} className="pb-4 pt-2 text-white text-center">
                        {skill}
                    </p>
                ))}
                <p
                    className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer"
                    onClick={() => router.push(projectUrl)}
                >
                    More Info
                </p>
            </div>
        </div>
    )
}

export default ProjectItem
