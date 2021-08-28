import React from 'react'

function CourseItems(props) {
  const { todo } = props

  const handleClick = id => {
    props.handleDelete(id)
  }
  return (
    <div>
      <h3 onClick={() => handleClick(todo.id)}>{todo.title}</h3>
    </div>
  )
}

export default CourseItems
