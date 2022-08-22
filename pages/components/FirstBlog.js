import Image from 'next/image'
import Link from 'next/link'

export default function FirstBlog() {
    return (
        <>
            <div className='flex md:flex-row flex-col-reverse md:gap-8 border-b pb-5 pt-0 mb-10'>
                <div className='md:w-5/12 w-full py-0 md:px-0 px-4'>
                    <Link href="/blog/single-post"><a>
                        <figure className='lg:h-[360px] h-[162px] w-full relative'>
                            <Image src="/images/img1.png" alt='img1' layout='fill' className='object-cover rounded-lg'></Image>
                        </figure>
                    </a></Link>
                    <ul className='md:hidden flex space-x-3 text-[15px] font-normal text-skin-muted mt-4 font-interRegular'>
                        <li>
                            <Link href="#"><a>Shashank Gupta</a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>11 March 2023</a></Link>
                        </li>
                    </ul>
                </div>
                <div className='md:w-7/12 flex flex-col justify-between md:p-0 p-4'>
                    <div>
                        <Link href="/blog/single-post"><a>
                            <h3 className='md:text-4xl text-2xl font-bold text-skin-dark mb-3 font-productSansBold hover:underline'>7 Best Investing Blogs 2022: Think Like an Investor</h3>
                        </a></Link>
                        <ul className='flex space-x-3 md:text-xl text-base font-normal text-skin-primary mb-3 font-productSansReqular'>
                            <li className='hover:underline'>
                                <Link href="#"><a>#Economy</a></Link>
                            </li>
                            <li className='hover:underline'>
                                <Link href="#"><a>#Crypto</a></Link>
                            </li>
                        </ul>
                        <p className='md:text-xl text-base font-normal text-skin-muted mb-3 font-gildaDisplay'>In this segment of our ‘Think Like an Investor’ series, we’re going to look at another resource which proves invaluable to the modern investor: blogs.</p>
                    </div>
                    <ul className='md:flex hidden space-x-3 text-[15px] font-normal text-skin-muted mb-4 font-interRegular'>
                        <li>
                            <Link href="#"><a>Shashank Gupta</a></Link>
                        </li>
                        <li>
                            <Link href="#"><a>11 March 2023</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
