import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { server } from '..';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';

const Singleproduct = () => {
    const [products, setProducts] = useState({});
    const [images, setImages] = useState([]);
    // const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${server}/${params.id}`);
                setProducts(data);
                setImages(data.images);
                console.log(data);
                // setLoading(false);
            } catch (error) {
                <h1>no data</h1>
            }
        };
        fetchProducts();

    }, [params.id])
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6" style={{ height: "200px" }}>
                        <Carousel infiniteLoop autoPlay showStatus={true} showArrows={false} showThumbs={false} interval={2000} >
                            {images?.map((i, index) => {
                                return (
                                    <div>
                                        <img src={i} key={index} style={{ height: "400px" }} alt="Item1" />
                                    </div>
                                );
                            })}
                        </Carousel>
                    </div>
                    <div className="col-sm-6">
                        <Heading size={"lg"}>{products?.title}</Heading>
                        <p className='mt-3' style={{ fontSize: "14px" }}>{products?.description}</p>
                        <h4 className='mt-3' style={{fontSize:"19px"}}>${products?.price}</h4 >
                    </div>
                </div>
            </div>
        </>
    )
}
export default Singleproduct    