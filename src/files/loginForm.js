import React, { useState } from 'react';
import './loginform.css';
function LoginForm({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        {
            event.preventDefault();

            if (username.trim()==="" && password.trim() === '') {
                alert('Password and username cannot be empty');
                return;
            }


            const validUsername = 'serioja8bit';
            const validPassword = '1234';

            if (username === validUsername && password === validPassword) {
                localStorage.setItem('username', username);
                alert('Login successful!');
                onClose();
            } else {
                alert('Invalid username or password');
            }
        }


        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('username', username);

        onClose();
    }


    return (
        <div className="login-form-overlay">
            <div className="login-form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="button-container">
                        <button type="submit">Login</button>
                        <button type="button" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
