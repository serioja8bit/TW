
import './App.css';


import React, {useState} from "react";
import {Grid} from "@mui/material";
import MenuButton from "./MenuButton";
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Content from "./Content";





function App() {
    const [activeButton, setActiveButton] = useState('Home');


    const handleButtonClick = (buttonText) => {
        setActiveButton(buttonText);
    };

    return (
        <div className={"App"}>

            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={12}>
                    <MenuButton text="Home" icon={<HomeIcon />} onClick={handleButtonClick} />
                    <MenuButton text="Carduri" icon={<AutoAwesomeIcon />} onClick={handleButtonClick} />
                    <MenuButton text="Check List" icon={<ChecklistIcon />} onClick={handleButtonClick} />
                    <MenuButton text="Profile" icon={<PermIdentityIcon />} onClick={handleButtonClick} />
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{ margin: 5 }}>
                <Content activeButton={activeButton} />
            </Grid>
        </div>

    );

}

export default App;
