import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { server } from '..'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsFiles } from "react-icons/bs";

const Category = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`${server}/categories`);
                setCategory(data);
                console.log(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                toast.error("Ooops! Somthing Went Wrong");
            }
        };
        fetchProducts();
    }, [])
    return (
        <>
            <Navbar />
            <div className="container-fluid ">
                <div className="container pt-5">
                    <div className="row">
                        <h4 className='ms-2 mb-4 ' style={{ fontWeight: "600" }}>Filter By Type</h4>
                        <div className="col-sm-3 text-center">


                            <Link to={"/shop"}>
                                <div className="card m-2 p-3 statics-card " style={{ height: "200px", textTransform: "capitalize" }}>
                                    <h1 className='mt-5 pt-4'>All</h1>
                                </div>
                            </Link>

                        </div>

                        {
                            category.map((ele, index) => {
                                return (
                                    <>

                                        <div className="col-sm-3   text-center" style={{}}>
                                            <Link to={`/category/${ele.id}`}>
                                                <div className="card m-2 p-3 category-card bg-light" style={{ height: "200px", display: "grid", alignItems: "center", textTransform: "capitalize" }}>
                                                    <h1>{ele}</h1>
                                                </div>
                                            </Link>

                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category