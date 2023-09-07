import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css';
import NexcentLogo from '../../assets/NexcentLogo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../UI/Button';
// import { Link } from 'react-router-dom';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const clickHandler = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <nav>
            <div className={styles.navbarContainer}>
                <a to='/' className={styles.navLogo}>
                    <img src={NexcentLogo} alt="Nexcent logo" />
                </a>

                <div className={styles.mobileIcon} to='/' onClick={clickHandler}>
                    {click ? <FaBars /> : <FaTimes />}
                </div>

                <ul className={`${styles.navMenu} ${click ? styles.navMenuActive : ''}`} onClick={clickHandler}>
                    <li>
                        <a className={styles.navItem} to='/' onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li>
                        <a className={styles.navItem} to='/about' onClick={closeMobileMenu}>About</a>
                    </li>
                    <li>
                        <a className={styles.navItem} to='/services' onClick={closeMobileMenu}>Services</a>
                    </li>
                    <li>
                        <a className={styles.navItem} to='/product' onClick={closeMobileMenu}>Product</a>
                    </li>
                    <li>
                        <a className={styles.navItem} to='/blog' onClick={closeMobileMenu}>Blog</a>
                    </li>

                    <div className={styles.navItemBtn}>
                        {button ? (
                            <a to='/sign-up'>
                                <Button secondary>Login</Button>
                            </a>
                        ) : (
                            <a to='/sign-up'>
                                <Button onClick={closeMobileMenu} secondary>
                                    Login
                                </Button>
                            </a>
                        )}
                        {button ? (
                            <a to='/sign-up'>
                                <Button primary>Sign up</Button>
                            </a>
                        ) : (
                            <a to='/sign-up'>
                                <Button onClick={closeMobileMenu} primary>
                                    Sign up
                                </Button>
                            </a>
                        )}
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar