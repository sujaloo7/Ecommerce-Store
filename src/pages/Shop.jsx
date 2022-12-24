import React, { useEffect, useState } from 'react'
import { server } from '..';
import axios from 'axios';
import { Card, CardBody, Image, Stack, Heading, Text, Divider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${server}`);
                setProducts(data.products);
                console.log(data);
                setLoading(false);
            } catch (error) {
                <h1>no data</h1>
            }
        };
        fetchProducts();
    }, [])
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                {loading ? <Loader /> : <>
                    <div className="row">
                        {
                            products.map((ele, index) => {
                                return (
                                    <div className="col-sm-3">
                                        <Link to={`/singleproduct/${ele.id}`}>
                                            <Card maxW='sm' margin={"3"} key={ele.id}>
                                                <CardBody>
                                                    {loading ? <Loader /> : <>
                                                        <Image
                                                            src={ele.thumbnail}
                                                            alt='Green double couch with wooden legs'
                                                            borderRadius='lg'
                                                            height={"150"}
                                                            width={"100%"}
                                                            objectFit={"cover"}

                                                        />
                                                    </>}
                                                    <Stack mt='6' spacing='3'>
                                                        <Heading size='sm' style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "segoe ui symbol" }}>{ele.title}</Heading>
                                                        <Text color='orange' fontSize='1xl'>
                                                            ${ele.price}
                                                        </Text>
                                                    </Stack>
                                                </CardBody>
                                                <Divider />

                                            </Card>
                                        </Link>
                                    </div>
                                );
                            })
                        }

                    </div>
                </>}
            </div>
        </>
    )
}

export default Shop