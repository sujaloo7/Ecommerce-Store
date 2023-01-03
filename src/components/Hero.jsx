import { Button } from '@chakra-ui/react';
import React from 'react';
import "./components.css";


const Hero = () => {
    return (
        <>
            <div className="container-fluid hero " style={{ backgroundImage: "url(https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/hero4.png?raw=true)", backgroundSize: "cover", height: "100vh", backgroundAttachment: "fixed" }}>
                <div className="row p-4">
                    <div className="col-sm-7 mt-5 ms-5 pt-5 text-section">
                        <h1 className=' mt-5 pt-4'>Super value deals</h1>
                        <h1 className='  '>On all products</h1>

                        <p>Save more with coupans & up to 70% off</p><a href="#Featured">
                            <Button className='start-button' padding={"8"} marginTop={"5"}>Start Shopping</Button>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero