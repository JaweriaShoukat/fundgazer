import Link from 'next/link'
import Image from 'next/image'
import { BsChevronDown } from 'react-icons/bs'
import OurCommunity from './our-community'
import { motion, Variants } from "framer-motion"

export default function Home() {


  const imageAnimate = {
    offscreen: {
      opacity: 0,
      scale: 0.8,
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.3
      }
    }

  }
  const fadeInLeft = {
    offscreen: {
      opacity:0,
      x: -100,
    },
    onscreen: {
      opacity:1,
      x: 0,
      transition: {
        type: "spring",
        duration: 2,
        bounce: 0.3
      }
    }

  }

  return (
    <>
      {/* Banner Section Start*/}
      <section>
        <div className='container mx-auto lg:h-[800px] pb-10 pt-0 grid lg:grid-cols-3 grid-cols-1 items-center gap-4 mt-20'>
          <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            className="flex flex-col justify-between h-full px-4 pt-10 pb-0 lg:pt-20 lg:pb-24">
            <motion.div
              variants={imageAnimate}
              className='z-10'>
              <h1 className='md:text-6xl text-[32px] leading-9 font-medium font-interRegular'>The <span className='text-skin-primary font-bold'>Future</span> of <span className='md:whitespace-nowrap'>Personal Investment.</span></h1>
              <p className='md:text-xl text-[15px] font-medium mt-3 font-interRegular'>From building your diversified long-term portfolio and tracking your assets to finding investment ideas, we got you covered.</p>
            </motion.div>
            <Link href="#">
              <a className='md:flex hidden space-x-2 items-center text-3xl font-semibold mt-5 font-interMedium'><span className='text-skin-primary animate-bounce'><BsChevronDown strokeWidth={2} /> </span> <span>Join Waitlist</span></a>
            </Link>
          </motion.div>
          <div className="float-right col-span-2 md:p-4 overflow-x-hidden">
            <div className='md:block hidden'>
              <video
                width="1000"
                height="800"
                autoPlay="autoplay"
                className=""
                loop
                muted
              >
                <source src="/Videos/video.mp4" type="video/mp4" />
              </video>
            </div>
            <figure className="hero-mobile-banner md:hidden relative h-[550px]">
              <Image
                src="/images/hero-mobile.png"
                alt="Mobile Banner"
                layout='fill'
                className="w-full"
              />
            </figure>
            <div className='md:hidden block mx-4'>
              <Link href="#">
                <a className='flex space-x-2 items-center text-[20px] lg:mt-0 font-semibold mt-20 font-interMedium'><span className='text-skin-primary animate-bounce'><BsChevronDown strokeWidth={2} /> </span> <span>Join Waitlist</span></a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End*/}


      {/* Jion Us Section Start*/}
      <motion.section
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        className='bg-skin-primary'>
        <div className='container  mx-auto lg:py-20 py-12 grid md:grid-cols-2 grid-cols-1 items-center gap-8'>
          <motion.div 
          variants={fadeInLeft}
          className="p-4 md:order-first order-last lg:mt-0 mt-10">
            <h1 className='md:text-6xl text-[32px] leading-9 font-normal text-[#D1C6FF] font-interRegular'><span className='text-skin-light font-bold'>Join </span> Waitlist</h1>
            <p className='md:text-xl text-[15px] text-skin-light font-normal mt-3 font-interRegular max-w-[500px]'>From building your diversified long-term portfolio and tracking you.</p>
            <div className='mt-8'>
              <form className='md:flex md:space-x-2 md:space-y-0 space-x-0 space-y-4'>
                <input type="email" id="email" placeholder='Enter Email' name="email" className='font-interRegular bg-skin-light text-skin-muted md:text-2xl text-base font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-4 rounded-md md:w-3/4 w-full' />
                <button type="submit" className='md:hidden text-[#D1C6FF] font-interRegular border border-[#D1C6FF] bg-transparent hover:bg-skin-buttonAccent hover:border-transparent md:text-base text-sm font-normal flex items-center py-3 px-12 rounded-md transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200 captcha'>I am not a robot</button>
                <button type="submit" className='font-interMedium bg-skin-dark text-skin-light hover:opacity-75 md:text-2xl text-lg font-semibold py-3 md:w-1/4 w-full rounded-md hover:text-skin-dark hover:bg-transparent border-2 border-black'>Join</button>
              </form>
              <button type="submit" className='hidden text-[#D1C6FF] font-interRegular border border-[#D1C6FF] bg-transparent hover:bg-skin-buttonAccent hover:border-transparent md:text-base text-sm font-normal md:flex items-center py-3 px-12 rounded-md mt-5 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200'>I am not a robot</button>
            </div>
          </motion.div>
          <div className="p-4">
            <h1 className='md:hidden block text-[32px] leading-9 md:text-6xl font-normal text-[#D1C6FF] font-interRegular mb-8'>What is <br></br><span className='text-skin-light font-bold'>Fundgazer?</span></h1>
            <iframe class="w-full aspect-video rounded-lg" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
          </div>
        </div>
      </motion.section>
      {/* Jion Us Section End*/}

      <div className='lg:hidden block'>
        <OurCommunity />
      </div>

    </>
  )
}
