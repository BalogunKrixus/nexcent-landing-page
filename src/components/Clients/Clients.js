import React from 'react'
import styles from './Clients.module.css'
import logo from '../../assets/Logo.png'
import logo1 from '../../assets/Logo-1.png'
import logo2 from '../../assets/Logo-2.png'
import logo3 from '../../assets/Logo-3.png'
import logo4 from '../../assets/Logo-4.png'
import logo5 from '../../assets/Logo-5.png'
import logo6 from '../../assets/Logo-6.png'

const Clients = () => {
    return (
        <div className={styles.clients_container}>
            <div className={styles.clients_content}>
                <h3>Our Clients</h3>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className={styles.clients_logo}>
                <img src={logo} alt="logo" />
                <img src={logo1} alt="logo 1" />
                <img src={logo2} alt="logo 2" />
                <img src={logo3} alt="logo 3" />
                <img src={logo4} alt="logo 4" />
                <img src={logo5} alt="logo 5" />
                <img src={logo6} alt="logo 6" />
            </div>
        </div>
    )
}

export default Clients