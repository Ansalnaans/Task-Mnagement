import React from 'react'
import { useSelector } from 'react-redux';

const Nav = () => {
  const {tasklist} = useSelector((state)=>state.tasks)
  return (
    <div>
        <h1>Project Management</h1>
        <h4>{`Currently (${tasklist.length}) Pending Task(s)`}</h4>
    </div>
  )
}

export default Nav