import React from 'react'
import styles from './Services.module.css'
import icon from '../../assets/Icon.png'
import icon1 from '../../assets/Icon-1.png'
import icon2 from '../../assets/Icon-2.png'

const Services = () => {
    const servicesContent = [
        {
            image: icon,
            altText: 'Group icon',
            heading: 'Membership Organisations',
            text: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            image: icon1,
            altText: 'Building icon',
            heading: 'National Associations',
            text: 'Our membership management software provides full automation of membership renewals and payments'
        },
        {
            image: icon2,
            altText: 'Hands icon',
            heading: 'Clubs and Groups',
            text: 'Our membership management software provides full automation of membership renewals and payments'
        },
    ];

    return (
        <div className={styles.services_container}>
            <div className={styles.headings}>
                <h3>Manage your entire community in a single system</h3>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className={styles.our_services}>
                {servicesContent.map((service) => (
                    <div className={styles.container}>
                        <img src={service.image} alt={service.altText} />
                        <h4>{service.heading}</h4>
                        <p>{service.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services