import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaMediumM } from 'react-icons/fa'
import {GrLinkedinOption} from 'react-icons/gr'

export default function Footer() {
    return (
        <footer>
            <section className="bg-skin-bgFooter">
            <div className="container mx-auto py-12 grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="p-5">
                    <ul className="flex md:flex-col flex-row gap-5 justify-between">
                        <li>
                            <Link href="/about-us">
                                <a className="md:text-lg text-base font-normal text-skin-light font-interRegular hover:underline">About Us</a>

                            </Link>
                        </li>
                        <li>
                            <Link href="/disclaimer">
                                <a className="md:text-lg text-base font-normal text-skin-light font-interRegular hover:underline">Disclaimer</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="privacy-policy">
                                <a className="md:text-lg text-base font-normal text-skin-light font-interRegular hover:underline">Privacy Policy</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="p-5 flex flex-col">
                    <ul className='flex md:justify-end justify-center mb-2'>
                        <li>
                            <Link href="mailto:support@fundgazer.com">
                                <a className="md:text-lg text-base font-normal text-skin-light font-interRegular hover:underline">support@fundgazer.com</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="flex space-x-3 md:justify-end justify-center">
                        <li className='p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200'>
                            <Link href="#">
                                <a className="text-3xl"><FaFacebook size={24}/></a>
                            </Link>
                        </li>
                        <li className='p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200'>
                            <Link href="#">
                                <a className="text-3xl"><FaTwitter size={24}/> </a>
                            </Link>
                        </li>
                        <li className='p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200'>
                            <Link href="#">
                                <a className="text-3xl"><GrLinkedinOption size={24}/> </a>
                            </Link>
                        </li>
                        <li className='p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200'>
                            <Link href="#">
                                <a className="text-3xl"><FaInstagram size={24}/> </a>
                            </Link>
                        </li>
                        <li className='p-[6px] bg-white text-[#2B195A] hover:text-skin-light rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-skin-primary duration-200'>
                            <Link href="#">
                                <a className="text-3xl"><FaMediumM size={24}/> </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </section>
            <section className='bg-skin-dark'>
                <div className='container mx-auto py-3'>
                    <div>
                        <p className='md:text-base text-sm font-normal text-skin-light text-center font-interRegular'>@Copyrighted by Fundgazer</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
