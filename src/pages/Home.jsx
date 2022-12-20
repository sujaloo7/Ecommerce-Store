import React from 'react'
import Featured from '../components/Featured'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Sale from '../components/Sale'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Featured />
            <Sale />
        </>
    )
}

export default Home