import React from 'react'
import styles from './button.module.css'
// const Button = styled.button`
//   font-size: 17px;
//   color: white;
//   padding: 8px 20px;
//   background-color: #a1005e;
//   border: none;
// `
function Button(props) {
  return (
    <button className={styles.btn} onClick={props.handleClick}>
      {props.children}
    </button>
  )
}

export default Button
