

import React, { useState, useEffect } from 'react';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Use the fetch API to get data from the specified endpoint
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json()) // Parse the JSON response
            .then(data => setTodos(data));    // Update the state with the fetched data
    }, []); // The empty dependency array ensures the effect runs once after the initial render

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Tapp />);

