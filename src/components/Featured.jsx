import React from 'react'
import Slider from "react-slick";
import { Card, CardBody, Image, Stack, Heading, Text, Button, ButtonGroup, Divider, CardFooter } from '@chakra-ui/react';
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";          
const Featured = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        AOS.refresh();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: true,
        nextArrow: <GrLinkNext />,
        prevArrow: <GrLinkPrevious />,
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
        <>    <div className="container mt-5 mb-3" id='Featured' >
            <div className="row">
                <div>
                    <h2 className='fs-5 mb-5 p-2  ' style={{ fontWeight: "500" }}>Featured Products </h2>
                    <Slider {...settings}>
                        <div data-aos={"fade-down"}>
                            <Card maxW='sm' shadow={"none"} >
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>unpaired red Nike sneaker</Heading>
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
                        </div>
                        <div data-aos={"fade-up"}>
                            <Card maxW='sm' shadow={"none"} >
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'
                                        borderRadius='lg'

                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>brown Nike sneaker</Heading>
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
                        </div>
                        <div data-aos={"fade-down"}>
                            <Card maxW='sm' shadow={"none"} >
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>white adidas low-top </Heading>
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
                        </div>
                        <div data-aos={"fade-up"}>
                            <Card maxW='sm' shadow={"none"} >
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>red converse all star </Heading>
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
                        </div>
                        <div data-aos={"fade-down"}>
                            <Card maxW='sm' shadow={"none"} >
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1556048219-bb6978360b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>brown Converse high top </Heading>
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
                        </div>
                        <div data-aos={"fade-up"}>
                            <Card maxW='sm' shadow={"none"} >
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1542280756-74b2f55e73ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>women's white sneakers</Heading>
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
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
        </>
    )
}

export default Featured