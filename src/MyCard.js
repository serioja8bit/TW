import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {Pokemon} from "./MyInterface";

function MyCard(props : Pokemon) {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Type:   {props.type} <br/>
                    Height: {props.height}<br/>
                    Weight: {props.weight}<br/>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MyCard;
