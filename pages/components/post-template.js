import Image from 'next/image'
import Link from 'next/link'

export default function Post_template() {
  return (
    <>
      <div className='w-9/12 flex flex-col justify-between p-0'>
        <div>
          <Link href="#">
            <a><h3 className='md:text-3xl text-base font-bold text-skin-dark mb-3 font-productSansBold hover:underline'>7 Best Investing Blogs 2022: Think Like an Investor</h3></a>
          </Link>
          <ul className='flex space-x-3 md:text-xl text-base font-normal text-skin-primary mb-3 font-productSansReqular'>
            <li className='hover:underline'>
              <Link href="#"><a>#Economy</a></Link>
            </li>
            <li className='hover:underline'>
              <Link href="#"><a>#Crypto</a></Link>
            </li>
          </ul>
          <p className='text-xl font-normal text-skin-muted mb-3 font-gildaDisplay md:block hidden'>In this segment of our ‘Think Like an Investor’ series, we’re going to look at another resource which proves invaluable to the modern investor: blogs.</p>
        </div>
        <ul className='flex gap-6 text-[15px] font-normal font-interRegular text-skin-muted mt-6'>
          <li>
            <Link href="#"><a>Shashank Gupta</a></Link>
          </li>
          <li>
            <Link href="#"><a>11 March 2023</a></Link>
          </li>
        </ul>
      </div>
      <div className='w-3/12'>
        <Link href="#"><a>
          <figure className='md:h-[202px] h-[94px] md:w-full w-[93px] relative'>
            <Image src="/images/img2.png" alt='img2' layout='fill' className='object-cover transition-all duration-300 ease-in-out rounded-lg hover:scale-105'></Image>
          </figure>
        </a></Link>
      </div>

    </>
  )
}
