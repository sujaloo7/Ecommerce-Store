import { Button } from '@chakra-ui/react';
import React from 'react';
import "./components.css";
import hero from "../images/hero-left.png"
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <div className="container hero ">
                <div className="row p-4">
                    <div className="col-sm-7">
                        <h1 className=' fw-bold  mt-5 pt-4'>Each Purchase Will be <br></br> Made With <Typewriter
                            options={{
                                strings: ["Love", "Pleasure"],
                                autoStart: true,
                                loop: true,
                                cursor: "",
                                wrapperClassName: "typewriterpara",
                            }}
                        /></h1>
                        <p>We Work With Global Brands And Have Created <br></br> An Application For You To Do Your Shopping </p><a href="#Featured">
                            <Button className='start-button' padding={"8"} marginTop={"5"}>Start Shopping</Button>
                        </a>
                    </div>
                    <div className="col-sm-5 text-center">
                        <motion.div
                            style={{
                                height: "75vh",
                            }}
                            animate={{
                                translateY: "20px",
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <img src={hero} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero