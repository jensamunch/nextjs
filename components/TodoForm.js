/** @jsx jsx */
import { jsx } from "theme-ui"

import React, { useState } from "react"

export function TodoForm(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange = e => {
    const { value } = e.target;
    setSearchTerm(value)
  }

  const onSubmit = e => {
    // Prevents GET request/page refresh on submit
    e.preventDefault();
    props.addTodo(searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Enter search term..."
          onChange={onChange}
        />      
        <button type="submit" disabled={props.isSearching}>SUBMIT</button>
    </form>
  )
}

export default TodoForm
