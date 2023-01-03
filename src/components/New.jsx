import React from 'react';
import { Card, CardBody, Image, Stack, Heading, Text, Button, CardFooter } from '@chakra-ui/react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FiShoppingCart } from 'react-icons/fi';


const New = () => {
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
                    <h2 className='fs-4 mb-5 p-2  text-center' style={{ fontWeight: "500" }}>New Arivals</h2>
                    <div className='col-sm-3' >
                        <Card maxW='sm' shadow={"none"} bgColor={"gray.100"} borderRadius={"2xl"}>
                            <CardBody>
                                <Image
                                    src='https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f5.jpg?raw=true'
                                    borderRadius='lg'

                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='sm'>unpaired red Nike sneaker</Heading>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $450
                                    </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>

                                <Button variant='solid' className='addbutton' width={"100%"} colorScheme='blue'>
                                    <FiShoppingCart size={"20"} /> &nbsp;  Add to cart
                                </Button>

                            </CardFooter>
                        </Card>
                    </div>
                    <div className='col-sm-3' >
                        <Card maxW='sm' shadow={"none"} bgColor={"gray.100"} borderRadius={"2xl"}>
                            <CardBody>
                                <Image
                                    src='https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f6.jpg?raw=true'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='sm'>white adidas low-top </Heading>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $450
                                    </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>


                                <Button variant='solid' className='addbutton' width={"100%"} colorScheme='blue'>
                                    <FiShoppingCart size={"20"} /> &nbsp;  Add to cart
                                </Button>

                            </CardFooter>
                        </Card>
                    </div>
                    <div className='col-sm-3' >
                        <Card maxW='sm' shadow={"none"} bgColor={"gray.100"} borderRadius={"2xl"}>
                            <CardBody>
                                <Image
                                    src='https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f7.jpg?raw=true'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='sm'>red converse all star </Heading>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $450
                                    </Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>

                                <Button variant='solid' className='addbutton ' width={"100%"} colorScheme='blue'>
                                    <FiShoppingCart size={"20"} /> &nbsp;     Add to cart
                                </Button>

                            </CardFooter>
                        </Card>
                    </div>
                    <div className='col-sm-3' >
                        <Card maxW='sm' shadow={"none"} bgColor={"gray.100"} borderRadius={"2xl"}>
                            <CardBody>
                                <Image
                                    src='https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f8.jpg?raw=true'
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
                            <CardFooter>

                                <Button variant='solid' className='addbutton' width={"100%"} colorScheme='blue'>
                                    <FiShoppingCart size={"20"} /> &nbsp; Add to cart
                                </Button>

                            </CardFooter>
                        </Card>
                    </div>

                </div>

            </div>
        </>
    )
}

export default New