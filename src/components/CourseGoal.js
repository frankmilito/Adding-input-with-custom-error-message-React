import React, { useState } from 'react'
import CourseItems from './CourseItems'

const initialState = [
  {
    id: 1,
    title: 'Work Loads ahead',
  },
  { id: 2, title: 'Weekend vibes only' },
]
function CourseGoal() {
  const [todos, setTodos] = useState(initialState)
  const [title, setInput] = useState('')
  const [error, setError] = useState(false)

  const handleClick = e => {
    const id = Math.random()
    const newTodo = { title, id }
    if (title.trim().length > 0) {
      setError(false)
      setTodos(prevState => {
        return [newTodo, ...prevState]
      })
      setInput('')
    } else {
      setError(true)
    }
  }
  const handleOnchange = e => {
    setError(false)
    setInput(e.target.value)
  }

  const handleDelete = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div>
      <div className="container">
        <div className={`course-main  ${error && 'error'}`}>
          <h1>Course Goal</h1>
          <input value={title} onChange={handleOnchange} type="text" />
          <button type="submit" className="btn" onClick={handleClick}>
            Add Goal
          </button>
        </div>
        {todos.map(todo => (
          <CourseItems todo={todo} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default CourseGoal
