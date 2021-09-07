import React, { useState } from 'react'
import styles from './Input.module.css'
import InputItems from './InputItems'
import IsValid from './IsValid'

function FormInput() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [data, setData] = useState([])
  const [valid, setValid] = useState(false)
  const handleName = e => {
    setValid(false)
    setName(e.target.value)
  }
  const handleAge = e => {
    setValid(false)
    setAge(e.target.value)
  }
  const handleSubmit = () => {
    if (name === '' || age === '') {
      setValid(true)
    } else if (age <= 0) {
      setValid(true)
    } else {
      setValid(false)
      let id = Math.random()
      setData([...data, { age, name, id }])
      setName('')
      setAge('')
    }
  }
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.container} ${valid && styles.danger}`}>
          <label>Username</label>
          <input onChange={handleName} value={name} type="text" />
          <label>Age (Years)</label>
          <input onChange={handleAge} value={age} type="number" />
          <button onClick={handleSubmit} type="submit">
            Add User
          </button>
        </div>
        {valid && <IsValid setValid={setValid} />}
        <InputItems data={data} />
      </div>
    </>
  )
}

export default FormInput
