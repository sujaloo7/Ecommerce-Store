import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="container cart-container mt-5">
                <div className="row">
                    <div className="col-sm-8 cart-main">
                        <HStack>
                            <Text fontSize={"1xl"} >Shopping Cart</Text>
                            <Text fontSize={"1xl"} className='ms-auto'>3 Items</Text>
                        </HStack>

                        <table className="table mt-5 border-white w-100 table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ textTransform: "uppercase", fontWeight: "500" }} className="text-muted">Product Details</th>
                                    <th scope="col" style={{ textTransform: "uppercase", fontWeight: "500" }} className="text-muted">Quantity</th>
                                    <th scope="col" style={{ textTransform: "uppercase", fontWeight: "500" }} className="text-muted">Price</th>
                                    <th scope="col" style={{ textTransform: "uppercase", fontWeight: "500" }} className="text-muted">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='mt-3 mb-3'>
                                    <th scope="row"> <HStack marginTop={"-3"}><img src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/n5.jpg?raw=true" style={{ height: "100px" }} alt="" /> <div style={{ fontSize: "smaller" }}> <p className='fw-bold text-left'>Men's Shirt</p> <p className='fw-normal text-left'>Shirt</p><p className="text-danger fw-normal text-left" style={{ cursor: "pointer" }} >Remove</p></div> </HStack></th>
                                    <td className='w-25 '> <HStack > <FiMinus cursor={"pointer"} /> <input type="number" className='px-3' style={{ width: "10%", border: "lightgrey 1px solid" }} /> <FiPlus cursor={"pointer"} /></HStack></td>
                                    <td>$40</td>
                                    <td>$80</td>

                                </tr>
                                <br></br>
                                <tr className='mt-3 mb-3'>
                                    <th scope="row"> <HStack marginTop={"-3"}><img src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/n4.jpg?raw=true" style={{ height: "100px" }} alt="" /> <div style={{ fontSize: "smaller" }}> <p className='fw-bold text-left'>Men's Shirt</p> <p className='fw-normal text-left'>Shirt</p><p className="text-danger fw-normal text-left" style={{ cursor: "pointer" }} >Remove</p></div> </HStack></th>
                                    <td className='w-25 '> <HStack > <FiMinus cursor={"pointer"} /> <input type="number" className='px-3' style={{ width: "10%", border: "lightgrey 1px solid" }} /> <FiPlus cursor={"pointer"} /></HStack></td>
                                    <td>$40</td>
                                    <td>$80</td>

                                </tr>
                                <br></br>
                                <tr className='mt-3 mb-3'>
                                    <th scope="row"> <HStack marginTop={"-3"}><img src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/n6.jpg?raw=true" style={{ height: "100px" }} alt="" /> <div style={{ fontSize: "smaller" }}> <p className='fw-bold text-left'>Men's Shirt</p> <p className='fw-normal text-left'>Shirt</p><p className="text-danger fw-normal text-left" style={{ cursor: "pointer" }} >Remove</p></div> </HStack></th>
                                    <td className='w-25 '> <HStack > <FiMinus cursor={"pointer"} /> <input type="number" className='px-3' style={{ width: "10%", border: "lightgrey 1px solid" }} /> <FiPlus cursor={"pointer"} /></HStack></td>
                                    <td>$40</td>
                                    <td>$80</td>

                                </tr>
                                <br></br>
                                <tr className='mt-3 mb-3'>
                                    <th scope="row"> <HStack marginTop={"-3"}><img src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/n4.jpg?raw=true" style={{ height: "100px" }} alt="" /> <div style={{ fontSize: "smaller" }}> <p className='fw-bold text-left'>Men's Shirt</p> <p className='fw-normal text-left'>Shirt</p><p className="text-danger fw-normal text-left" style={{ cursor: "pointer" }} >Remove</p></div> </HStack></th>
                                    <td className='w-25 '> <HStack > <FiMinus cursor={"pointer"} /> <input type="number" className='px-3' style={{ width: "10%", border: "lightgrey 1px solid" }} /> <FiPlus cursor={"pointer"} /></HStack></td>
                                    <td>$40</td>
                                    <td>$80</td>

                                </tr>
                                <br></br>
                                <tr className='mt-3 mb-3'>
                                    <th scope="row"> <HStack marginTop={"-3"}><img src="https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/n6.jpg?raw=true" style={{ height: "100px" }} alt="" /> <div style={{ fontSize: "smaller" }}> <p className='fw-bold text-left'>Men's Shirt</p> <p className='fw-normal text-left'>Shirt</p><p className="text-danger fw-normal text-left" style={{ cursor: "pointer" }} >Remove</p></div> </HStack></th>
                                    <td className='w-25 '> <HStack > <FiMinus cursor={"pointer"} /> <input type="number" className='px-3' style={{ width: "10%", border: "lightgrey 1px solid" }} /> <FiPlus cursor={"pointer"} /></HStack></td>
                                    <td>$40</td>
                                    <td>$80</td>

                                </tr>



                            </tbody>
                        </table>

                    </div>

                    <div className="col-sm-4 checkout " >
                        <div className="card p-3 border-0 shadow-sm bg-light">
                            <Text fontSize={"1xl"} >Order Summary</Text>

                            <HStack><p className='mt-5'>Shipping</p> <p className='mt-5 ms-auto'>$50</p></HStack>
                            {/* <label className='mt-4 mb-0' style={{ fontSize: "13px" }}>Promo Code</label>
                            <HStack spacing={"0"}><input type={"text"} placeholder="Enter Your Code" className=' p-2  w-75 m-0 ' style={{ outline: "none", backgroundColor: "#E7E2E2" }} /><button className='p-2 px-3 me-2' style={{ backgroundColor: "rgba(242, 133, 43, 1)", color: "white" }}>Apply</button></HStack> */}
                            <HStack><p className='mt-2'>Tax</p> <p className='mt-2 ms-auto'>$20</p></HStack>

                            <HStack><p className='mt-2'>Total Cost</p> <p className='mt-2 ms-auto'>$94</p></HStack>
                            <button className='mt-5 p-3' style={{ backgroundColor: "rgba(242, 133, 43, 1)", color: "white", boxShadow: " 0px 5px 20px -3px rgba(242, 133, 43, 1)" }}>Procced To Pay  </button>

                        </div>

                    </div>

                </div>

            </div>
            <Footer />

        </>
    )
}

export default Cart