import { BsDiscord } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { BiPolygon } from 'react-icons/bi'
import { FiLayers } from 'react-icons/fi'
import { FiClock } from 'react-icons/fi'
import { FaAngleRight } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function OurCommunity() {

    const route = useRouter();

    return (
        <>
            {/* Banner Section Start*/}
            <section>
                <div className='container mx-auto pt-40 pb-20 lg:pb-32 lg:pt-52 grid md:grid-cols-2 grid-cols-1 gap-8 items-center'>
                    <div className="p-4">
                        <h1 className='md:text-6xl text-4xl font-normal font-interRegular'><span className='text-skin-primary font-bold font-interBold'>Join</span> Our Community</h1>
                        <p className='md:text-xl text-base font-medium mt-3 font-interRegular'>We are all about giving personal investors the tools and resources they need, to make informed decisions.</p>
                        <Link href="#">
                            <a className={`flex md:hidden w-full justify-end items-center mt-6 space-x-2 text-[20px] font-semibold lg:mt-0 font-interMedium ${route.pathname === '/our-community' ? 'hidden' : 'block'} `}>
                                <span className="">Explore</span>
                                <span className="text-skin-primary text-[2rem]">
                                    <FaAngleRight strokeWidth={2} />
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-wrap items-center md:justify-end justify-center gap-5 p-4">
                        <button className='md:max-w-[200px] w-full justify-center font-interRegular bg-skin-dark text-skin-light  border-2 border-transparent hover:border-black hover:text-skin-dark hover:bg-transparent md:text-2xl text-lg font-semibold flex items-center space-x-3 py-3 px-7 rounded-md transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200'><BsDiscord /> <span>Discord</span> </button>
                        <button className='md:max-w-[200px] w-full justify-center font-interRegular bg-skin-buttonAccent hover:bg-skin-buttonMuted text-skin-light border-2 border-transparent md:text-2xl text-lg font-semibold flex items-center space-x-3 py-3 px-7 rounded-md transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200'><FaTelegramPlane /> <span>Telegram</span> </button>
                    </div>
                </div>
            </section>
            {/* Banner Section End*/}

            {/* Resources Section Start*/}
            <section className={`bg-[#E9E1FF] ${route.pathname === '/our-community' ? 'block' : 'hidden' }`}>
                <div className='container mx-auto py-12 md:py-20 grid md:grid-cols-4 grid-cols-1 gap-2'>
                    <div className='p-4 transition delay-200 hover:-translate-y-2'>
                        <h5 className='font-interBold md:text-2xl text-xl font-bold flex space-x-2 items-center mb-3'><span className='text-skin-primary'><BiPolygon strokeWidth={2} /> </span> <span>Belong</span></h5>
                        <p className='font-interRegular md:text-xl text-base font-normal text-skin-muted'>Get real-time advice and support from a community of experienced investors and don’t forget to give back!</p>
                    </div>
                    <div className='p-4 transition delay-200 hover:-translate-y-2'>
                        <h5 className='font-interBold md:text-2xl text-xl font-bold flex space-x-2 items-center mb-3'><span className='text-skin-primary'><FiLayers strokeWidth={3} /> </span> <span>Resources</span></h5>
                        <p className='font-interRegular md:text-xl text-base font-normal text-skin-muted'>Learn about finance, stocks, crypto and psychology behind building investment strategies and systems.</p>
                    </div>
                    <div className='p-4 transition delay-200 hover:-translate-y-2'>
                        <h5 className='font-interBold md:text-2xl text-xl font-bold flex space-x-2 items-center mb-3'><span className='text-skin-primary'><BiPolygon strokeWidth={2} /> </span> <span>Black Box</span></h5>
                        <p className='font-interRegular md:text-xl text-base font-normal text-skin-muted'>Stay ahead of the curve with market alerts powered by our proprietary algorithms.</p>
                    </div>
                    <div className='p-4 transition delay-200 hover:-translate-y-2'>
                        <h5 className='font-interBold md:text-2xl text-xl font-bold flex space-x-2 items-center mb-3'><span className='text-skin-primary'><FiClock strokeWidth={3} /> </span> <span>Updates</span></h5>
                        <p className='font-interRegular md:text-xl text-base font-normal text-skin-muted'>Recieve first hand updates on latest financial news and new Fungazer products.</p>
                    </div>
                </div>
            </section>
            {/* Resources Section End*/}
        </>
    )
}
