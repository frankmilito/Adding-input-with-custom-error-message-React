import React from 'react'
import FormInput from './FormInput'
import styles from './FormWrapper.module.css'

function FormWrapper() {
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapper}>
        <FormInput />
      </div>
    </div>
  )
}

export default FormWrapper
