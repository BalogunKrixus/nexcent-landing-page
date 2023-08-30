import React from 'react'
import styles from './Hero.module.css'
import HeroImage from '../../assets/Hero Illustration.png'
import Button from '../UI/Button'

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero_section}>
                <div className={styles.left_col}>
                    <h2>Lessons and insights <span>from 8 years</span></h2>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <Button primary_lg>
                        Register
                    </Button>

                </div>
                <div className={styles.right_col}>
                    <img src={HeroImage} alt="Man with is laptop" />
                </div>
            </div>
        </div>
    )
}

export default Hero