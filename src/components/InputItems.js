import React from 'react'
import styles from './InputItems.module.css'

function InputItems(props) {
  if (props.data.length === 0) {
    return <div></div>
  }
  return (
    <div className={styles.items}>
      {props.data.map(item => (
        <h1>
          {item.name} ({item.age} years old )
        </h1>
      ))}
    </div>
  )
}

export default InputItems
