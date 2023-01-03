import React from 'react'
import Featured from '../components/Featured'
import Flat from '../components/Flat'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import New from '../components/New'
import Newsletter from '../components/Newsletter'
import Upcomming from '../components/Upcomming'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Featured />
            <Flat />
            <New />
            <Upcomming />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home