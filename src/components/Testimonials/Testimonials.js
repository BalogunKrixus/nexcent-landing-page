import React from 'react'

import styles from './Testimonials.module.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import teslaImage from '../../assets/Tesla logo image.png'
import logo from '../../assets/Logo.png'
import logo1 from '../../assets/Logo-1.png'
import logo2 from '../../assets/Logo-2.png'
import logo3 from '../../assets/Logo-3.png'
import logo4 from '../../assets/Logo-4.png'
import logo5 from '../../assets/Logo-5.png'
import logo6 from '../../assets/Logo-6.png'

const Testimonials = () => {
    return (
        <div className={styles.testimonial_section}>
            <div className={styles.testimonial_container}>
                <img src={teslaImage} alt='Tesla logo' />
                <div className={styles.testimonial_content}>
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <cite>Tim Smith</cite>
                    <p className={styles.job_title}>British Dragon Boat Racing Association</p>

                    <div>
                        <div className={styles.testimonial_logo}>
                            <img src={logo} alt="logo" />
                            <img src={logo1} alt="logo 1" />
                            <img src={logo2} alt="logo 2" />
                            <img src={logo3} alt="logo 3" />
                            <img src={logo4} alt="logo 4" />
                            <img src={logo5} alt="logo 5" />
                            <img src={logo6} alt="logo 6" />
                        </div>
                        <a className={styles.testimonial_cta} href="#">Meet all customers <AiOutlineArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials