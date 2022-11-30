import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const PostCard = (props) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/demo1.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.id ? props.id : ''}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.title ? props.title : 'No title present'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PostCard;