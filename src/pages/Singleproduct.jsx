import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { server } from '..';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Heading, Text } from '@chakra-ui/react';
import Loader from './Loader';
import { FcLike } from "react-icons/fc"
import { BsCart2, BsTagFill } from "react-icons/bs"
import { toast } from 'react-hot-toast';


const Singleproduct = () => {
    const [products, setProducts] = useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();



    const addTocart = () => {
        toast.success("Item Added To Cart")
    }
    const addTowishlist = () => {
        toast.success('Item Added To Wishlist !', {
            icon: '❤',
            style: {
                color: 'red'
            }
        });
    }

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${server}/${params.id}`);
                setProducts(data);
                setImages(data.images);
                console.log(data);
                setLoading(false);
            } catch (error) {
                <h1>no data</h1>
            }
        };
        fetchProducts();

    }, [params.id])
    return (
        <>
            <Navbar />
            {loading ? <Loader /> : <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-6" style={{ height: "160px" }}>
                            <Carousel infiniteLoop autoPlay showStatus={true} showArrows={false} showThumbs={false} interval={2000} >
                                {images?.map((i, index) => {
                                    return (
                                        <div className=''>
                                            {loading ? <Loader /> : <>
                                                <img src={i} key={index} style={{ height: "400px", objectFit: "contain"  , borderRadius:"15px"}} alt="Item1" />
                                            </>}
                                        </div>
                                    );
                                })}
                            </Carousel>


                        </div>
                        <div className="col-sm-6">
                            <Heading size={"lg"}>{products?.title}</Heading>
                            {/* <p className='mb-0'><span className='fw-bold'>Brand:</span> {products?.brand}</p>
                            <p className='mb-0'><span className='fw-bold'>Category:</span> {products?.category}</p> */}

                            <p className='mt-3 mb-2' style={{ fontSize: "15px" }}>{products?.description}</p>
                            <p className='mt-2 mb-2 fs-5' style={{ color: "rgba(242, 133, 43, 1)" }}>$
                                {parseInt((products?.price *
                                    (100 - products?.discountPercentage)) /
                                    100)}{" "}
                                <span className="text-muted">
                                    {" "}
                                    <del className='' style={{ fontSize: "15px" }}>${products?.price}</del>{" "}<span className='text-success ms-2' style={{ fontSize: "14px" }}>{parseInt(products?.discountPercentage)}%off</span>
                                </span></p>

                            <Text size={"sm"} marginBottom={"2"} fontWeight={"medium"}> Available offers</Text>
                            <Text fontSize={"14px"} marginBottom={"1"} display={"flex"}>  <BsTagFill size={"20"} color={"green"} marginTop={"10"} /> Bank Offer10% off on Bank of Baroda Credit Card EMI Transactions, up to ₹3,000 on orders of ₹5,000 and above</Text>
                            <Text fontSize={"14px"} marginBottom={"1"} display={"flex"}><BsTagFill size={"20"} color={"green"} />Bank Offer10% off on Kotak Bank Credit Cards and Credit EMI Trxns, up to ₹1,500. On orders of ₹5,000 and above</Text>
                            <Text fontSize={"14px"} marginBottom={"1"} display={"flex"}><BsTagFill size={"20"} color={"green"} />Bank Offer10% off on ICICI Bank Credit Card EMI Transactions, up to ₹2,000. On orders of ₹5,000 and above</Text>
                            <Text fontSize={"14px"} marginBottom={"1"} display={"flex"}><BsTagFill size={"20"} color={"green"} />Buy this Product and Get Extra ₹500 Off on Two-Wheelers</Text>
                            <Button p={"7"} leftIcon={<BsCart2 size={"20"} />} className="singleproductbtn1" onClick={addTocart}>Add To Cart</Button>
                            <Button p={"7"} m={"5"} leftIcon={<FcLike size={"20"} />} className="singleproductbtn2" onClick={addTowishlist}>Add To Wishlist</Button>

                        </div>
                    </div>
                </div>
            </>}
        </>
    )
}
export default Singleproduct    