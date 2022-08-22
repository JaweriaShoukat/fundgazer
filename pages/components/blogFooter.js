
export default function BlogFooter() {
    return (
        <>
            {/* Jion Us Section Start*/}
            <section className='bg-skin-primary'>
                <div className='container mx-auto py-20 grid md:grid-cols-2 grid-cols-1 items-center gap-8'>
                    <div className="p-5">
                        <h1 className='md:text-6xl text-4xl font-normal text-[#D1C6FF] font-interRegular'><span className='text-skin-light font-bold'>Join </span> Waitlist</h1>
                        <p className='md:text-xl text-lg text-skin-light font-normal mt-3 font-interRegular'>From building your diversified long-term portfolio and tracking you.</p>                        
                    </div>
                    <div className="p-5">
                    <div className='mt-8'>
              <form className='md:flex md:space-x-2 md:space-y-0 space-x-0 space-y-4'>
                <input type="email" id="email" placeholder='Enter Email' name="email" className='font-interRegular bg-skin-light text-skin-muted md:text-2xl text-base font-normal outline-[#6F49DD] focus:outline-[#6F49DD] py-3 px-4 rounded-md md:w-3/4 w-full' />
                <button type="submit" className='md:hidden text-[#D1C6FF] font-interRegular border border-[#D1C6FF] bg-transparent hover:bg-skin-buttonAccent hover:border-transparent md:text-base text-sm font-normal flex items-center py-3 px-12 rounded-md transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200 captcha'>I am not a robot</button>
                <button type="submit" className='font-interMedium bg-skin-dark text-skin-light hover:opacity-75 md:text-2xl text-lg font-semibold py-3 md:w-1/4 w-full rounded-md hover:text-skin-dark hover:bg-transparent border-2 border-black'>Join</button>
              </form>
              <button type="submit" className='hidden text-[#D1C6FF] font-interRegular border border-[#D1C6FF] bg-transparent hover:bg-skin-buttonAccent hover:border-transparent md:text-base text-sm font-normal md:flex items-center py-3 px-12 rounded-md mt-5 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200'>I am not a robot</button>
            </div>
                    </div>
                </div>
            </section>
            {/* Jion Us Section End*/}
        </>
    )
}
