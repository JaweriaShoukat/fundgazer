import { motion, Variants } from "framer-motion"


const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
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
                    <motion.div
                        className="item"
                    >
                        <motion.h1 
                        variants={imageAnimate}
                        className='text-6xl font-thin font-interRegular'>The <span className='text-skin-primary font-bold'>Future</span> of Personal Investment.</motion.h1>
                    </motion.div>
                </motion.div>
            </div>
            </section>

        </>
    )
}
