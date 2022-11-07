import Image from 'next/image'
import Link from 'next/link'
import BlogFooter from '../components/blogFooter'
import FirstBlog from '../components/FirstBlog'
import Post_template from '../components/post-template'
import Sidebar from '../components/sidebar'
import { createClient } from "next-sanity";
//import imageUrlBuilder from '@sanity/image-url'


export default function Blog({ blogs }) {
    

   // const client = createClient({
   //     projectId: "squwkgdk",
   //     dataset: "production",
   //     useCdn: true
   // });

    return (
        <>
            <section className='mb-12 md:mt-28 mt-20'>
                <div className='container mx-auto md:pb-10'>
                    <div className='flex md:flex-row flex-col gap-10'>
                        {/* Posts Column Start*/}
                        <div className='md:w-9/12 w-full md:pr-20'>
                            {/* Main Post Start*/}
                            <FirstBlog />
                            {/* Main Post END*/}

                            {/* All Posts Start*/}
                            <div>
                                <div className='container mx-auto flex items-center'>
                                    <div className='p-2 pl-0'>
                                        <h1 className='md:text-6xl text-3xl font-bold text-[#E86A34] font-productSansBold'>Blogs</h1>
                                    </div>
                                </div>

                                {blogs.map((item, index) => {
                                    return <div key={index} className='flex flex-row gap-5 border-b py-3 px-5 md:px-0 mt-12'>
                                        <div className='w-9/12 flex flex-col justify-between p-0'>
                                            <div>
                                                <Link href="#">
                                                    <a><h3 className='md:text-3xl text-base font-bold text-skin-dark mb-3 font-productSansBold hover:underline'>{item.title}</h3></a>
                                                </Link>
                                                <ul className='flex space-x-3 md:text-xl text-base font-normal text-skin-primary mb-3 font-productSansReqular'>
                                                    <li className='hover:underline'>
                                                        <Link href="#"><a>#Economy</a></Link>
                                                    </li>
                                                    <li className='hover:underline'>
                                                        <Link href="#"><a>#Crypto</a></Link>
                                                    </li>
                                                </ul>
                                                <p className='text-xl font-normal text-skin-muted mb-3 font-gildaDisplay md:block hidden'>{item.metadesc}</p>
                                            </div>
                                            <ul className='flex gap-6 text-[15px] font-normal font-interRegular text-skin-muted mt-6'>
                                                <li>
                                                    <Link href="#"><a>Shashank Gupta</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#"><a>{item.releaseDate}</a></Link>
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
                                    </div>

                                })}












{/* 


                                <div className='flex flex-row gap-5 border-b py-3 px-5 md:px-0 mt-12'>
                                    <Post_template></Post_template>
                                </div>
                                <div className='flex flex-row gap-5 border-b py-3 px-5 md:px-0 mt-12'>
                                    <Post_template></Post_template>
                                </div>
                                <div className='flex flex-row gap-5 border-b py-3 px-5 md:px-0 mt-12'>
                                    <Post_template></Post_template>
                                </div>
                                <div className='flex flex-row gap-5 border-b py-3 px-5 md:px-0 mt-12'>
                                    <Post_template></Post_template>
                                </div> */}
                            </div>
                            {/* All Posts END*/}

                        </div>
                        {/* Posts Column END*/}

                        {/* Sidebar Column Start*/}
                        <div className='md:w-3/12 w-full md:block hidden'>
                            <Sidebar />
                        </div>
                        {/* Sidebar Column End*/}
                    </div>
                </div>
            </section>
            <BlogFooter />
        </>
    )
}

export async function getServerSideProps(context) {
    const client = createClient({
        projectId: "squwkgdk",
        dataset: "production",
        useCdn: false
    });

    const query = `*[_type == "blog"]`;
    const blogs = await client.fetch(query);
    return {
        props: {
            blogs
        }, // will be passed to the page component as props
    }
}