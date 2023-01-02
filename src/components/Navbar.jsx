import { Button } from '@chakra-ui/react';
import React from 'react';
import logo from "./logo.png"
import "./components.css";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';
import { FiHeart, FiLogOut, FiShoppingCart, FiUsers } from "react-icons/fi"
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();


    let email = localStorage.getItem("user_email");
    const logOut = () => {
        localStorage.clear();
        navigate("/login");
        toast.success("Logged Out Successfully")
    }


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

            <nav className="navbar navbar-expand-lg px-5 sticky-top p-0 " style={{ backgroundColor: "#e3e6f3" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> <img src={logo} alt="" style={{ height: "75px" }} /> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-3 ms-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/category">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" href="#">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" href="#">Contact</Link>
                            </li>

                        </ul>
                        {isLoggedIn ? (
                            <>
                                <Link to="/">
                                    <FiShoppingCart size={20} className='me-4' />
                                </Link>
                                <Menu>
                                    <MenuButton style={{
                                        textOverflow: "ellipsis ",
                                        maxWidth: "45px",
                                        whiteSpace: "nowrap ",
                                        overflow: "hidden  ",
                                        fontSize: "20px"
                                    }}>
                                        {email}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem> <FiUsers /> &nbsp;My Account</MenuItem>
                                        <MenuItem> <FiHeart /> &nbsp;My Wishlist</MenuItem>
                                        <MenuItem onClick={logOut}><FiLogOut /> &nbsp;Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </>
                        ) : (
                            <Link to="/login">
                                <Button size='lg' className="login-button px-4 text-light" style={{ backgroundColor: "#FF7F00" }}>Login</Button>
                            </Link>

                        )}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar