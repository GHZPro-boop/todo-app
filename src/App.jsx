import React, { useState } from 'react'
import './index.css'
import { Forms } from './Components/Forms'
import { FilterSection } from './Components/FilterSection'
import { Item } from './Components/Items'

import { BsMoonFill, BsSun } from "react-icons/bs"

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isDarkMode, setDarkMode] = useState(false);

  // Function to add items
  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      status: false,
    }
    setTodos([newTodo, ...todos])
  }

  // function to delete an item
  function removeTodoById(id) {
    const todoItems = todos.filter(todo => todo.id !== id);
    setTodos(todoItems)
  }

  //function to set status of the items whether completed, active, or all
  function toggleTodoStatus(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    )
  }

  //function to clear all completed todos
  function clearCompletedTodos() {
    const todoItems = todos.filter(todo => !todo.status);
    setTodos(todoItems)
  }

  //function to update the filter value
  function setFilterValue(value) {
    setFilter(value)
  }

  //function to get number of todos
  function getTodosCount() {
    if (filter === "all") {
      return todos.length;
    } else if (filter === "active") {
      return todos.filter(todo => !todo.status).length;
    } else if (filter === "completed") {
      return todos.filter(todo => todo.status).length;
    }

    return 0;
  }

  //function to render todos by filtering
  function renderTodos() {
    let filteredTodos = todos

    if (filter === "active") {
      filteredTodos = todos.filter(todo => !todo.status)
    } else if (filter === "completed") {
      filteredTodos = todos.filter(todo => todo.status)
    }

    return filteredTodos.map(todo => <Item key={todo.id} isDarkMode={isDarkMode} statusUpdate={toggleTodoStatus} deleteItem={removeTodoById} itemData={todo} />)
  }

  //function to change theme mode
  function toggleMode() {
    setDarkMode(!isDarkMode);
  }

  return (
    <div className={`${isDarkMode ? 'bg-white' : 'bg-gray-900'} min-h-screen pb-20`}>
      <div className='bg-mobile_image bg-no-repeat bg-cover h-52 px-5 py-5'>
        <div className='flex justify-between items-center lg:w-[50%] lg:mx-auto'>
          <p className={`${isDarkMode ? 'text-white' : 'text-[#2b2d44]'} text-3xl font-semibold tracking-[6px]`}>TODO</p>
          {
            isDarkMode ? (
              <BsSun onClick={toggleMode} className='h-6 w-6' />
            ) : (
              <BsMoonFill onClick={toggleMode} className='h-6 w-6' />
            )
          }
        </div>
        <div className='mt-8 lg:w-[50%] lg:mx-auto'>
          <Forms handleAddEvent={addTodo} isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* display items section  */}
      <div className={`h-60 mx-5 rounded-md relative -top-8 lg:w-[48%] lg:mx-auto ${isDarkMode ? 'bg-white' : 'bg-gray-900'}`}>
        <FilterSection filterType={setFilterValue} isDarkMode={isDarkMode} />
        {renderTodos()}
        <div className='flex justify-between items-center mx-5 h-14'>
          <p className={`${isDarkMode ? "text-[#494c6b]" : "text-gray-300"}`}>{getTodosCount()} item(s)</p>
          <button type="button" onClick={() => clearCompletedTodos()} className={`focus:font-bold ${isDarkMode ? "text-[#494c6b]" : "text-gray-300"}`}>Clear Completed</button>
        </div>
      </div>
    </div>
  )
}

export default App
