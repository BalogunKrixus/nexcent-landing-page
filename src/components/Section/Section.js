import React from 'react'
import styles from './Section.module.css'
import Button from '../UI/Button'

const Section = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.left_col}>{props.image}</div>
            <div className={styles.right_col}>
                <h3>{props.heading}</h3>
                <p>{props.paragraph}</p>
                <Button primary_lg>{props.children}</Button>
            </div>
        </div>
    )
}

export default Section