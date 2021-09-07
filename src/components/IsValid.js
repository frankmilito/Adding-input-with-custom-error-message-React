import React from 'react'
import styles from './isValid.module.css'

function IsValid(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Invalid Input</h1>
        </div>
        <div className={styles.content}>
          <p>Please enter a valid name and age (non-empty values).</p>
          <button onClick={() => props.setValid(false)}>Okay</button>
        </div>
      </div>
    </div>
  )
}

export default IsValid
