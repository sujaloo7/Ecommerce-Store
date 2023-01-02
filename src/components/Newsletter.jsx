import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Newsletter = () => {
    return (
        <>
            <div className="container-fluid mb-5 newsletter" style={{ backgroundImage: "url(https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/banner/b2.jpg?raw=true)", height: "150px", backgroundAttachment: "fixed" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7 mt-5 text-light">
                            <Heading size={"md"}>Sign Up For Newsletters</Heading>
                            <Text className='mt-2' style={{ fontSize: "14px" }}> Get E-mail updates about our latest shop and <span style={{ color: "rgba(242, 133, 43, 1)" }}>special offers.</span></Text>
                        </div>
                        <div className="col-sm-5 mt-1">
                            <input type="email" className='mt-5 p-2 w-50' placeholder='Your Email Address' style={{ backgroundColor: "white" }} /><button className='p-2 px-3 text-light' style={{ backgroundColor: "rgba(242, 133, 43, 1)", borderRight: "15px" }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter