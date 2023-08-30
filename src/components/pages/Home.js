import React from 'react'
import Navbar from "../Navbar/Navbar"
import Hero from '../Hero/Hero'
import Clients from '../Clients/Clients'
import About from '../About/About'
import Services from '../Services/Services'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Clients />
            <About />
            <Services />
            <div>I am a footer</div>
        </>
    )
}

export default Home
