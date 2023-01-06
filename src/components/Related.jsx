import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Card, CardBody, Image, Stack, Heading, Text, Button, ButtonGroup, Divider, CardFooter } from '@chakra-ui/react';
import { server } from '..';
import axios from 'axios';
import Loader from '../pages/Loader';


const Related = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${server}?limit=10`);
                setProducts(data.products);
                console.log(data);
                setLoading(false);

            } catch (error) {

            }
        };
        fetchProducts();
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    cssEase: "linear",

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    cssEase: "linear",

                }
            }
        ]
    };
    return (
        <>
            <div className="container mt-5 mb-3" id='Featured' >
                <div className="row">
                    <div>
                        <h2 className='fs-5 mb-3 p-2  ' style={{ fontWeight: "500" }}>Related Products </h2>
                        <Slider {...settings}>

                            {
                                products.map((ele, index) => {
                                    return (

                                        <div >
                                            {loading ? <Loader /> : <>
                                                <Card maxW='sm' shadow={"none"} >
                                                    <CardBody>
                                                        <Image
                                                            src={ele?.thumbnail}
                                                            borderRadius='lg'
                                                            height={"150"}
                                                            width={"100%"}
                                                            objectFit={"cover"}

                                                        />
                                                        <Stack mt='6' spacing='3'>
                                                            <Heading size='md' width={"100%"}
                                                                objectFit={"cover"}
                                                            >{ele?.title}</Heading>
                                                            <Text color='blue.600' fontSize='2xl'>
                                                                $450
                                                            </Text>
                                                        </Stack>
                                                    </CardBody>
                                                    <Divider />
                                                    <CardFooter>
                                                        <ButtonGroup spacing='2'>

                                                            <Button variant='solid' className='addbutton' paddingLeft={"30px"} paddingRight={"30px"} colorScheme='blue'>
                                                                Add to cart
                                                            </Button>
                                                            <Button variant='ghost' className='cartbutton' color={"blackAlpha.900"} colorScheme='blue'>
                                                                Buy Now
                                                            </Button>
                                                        </ButtonGroup>
                                                    </CardFooter>
                                                </Card>
                                            </>}
                                        </div>
                                    );
                                })
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Related