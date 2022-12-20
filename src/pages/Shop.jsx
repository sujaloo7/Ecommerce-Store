import React, { useEffect, useState } from 'react'
import { server } from '..';
import axios from 'axios';
import { Card, CardBody, Image, Stack, Heading, Text, Button, ButtonGroup, Divider, CardFooter } from '@chakra-ui/react';
import Navbar from '../components/Navbar';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${server}`);
                setProducts(data.products);
                console.log(data);
            } catch (error) {
                <h1>no data</h1>
            }

        };
        fetchProducts();
    }, [])


    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    {
                        products.map((ele, index) => {
                            return (
                                <div className="col-sm-3">
                                    <Card maxW='sm' shadow={"none"} key={ele.id}>
                                        <CardBody>
                                            <Image
                                                src={ele.thumbnail}
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                                height={"200"}
                                                width={"100%"}

                                            />
                                            <Stack mt='6' spacing='3'>
                                                <Heading size='md'>{ele.title}</Heading>
                                                <Text color='blue.600' fontSize='2xl'>
                                                    ${ele.price}
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
                            );
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Shop