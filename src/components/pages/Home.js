import React from 'react'
import Navbar from "../Navbar/Navbar"
import Hero from '../Hero/Hero'
import Clients from '../Clients/Clients'
import About from '../About/About'
import Services from '../Services/Services'
import Product from '../Product/Product'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Clients />
            <About />
            <Services />
            <Product />
            <Testimonials />

        </>
    )
}

export default Home
