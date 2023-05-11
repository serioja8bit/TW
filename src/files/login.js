import React, { useState,useEffect } from 'react';
import LoginForm from './loginForm';
import './loginstyle.css';

export default function LoginButton() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('users'));

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('username'));
    }, []);

    const handleLoginButtonClick = () => {
        setShowLoginForm(true);
    };

    const handleLogin = (username) => {
        setLoggedInUser(username);
        setShowLoginForm(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('users');
        setLoggedInUser(null);
    };

    return (
        <div>
            {loggedInUser ? (
                <div>
                    Logged in as {loggedInUser}
                    <button className="login-button" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button className="login-button" onClick={handleLoginButtonClick}>Login</button>
            )}

            {showLoginForm && (
                <div className="modal">
                    <div className="modal-content">
                        <LoginForm onClose={() => setShowLoginForm(false)} onLogin={handleLogin} />
                    </div>
                </div>
            )}
        </div>
    );
}
