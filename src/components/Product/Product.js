import React from 'react';
import styles from './Product.module.css';
import clubsIcon from '../../assets/Clubs icon.png';
import eventBookingIcon from '../../assets/Event booking icon.png';
import membersIcon from '../../assets/Members icon.png';
import paymentIcon from '../../assets/Payment icon.png';
import productImage from '../../assets/Illustration 2.png';
import Section from '../Section/Section';

const Product = () => {
    const statContent = [
        {
            image: membersIcon,
            number: '2,245,341',
            data: "Members",
            alt: "Members Icon",
        },
        {
            image: clubsIcon,
            number: '46,328',
            data: 'Clubs',
            alt: "Clubs Icon",
        },
        {
            image: eventBookingIcon,
            number: '828,867',
            data: 'Event Bookings',
            alt: "Event Bookings Icon",
        },
        {
            image: paymentIcon,
            number: '1,926,436',
            data: 'Payments',
            alt: "Payments Icon",
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.stats_container}>
                <div className={styles.product_stats}>
                    <div className={styles.left_col}>
                        <h3>Helping a local <br /><span>business reinvent itself</span></h3>
                        <p>We reached here with our hard work and dedication</p>
                    </div>

                    <div className={styles.right_col}>
                        {statContent.map((stat, index) => (
                            <div className={styles.stat_card} key={index}>
                                <img src={stat.image} alt={stat.alt} />
                                <div>
                                    <h4>{stat.number}</h4>
                                    <p>{stat.data}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.product_info}>
                <Section
                    image={productImage}
                    alt='woman operating a mobile phone'
                    heading='How to design your site footer like we did'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.'
                    btnText='Learn More'
                />
            </div>
        </div>
    );
}

export default Product;
