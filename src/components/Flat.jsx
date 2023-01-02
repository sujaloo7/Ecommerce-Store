import React from 'react'

const Flat = () => {
    return (
        <>
            <div className="container-fluid mt-5" style={{ backgroundImage: "url(https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/banner/b2.jpg?raw=true)", height: "300px", display: "grid", alignItems: "center" }}>
                <div className="row text-center">
                    <p className='text-light'>Repair Services</p>
                    <h3 className='text-light' style={{ fontSize: "30px" }}>
                        Up to 70% Off - All t-Shirts & Accessories</h3>
                    <div className=''>
                        <button className='btn explore'>Explore More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flat