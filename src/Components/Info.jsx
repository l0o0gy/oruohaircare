import React, { useState } from "react";
import { 
  Button, 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid,
  Zoom,
  Container,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Info = ({ item }) => {
  const { CardInfo } = item;
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (cardId) => {
    setImageLoaded(prev => ({ ...prev, [cardId]: true }));
  };

  return (
    <Box
      component="div"
      dir="rtl"
      sx={{
        background: "linear-gradient(180deg, #fffaf0 0%, #fdf5e6 100%)",
        minHeight: "100vh",
        py: {xs:5,md:0},
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Container maxWidth="lg">
      

        {/* Cards Grid */}
        <Grid container spacing={4} justifyContent="center">
          {CardInfo.map((card, index) => (
            <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
              <Zoom in timeout={300 + index * 100}>
                <Card
                  // onMouseEnter={() => setHoveredCard(card.id)}
                  // onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    background: "linear-gradient(180deg, #ffffff 0%, #fafafa 100%)",
                    border: "1px solid rgba(196, 152, 64, 0.15)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    boxShadow: hoveredCard === card.id
                      ? "0 12px 30px rgba(212, 175, 55, 0.3)"
                      : "0 4px 12px rgba(0,0,0,0.1)",
                    transform: hoveredCard === card.id
                      ? "translateY(-6px) scale(1.02)"
                      : "translateY(0)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #c49840ff, #8d6e31ff)",
                      opacity: hoveredCard === card.id ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: {xs:"360px",md:"300px"},
                      background: "linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)",
                    }}
                  >

                    <CardMedia
                      component="img"
                      image={card.img}
                      alt={card.title}
                      onLoad={() => handleImageLoad(card.id)}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                        transform: hoveredCard === card.id ? "scale(1.1)" : "scale(1)",
                        opacity: imageLoaded[card.id] ? 1 : 0,
                      }}
                    />

                    
                  </Box>

                  {/* Content */}
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      textAlign: "center",
                      direction: "rtl",
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#2c2c2c",
                        lineHeight: 1.4,
                        minHeight: "2.8em",
                      }}
                    >
                      {card.title}
                    </Typography>

                    {card.description && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          opacity: 0.8,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {card.description}
                      </Typography>
                    )}

                    {card.price && (
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          background: "linear-gradient(135deg, #c49840ff, #8d6e31ff)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          mt: "auto",
                        }}
                      >
                        {card.price}
                      </Typography>
                    )}
                  </CardContent>

                  {/* Button */}
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/info/${card.id}`);
                      }}
                      sx={{
                        background: "linear-gradient(135deg, #c49840ff 0%, #8d6e31ff 100%)",
                        color: "white",
                        borderRadius: 50,
                        py: 1.3,
                        fontSize: "1rem",
                        fontWeight: 700,
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 8px 20px rgba(196, 152, 64, 0.4)",
                        },
                      }}
                    >
                      انقر للمزيد
                    </Button>
                  </Box>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Info;
