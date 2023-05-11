import React, { useState, useEffect } from 'react';
import'./apiMenutstyle.css'
export default function MenuApi() {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setMenuData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="menu-container">
            <h2>Menu</h2>
            <ul className="menu-list">
                {menuData.map(item => (
                    <li key={item.id} className="menu-item">
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
