import React from 'react';
import { Input, InputRightElement, Button, InputGroup, Stack } from '@chakra-ui/react'
import "./login.css";
import { AiFillEye, AiFillEyeInvisible, AiFillLinkedin, AiFillApple, AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <div className="container-fluid login">
                <div className="row p-2">
                    <form action="" className='bg-white col-sm-3 ms-auto me-auto shadow p-4' >
                        <h2 className='text-center fs-4 fw-bold mb-3' >Login</h2>
                        <div className='mb-4'>
                            <Input placeholder='Enter Email' type={"email"} required />
                        </div>
                        <div className='mb-3'>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'
                                    required
                                />

                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='lg' className='p-1 mt-2' bgColor={"white"} onClick={handleClick}>
                                        {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <div className='d-flex text-muted px-1' ><p className='account'>Don't Have Account</p> <Link to="/signup" className='ms-auto redirect'>SignUp</Link> </div>
                        </div>
                        <Button marginTop={"2"} marginBottom={"3"} color={"white"} type={"submit"} bgColor={"blackAlpha.900"} w={"100%"}>Login</Button>
                        <p className='text-center fw-bold text-muted mt-3'>OR</p>

                        <Stack spacing={10} marginTop={"7"} direction='row' align='center' textAlign={"center"}>

                            <Button className='bg-light shadow-sm' size='md' width={"25%"}>
                                <FcGoogle />
                            </Button>
                            <Button className='bg-light shadow-sm' color={"twitter.800"} size='md' width={"25%"}>
                                <AiFillLinkedin />
                            </Button>
                            <Button className='bg-light shadow-sm' color={"facebook.900"} size='md' width={"25%"}>
                                <AiFillFacebook />
                            </Button>
                            <Button className='bg-light shadow-sm' size='md' width={"25%"}>
                                <AiFillApple />
                            </Button>
                        </Stack>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login