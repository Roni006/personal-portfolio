import React from 'react'
import Container from './Container'
import Image from 'next/image'

import aboutme from '../../src/img/banner-img/hero-img.png';
import rectangle from '../../src/img/banner-img/rectangle.png';
import download from '../../src/img/icons/download.svg'

const AboutMe = () => {
    return (
        <>
            <section className='py-[150px] '>
                <Container>
                    <div>
                        <div className="mb-15 text-center">
                            <h1 className="text-white text-[40px] font-bold tracking-[3%] pb-4.5 ">
                                About Me
                            </h1>
                            <p className="text-[#707070] text-[20px] font-medium ">
                                User Interface and User Experience and Also video editing
                            </p>
                        </div>
                        <div className='flex items-center justify-center gap-25'>

                            <div className='relative w-[566px]'>
                                <Image className="absolute bottom-0 left-0" src={rectangle} alt='aboutme image' />
                                <Image className="z-999" src={aboutme} alt='aboutme image' />
                            </div>
                            <div className='w-[631px]'>
                                <p className='text-[#959595] font-medium text-[20px] line-height-[190px] text-justify pb-10
                                '>A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier.</p>
                                <button className="text-[16px] font-bold tracking-[3%] text-white bg-[#fd6f00]  py-3 px-10 rounded-md cursor-pointer border-2 border-[#fd6f00] hover:bg-transparent  hover:border-[#fd6f00]  duration-300 ease-in-out flex items-center gap-2.5 group">
                                    <span>
                                        <Image className='hover:text-[#fd6f00]' src={download} alt='download icon' />
                                    </span>
                                    Download CV
                                </button>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutMe
