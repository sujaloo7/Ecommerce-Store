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

    return (
        <>
            <div className="container mt-5 mb-3" id='Featured' data-aos={"fade-up"}>
                <div className="row">

                    <h2 className='fs-5 mb-5 p-2  ' style={{ fontWeight: "500" }}>Featured Products </h2>

                    <div className='col-sm-3' >
                        <Card maxW='sm' shadow={"none"} >
                            <CardBody>
                                <Image
                                    src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'

                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='sm'>unpaired red Nike sneaker</Heading>
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
                    <div className='col-sm-3'>
                        <Card maxW='sm' shadow={"none"} >
                            <CardBody>
                                <Image
                                    src='https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'
                                    borderRadius='lg'

                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='sm'>brown Nike sneaker</Heading>
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
                    <div className='col-sm-3' >
                        <Card maxW='sm' shadow={"none"} >
                            <CardBody>
                                <Image
                                    src='https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='sm'>white adidas low-top </Heading>
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
                    <div className='col-sm-3' >
                        <Card maxW='sm' shadow={"none"} >
                            <CardBody>
                                <Image
                                    src='https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='sm'>red converse all star </Heading>
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

                </div>

            </div>
        </>
    )
}

export default Featured