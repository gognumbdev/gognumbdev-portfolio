import React from 'react'
import CurlentPreview from '../public/assets/projects/CurlentPaymentPreview.png'
import CurlentBridge from '../public/assets/projects/CurlentBridge.png'
import Curlent from '../public/assets/projects/Curlent.png'
import Neoflow from '../public/assets/projects/Neoflow.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-blue-500">
                    Projects
                </p>
                <h2 className="py-4">Waht I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        image={CurlentPreview}
                        title={'Curlent Payment'}
                        skills={[
                            'Next.js',
                            'Tailwindcss',
                            'HeadlessUI',
                            'Ethers.js',
                        ]}
                        projectUrl="curlentPayment"
                    />

                    <ProjectItem
                        image={CurlentBridge}
                        title={'Curlent Bridge'}
                        skills={[
                            'Next.js',
                            'Tailwindcss',
                            'HeadlessUI',
                            'Solidity',
                            'Ethers.js',
                        ]}
                        projectUrl="curlentBridge"
                    />

                    <ProjectItem
                        image={Curlent}
                        title={'Curlent'}
                        skills={[
                            'Next.js',
                            'Tailwindcss',
                            'HeadlessUI',
                            'Ethers.js',
                        ]}
                        projectUrl="curlent"
                    />

                    <ProjectItem
                        image={Neoflow}
                        title={'Neoflow'}
                        skills={[
                            'Next.js',
                            'Tailwindcss',
                            'HeadlessUI',
                            'Ethers.js',
                            'Promtpay QR Code',
                        ]}
                        projectUrl="/neoflow"
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects
