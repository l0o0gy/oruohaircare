import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function ProductDetails({ item }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                dir: 'rtl', 
                width: '100%',
                overflow: 'auto',
                mb:3,
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    boxShadow: 'none',
                }}
            >
                <CardMedia
                    component="img"
                    image={item.img}
                    alt={item.title}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </Card>
        </Box>
    );
}

export default ProductDetails;
