import React from 'react';
import MyCard from "./MyCard";
import {Grid} from "@mui/material";
import i_snorlax from "./resources/snorlax.png";
import i_alakazam from "./resources/alakazam.png";
import i_pikachu from "./resources/fatPokemon.jpg"
import MyForm from "./myinput";
import {Pokemon} from "./MyInterface";

import ToDoList from "./files/toDoList";
import LoginButton from "./files/login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MenuApi from "./files/ApiMenu";

const snorlax: Pokemon = {
    name: "Snorlax",
    image: i_snorlax,
    height: 10,
    weight:100,
    type: "Normal"
};
const pikachu: Pokemon = {
    name: "Pikachu",
    image: i_pikachu,
    height: 1,
    weight:3,
    type: "Electric"
};
const alakazam: Pokemon = {
    name: "Alakazam",
    image: i_alakazam,
    height: 4,
    weight:8,
    type: "Psychic"
};

function Content(props) {
    const { activeButton } = props;

    if (activeButton === 'Home') {
        return (
            <h3>Sergiu Leva</h3>
        );
    } else if (activeButton === 'Carduri') {
        return (

            <Grid container spacing ={3}>
                <Grid item xs={12} sm={4} md={4}>
                    <MyCard {...snorlax}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <MyCard {...pikachu}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <MyCard {...alakazam}/>
                </Grid>
            </Grid>


        );
    } else if (activeButton === 'CheckList') {
        return (
            <MyForm></MyForm>
        );
    }
    else if (activeButton === 'Profile') {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/home">Home</Link>
                                </li>
                                <li>
                                    <Link to="/books">Books</Link>
                                </li>
                            </ul>
                        </nav>
                        <Routes>
                            <Route
                                path="/home"
                                element={
                                    <div /*style={{ backgroundColor: bgColor }} onMouseMove={handleMouseMove}*/>
                                        <div>
                                           {/* <IconButtonColors onClick={handleClick} />*/}
                                            <LoginButton />
                                        </div>
                                        {/*<div className="box">{showCard && <ActionAreaCard />}</div>
                                        <div>{showInput && <InputWithButton />}</div>*/}
                                        <ToDoList />
                                    </div>
                                }
                            />
                            <Route path="/books" element={<MenuApi />} />
                        </Routes>
                    </div>
                </Router>

            </div>

        );
    }
    else{
        return null;
    }


}

export default Content;
