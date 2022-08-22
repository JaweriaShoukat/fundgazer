import Image from 'next/image'
import Link from 'next/link'
import BlogFooter from '../components/blogFooter'
import FirstBlog from '../components/FirstBlog'
import Post_template from '../components/post-template'
import Sidebar from '../components/sidebar'

export default function Blog() {
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
                                </div>
                                <div className='flex flex-row gap-5 border-b py-3 px-5 md:px-0 mt-12'>
                                    <Post_template></Post_template>
                                </div>
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
