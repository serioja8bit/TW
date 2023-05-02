import React from 'react';
import MyCard from "./MyCard";
import {Grid} from "@mui/material";
import i_snorlax from "./resources/snorlax.png";
import i_alakazam from "./resources/alakazam.png";
import i_pikachu from "./resources/fatPokemon.jpg"
import MyForm from "./myinput";
import {Pokemon} from "./MyInterface";


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

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <MyCard {...snorlax}/>
                </Grid>
                <Grid item xs={4}>
                    <MyCard {...pikachu}></MyCard>
                </Grid>
                <Grid item xs={4}>
                    <MyCard {...alakazam}></MyCard>
                </Grid>

            </Grid>

        );
    } else if (activeButton === 'Check List') {
        return (
            <MyForm></MyForm>
        );
    }
    else if (activeButton === 'Profile') {
        return (
            <h1>Profile</h1>
        );
    }
    else{
        return null;
    }


}

export default Content;
