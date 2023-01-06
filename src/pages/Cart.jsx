import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
// import { FiMinus, FiPlus } from 'react-icons/fi'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import {
    removeFromCart,
    incrementCartItem,
    decrementCartItem,
} from "../Redux/shopping/shopping-action";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const cartData = useSelector((state) => state.shopReducer);
    const dispatch = useDispatch();

    const Remove_cart = (e, item) => {
        // e.preventDefault();

        console.log(Remove_cart);
        dispatch(removeFromCart(item));
    };

    useEffect(() => {
        AOS.init(
            {
                duration: 1000
            });
        AOS.refresh();

        let authToken = localStorage.getItem("auth_token");

        if (!authToken) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <>
            <Navbar />


            {isLoggedIn ? (
                <>
                    <div className="container cart-container mt-5">
                        <div className="row">
                            <div className="col-sm-8 cart-main">
                                <HStack>
                                    <Text fontSize={"1xl"} >Shopping Cart</Text>
                                    <Text fontSize={"1xl"} className='ms-auto'>{cartData?.cart?.length} Items</Text>
                                </HStack>

                                <table className="table mt-5 border-white w-100 table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ textTransform: "uppercase", fontWeight: "500" }} className="text-muted">Product Details</th>
                                            <th scope="col" style={{ textTransform: "uppercase", fontWeight: "500" }} className="text-muted">Quantity</th>
                                            <th scope="col" style={{ textTransform: "uppercase", fontWeight: "500" }} className="text-muted">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartData?.cart?.map((item) => {
                                                const {
                                                    id,
                                                    thumbnail,
                                                    title,
                                                    price,
                                                    category,
                                                    qty,
                                                } = item;
                                                const Total = price * qty;

                                                return (
                                                    <>
                                                        <tr className='mt-3 mb-3' key={id}>
                                                            <th scope="row"> <HStack marginTop={"-3"}>
                                                                <Link to={`/singleproduct/${item.id}`}><img src={thumbnail} style={{ height: "80px", width: "100px" }} alt="" /> </Link><div style={{ fontSize: "smaller" }}> <p className='fw-normal text-left'>{title}</p> <p className='fw-normal text-left'>{category}</p><p className="text-danger fw-normal text-left" onClick={(e) => Remove_cart(e, item.id)} style={{ cursor: "pointer" }} >Remove</p></div> </HStack></th>
                                                            <td className=''> <HStack >   <button
                                                                disabled={item.qty <= 1}
                                                                onClick={(e) =>
                                                                    dispatch(decrementCartItem(item))
                                                                }
                                                                className="btn border-0 fs-4"
                                                            >
                                                                -
                                                            </button>
                                                                <h6

                                                                    style={{ justifyContent: "space-evenly" }}
                                                                >
                                                                    {item.qty}
                                                                </h6>
                                                                <button
                                                                    onClick={(e) =>
                                                                        dispatch(incrementCartItem(item))
                                                                    }
                                                                    className="btn border-0 fs-4"
                                                                >
                                                                    +
                                                                </button></HStack></td>
                                                            <td>${Total}</td>

                                                        </tr>
                                                        <br></br>


                                                    </>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>

                            <div className="col-sm-4 checkout " >
                                <div className="card p-3 border-0 shadow-sm bg-light">
                                    <Text fontSize={"1xl"} >Order Summary</Text>


                                    <>

                                        <HStack><p className='mt-5'>Shipping</p> <p className='mt-5 ms-auto'>${cartData?.cart?.shipping}</p></HStack>

                                        <HStack><p className='mt-2'>Tax</p> <p className='mt-2 ms-auto'>${cartData?.cart?.tax}</p></HStack>

                                        <HStack><p className='mt-2'>Total Cost</p> <p className='mt-2 ms-auto'>${cartData?.cart?.Total}</p></HStack>

                                    </>

                                    <button className='mt-5 p-3' style={{ backgroundColor: "rgba(242, 133, 43, 1)", color: "white", boxShadow: " 0px 5px 20px -3px rgba(242, 133, 43, 1)" }}>Procced To Pay  </button>



                                </div>

                            </div>

                        </div>

                    </div>
                </>
            ) : (
                <>
                    <div className="container" style={{ height: "550px", display: "grid", alignItems: "center" }}>
                        <div className="row">
                            <div className="col-sm-6 ms-auto me-auto  text-center ">
                                <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" style={{ height: "260px" }} className="ms-auto me-auto" alt="" />
                                <Text className='text-center'>Missing Cart items?</Text>
                                <p className='text-center' style={{ fontSize: "13px" }}>Login to see the items you added previously
                                </p>
                                <Link to={"/login"} className='ms-auto me-auto'>
                                    <Button className='px-5 mt-3 ms-auto me-auto' borderRadius={"0"} bgColor={"orange.500"} color={"whiteAlpha.900"}>Login</Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </>

            )}
            <Footer />

        </>
    )
}

export default Cart