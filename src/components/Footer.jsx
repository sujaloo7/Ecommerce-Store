import { Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "./logo.png"
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter, BsInstagram, BsPinterest, BsYoutube, BsApple } from "react-icons/bs";



const Footer = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#e3e6f3" }}>
                <div className="row p-5">
                    <div className="col-sm-4">
                        <img src={logo} className="mb-3" alt="" style={{ height: "80px" }} />
                        <p style={{ fontSize: "13px" }}>B-6, Rajendra Marg, Maharani Appartment
                            <br></br>  Bapu Nagar,Jaipur-302015</p>
                        <p style={{ fontSize: "13px" }} className='mt-3'><span>phone:</span>+1 5589 55488 55</p>
                        <p style={{ fontSize: "13px" }}><span>Email:</span> info@example.com</p>
                        <Heading size={"sm"} marginTop={"3"} marginBottom={"5"}>Follow us</Heading>
                        <HStack spacing={"15"} marginTop={"3"} > <GrFacebookOption /><BsTwitter /> <BsInstagram /><BsPinterest /> <BsYoutube /> </HStack>


                    </div>
                    <div className="col-sm-3 mt-4">
                        <Heading size={"sm"} marginBottom={"3"}>About</Heading>
                        <ul>
                            <li className='mb-2' style={{ fontSize: "13px" }}>About Us</li>
                            <li className='mb-2' style={{ fontSize: "13px" }}>Delivery Information</li>
                            <li className='mb-2' style={{ fontSize: "13px" }}>Privacy Policy</li>
                            <li className='mb-2' style={{ fontSize: "13px" }}>Terms & Conditions</li>
                            <li className='mb-2' style={{ fontSize: "13px" }}>Contact Us</li>

                        </ul>

                    </div>
                    <div className="col-sm-2 mt-4">
                        <Heading size={"sm"} marginBottom={"3"}>My Account</Heading>
                        <ul>
                            <li className='mb-2' style={{ fontSize: "13px" }}>Sign In</li>
                            <li className='mb-2' style={{ fontSize: "13px" }}>View Cart</li>
                            <li className='mb-2' style={{ fontSize: "13px" }}>My Wishlist</li>
                            <li className='mb-2' style={{ fontSize: "13px" }}>Track My Order</li>
                            <li className='mb-2' style={{ fontSize: "13px" }}>Help</li>

                        </ul>

                    </div>
                    <div className="col-sm-3 mt-4">
                        <Text className='fw-bold'>Install App<br></br>
                        </Text>
                        <p style={{ fontSize: "13px" }}> From App Store or Google Play</p>
                        <HStack marginTop={"5"}> <img style={{ borderRadius: "10px" }} className="shadow" src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/pay/app.jpg?raw=true" alt="" />
                            <img style={{ borderRadius: "10px" }} className="shadow" src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/pay/play.jpg?raw=true" alt="" /> </HStack>
                        <Text className='mt-3 text-muted' style={{ fontSize: "13px" }}>Secured Payment Gateways</Text>
                        <img className='mt-3' src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/pay/pay.png?raw=true" style={{height:"30px"}} alt="" />
                    </div>


                </div>
            </div>

        </>
    )
}

export default Footer