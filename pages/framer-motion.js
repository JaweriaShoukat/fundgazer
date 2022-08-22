import { motion, Variants } from "framer-motion"


const imageAnimate={
    offscreen:{scale:0.5, opacity:0},
    onscreen:{
    scale:1,
    opacity:1,
    transition: {type:"spring",
    duration:1}
  }

}


export default function Framer_Motion() {

    return (
        <>
        <section className="h-screen"></section>
        <section className="h-screen">
            <div className="wrapper mt-40">
                <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:false, amount:0.5}}
                    transition={{staggerChildren:0.5}}
                >
                
                        <motion.h1 
                        variants={imageAnimate}
                        className='text-6xl font-thin font-interRegular'>The <span className='text-skin-primary font-bold'>Future</span> of Personal Investment.</motion.h1>
                    </motion.div>
            </div>
            </section>

        </>
    )
}
