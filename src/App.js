
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
            <div className={"menu"}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} sm={10} md={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <MenuButton text="Home" icon={<HomeIcon />} onClick={handleButtonClick} />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <MenuButton text="Carduri" icon={<AutoAwesomeIcon />} onClick={handleButtonClick} />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <MenuButton text="CheckList" icon={<ChecklistIcon />} onClick={handleButtonClick} />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <MenuButton text="Profile" icon={<PermIdentityIcon />} onClick={handleButtonClick} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>


            <Grid item xs={12} sx={ {margin: 5 }}>
                <Content activeButton={activeButton} />
            </Grid>
        </div>

    );

}

export default App;
