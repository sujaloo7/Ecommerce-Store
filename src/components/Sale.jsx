import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Sale = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="container mt-5 sale">
                <div className="row">
                    <div className="col-sm-6 text-center " data-aos={"fade-in"}>
                        <img src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png" alt="" />
                    </div>
                    <div className="col-sm-6" data-aos={"fade-in"}>
                        <div className='sale-section' >
                            <VStack>
                                <Text fontWeight={"semibold"}>#NEW SUMMER COLLECTION 2022</Text>
                                <Heading color={"blackAlpha.900"} fontWeight={"bold"} style={{ fontSize: "70px" }} >JACKET</Heading>
                                <Button borderRadius={"0"} bgColor={"blackAlpha.900"} color={"white"}>Shop Now</Button>
                            </VStack>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sale