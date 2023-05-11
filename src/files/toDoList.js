import React, { useState, useEffect } from 'react';
import './todolist.css'
export default  function ToDoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('todo-items'));
        if (storedItems) {
            setItems(storedItems);
        }
    }, []);

    const handleAddItem = () => {
        if (inputValue) {
            const newItems = [...items, inputValue];
            setItems(newItems);
            setInputValue('');
            localStorage.setItem('todo-items', JSON.stringify(newItems));
        }
    };

    const handleDeleteItem = (index) => {
        setIsDeleting(true);
        setTimeout(() => {
            const newItems = [...items];
            newItems.splice(index, 1);
            setItems(newItems);
            localStorage.setItem('todo-items', JSON.stringify(newItems));
            setIsDeleting(false);
        }, 2000);
    };



    return (
        <div className="todo-list">
            <h1 className="texttodo">ToDoList</h1>
            <input className="todo-input" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className="todo-add-btn" onClick={handleAddItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="todo-item">
                        {item}
                        <button onClick={() => handleDeleteItem(index)}>
                            {isDeleting && <div className="spinner"></div>}
                            {!isDeleting && 'Delete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


