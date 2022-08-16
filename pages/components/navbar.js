import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';

function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-[#FAF9FD] transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter bg-[#FAF9FD] h-20"> {/*logo container*/}

            </div>
            <div className="flex flex-col ml-4">
                <a className="md:text-xl text-lg text-skin-dark font-bold my-4 font-interBold" href="/our-community" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Join Our Community
                </a>
                <a className="md:text-xl text-lg text-skin-dark font-bold my-4 font-interBold" href="/blog" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Blogs
                </a>
            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    if (typeof window !== "undefined") {

        window.addEventListener('scroll', changeBackground);

    }

    return (
        <>
            <Head>
                <title>FUNDGAZER - BLOG</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <nav className={`flex filter px-5 transition-all duration-300 py-4 h-20 items-center fixed top-0 right-0 left-0 z-50 ${navbar ? 'bg-[#6F49DD] text-skin-light' : 'bg-[#FAF9FD] text-skin-dark'
                }`}>
                <MobileNav open={open} setOpen={setOpen} />
                <div className="w-3/12 flex items-center">
                    <Link href="/">
                        <a className="text-2xl font-semibold">
                            {navbar ? (
                                <Image src="/images/white-logo.png" alt="white-logo" width={165} height={40} ></Image>):
                                (
                                   <Image src="/images/logo.png" alt="logo" width={165} height={40} ></Image> 
                                )}
                        </a>
                    </Link>
                </div>
                <div className="w-9/12 flex justify-end items-center">

                    <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full ${navbar ? 'bg-white' : 'bg-black'} rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-1 w-full ${navbar ? 'bg-white' : 'bg-black'} rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-1 w-full ${navbar ? 'bg-white' : 'bg-black'} rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                    </div>

                    <div className="hidden md:flex md:text-xl text-lg font-bold font-interBold">
                        <NavLink to="/our-community">
                            Join Our Community
                        </NavLink>
                        <NavLink to="/blog">
                            Blogs
                        </NavLink>
                    </div>
                </div>
            </nav>

        </>
    )
}
