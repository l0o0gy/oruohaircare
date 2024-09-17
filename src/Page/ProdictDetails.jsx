import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function ProductDetails({ item }) {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                p: { xs: 2, sm: 0 },
                mt: { xs: '-50px', sm: 0, md: '-40px' },
                direction: 'rtl',
                width: '100%',
                overflow: 'auto',
                
            }}
        >
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    width: '100%',
                    maxWidth: 2000,
                    boxShadow: 'none',
                    mb: { xs: 5, md: 0 },
                    mr:{md:2},
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: { xs: '100%', md: '40%' },
                        height: { xs: 350, md: 500 },
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        bgcolor:'gray'



                    }}
                >
                    <CardMedia
                        component="img"
                        image={item.img}
                        alt={item.title}
                        sx={{
                            width: { xs: '100%', md: '100%' },
                            height: { xs: '100%', md: '100%' },
                            objectFit: 'cover',
                            boxShadow:{md:2} ,
                        }}
                    />
                    <IconButton
                        color="primary"
                        sx={{
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                            backgroundColor: '#1976d2',
                            '&:hover': {
                                backgroundColor: '#1976d2',
                            },
                            color: 'white',
                            p: 1.5,
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: { xs: '100%', md: '60%' },
                        p: 2,
                        backgroundColor: '#ffffff',
                        boxShadow: {xs:0,md:2},
                        direction: 'rtl',
                    }}
                >
                    <CardContent>
                        <Typography variant="h4" component="div" sx={{ mb: 2 ,textAlign:{xs:'center',md:'auto'}}}>
                            {item.title}
                        </Typography>

                        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
                            <Table>
                                <TableBody>
                                    <TableRow sx={{ display:'grid',gridAutoColumns:{md:{repeat:'2 1fr'}}}}>
                                        <TableCell>
                                            <Typography variant="h6" sx={{ textAlign: 'start' }}>الوصف:</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography variant="body1" sx={{ textAlign: 'start' }}>{item.info}</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                    <Stack direction="row" spacing={2} sx={{ mt: 2, display: 'flex', justifyContent: 'space-evenly' }}>
                        {item.agents && item.agents.length > 0 ? (
                            item.agents.map(agent => (
                                <Stack key={agent.id} spacing={1} alignItems="center">
                                    <Avatar 
                                        alt={agent.name} 
                                        src={agent.img}
                                        sx={{ cursor: 'pointer', width: {xs:50,md:100}, height: {xs:50,md:100} }}
                                        onClick={() => window.open(agent.link, '_blank')}
                                    />
                                    <Typography variant="body1">{agent.name}</Typography>
                                </Stack>
                            ))
                        ) : (
                            <Typography variant="body1" sx={{ textAlign: 'center', width: '100%' }}>
                                No agents available
                            </Typography>
                        )}
                    </Stack>
                </Box>
            </Card>
        </Box>
    );
}

export default ProductDetails;