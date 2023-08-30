import React from 'react'
import Section from '../Section/Section'
import aboutImage from '../../assets/Illustration 1.png'

const About = () => {

    return (
        <Section
            image={aboutImage}
            alt='Man and woman operating a mobile phone'
            heading='The unseen of spending three years at Pixel grade'
            paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.'
            btnText='Learn More'
        />
    )
}

export default About