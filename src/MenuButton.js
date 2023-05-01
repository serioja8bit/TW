import React from 'react';
import Button from '@mui/material/Button';

function MenuButton(props) {
    const handleButtonClick = () => {
        props.onClick(props.text);
    };

    return (
        <Button variant="outlined" sx={{ mr: 3 }} onClick={handleButtonClick}>
            {props.icon}
            {props.text}
        </Button>
    );
}

export default MenuButton;


