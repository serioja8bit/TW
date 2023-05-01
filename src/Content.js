import React from 'react';
import MyCard from "./MyCard";
import {Grid} from "@mui/material";
import snorlax from "./resources/snorlax.png";
import alakazam from "./resources/alakazam.png";
import fatpica from "./resources/fatPokemon.jpg"
import MyForm from "./myinput";



function Content(props) {
    const { activeButton } = props;

    if (activeButton === 'Home') {
        return (
            <h1>Sergiu Leva</h1>
        );
    } else if (activeButton === 'Carduri') {
        return (

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <MyCard image ={snorlax} title="Snorlax" description="Description"></MyCard>
                </Grid>
                <Grid item xs={4}>
                    <MyCard image ={alakazam} title="Alakazam" description="Description"></MyCard>
                </Grid>
                <Grid item xs={4}>
                    <MyCard image ={fatpica} title="Picachu" description="Description"></MyCard>
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
