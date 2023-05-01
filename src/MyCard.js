import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function MyCard(props) {
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MyCard;
