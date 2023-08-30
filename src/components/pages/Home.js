import React from 'react'
import Navbar from "../Navbar/Navbar"
import Hero from '../Hero/Hero'
import Clients from '../Clients/Clients'
import About from '../About/About'
import Services from '../Services/Services'

const Home = () => {
    return (
        <>
            <div>I am the header</div>
            <Navbar />
            <Hero />
            <Clients />
            <About />
            <Services />

        </>
    )
}

export default Home