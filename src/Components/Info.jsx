import React, { useState } from "react";
import { 
  Button, 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Grid,
  Chip,
  IconButton,
  Fade,
  Zoom,
  Skeleton
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Info = ({ item }) => {
  const { CardInfo } = item;
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageLoad = (cardId) => {
    setImageLoaded(prev => ({ ...prev, [cardId]: true }));
  };

  return (
    <Box sx={{ py: 6 }}>
      {/* Section Header */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Fade in timeout={800}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: 'linear-gradient(135deg, #c49840ff 0%, #8d6e31ff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #c49840ff, transparent)',
                borderRadius: 2,
              }
            }}
          >
            استكشف منتجاتنا
          </Typography>
        </Fade>
        <Fade in timeout={1000}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              opacity: 0.8
            }}
          >
            اكتشف مجموعتنا المميزة من المنتجات عالية الجودة
          </Typography>
        </Fade>
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={3} justifyContent="center">
        {CardInfo.map((card, index) => (
          <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
            <Zoom in timeout={300 + index * 100}>
              <Card
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 4,
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 100%)',
                  border: '1px solid rgba(196, 152, 64, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  boxShadow: hoveredCard === card.id 
                    ? '0 20px 40px rgba(196, 152, 64, 0.25)' 
                    : '0 4px 12px rgba(0,0,0,0.08)',
                  transform: hoveredCard === card.id 
                    ? 'translateY(-8px) scale(1.02)' 
                    : 'translateY(0)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #c49840ff, #8d6e31ff)',
                    opacity: hoveredCard === card.id ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                  },
                }}
              >
                {/* Image Container */}
                <Box 
                  sx={{ 
                    position: 'relative',
                    overflow: 'hidden',
                    height: 280,
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                  }}
                >
                  {/* Status Badge */}
                  {card.status && (
                    <Chip
                      icon={card.status === 'new' ? <StarIcon /> : <TrendingUpIcon />}
                      label={card.status === 'new' ? 'جديد' : 'الأكثر مبيعاً'}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 2,
                        background: 'linear-gradient(135deg, #c49840ff, #8d6e31ff)',
                        color: 'white',
                        fontWeight: 'bold',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%': { transform: 'scale(1)' },
                          '50%': { transform: 'scale(1.05)' },
                          '100%': { transform: 'scale(1)' },
                        }
                      }}
                    />
                  )}

                  {/* Loading Skeleton */}
                  {!imageLoaded[card.id] && (
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                      animation="wave"
                      sx={{ position: 'absolute', top: 0, left: 0 }}
                    />
                  )}

                  {/* Card Image */}
                  <CardMedia
                    component="img"
                    image={card.img}
                    alt={card.title}
                    onLoad={() => handleImageLoad(card.id)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: hoveredCard === card.id 
                        ? 'scale(1.1)' 
                        : 'scale(1)',
                      opacity: imageLoaded[card.id] ? 1 : 0,
                    }}
                  />

                  {/* Overlay on Hover */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)',
                      opacity: hoveredCard === card.id ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'flex-end',
                      padding: 2,
                    }}
                  >
                    <IconButton
                      sx={{
                        background: 'rgba(255,255,255,0.9)',
                        color: '#c49840ff',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'white',
                          transform: 'scale(1.1)',
                        }
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Box>
                </Box>

                {/* Content */}
                <CardContent 
                  sx={{ 
                    flexGrow: 1, 
                    textAlign: 'center',
                    direction: 'rtl',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{
                      fontWeight: 700,
                      color: '#2c2c2c',
                      lineHeight: 1.4,
                      minHeight: '2.8em',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {card.title}
                  </Typography>

                  {card.description && (
                    <Typography 
                      variant="body2" 
                      sx={{
                        color: 'text.secondary',
                        opacity: 0.8,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {card.description}
                    </Typography>
                  )}

                  {card.price && (
                    <Box sx={{ mt: 'auto' }}>
                      <Typography 
                        variant="h5" 
                        sx={{
                          fontWeight: 'bold',
                          background: 'linear-gradient(135deg, #c49840ff, #8d6e31ff)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {card.price}
                      </Typography>
                    </Box>
                  )}
                </CardContent>

                {/* Action Button */}
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    endIcon={
                      <ArrowForwardIcon 
                        sx={{
                          transition: 'transform 0.3s ease',
                          transform: hoveredCard === card.id 
                            ? 'translateX(-5px)' 
                            : 'translateX(0)',
                        }}
                      />
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/info/${card.id}`);
                    }}
                    sx={{
                      background: 'linear-gradient(135deg, #c49840ff 0%, #8d6e31ff 100%)',
                      color: 'white',
                      borderRadius: 50,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      textTransform: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 0,
                        height: 0,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.3)',
                        transform: 'translate(-50%, -50%)',
                        transition: 'width 0.6s, height 0.6s',
                      },
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(196, 152, 64, 0.4)',
                        '&::before': {
                          width: '300px',
                          height: '300px',
                        }
                      }
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

      {/* Bottom Wave Decoration */}
      <Box
        sx={{
          mt: 8,
          height: '60px',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '100%',
            background: `url("data:image/svg+xml,%3Csvg width='1440' height='60' viewBox='0 0 1440 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30C240 10 480 10 720 30C960 50 1200 50 1440 30V60H0V30Z' fill='url(%23gradient)'/%3E%3Cdefs%3E%3ClinearGradient id='gradient' x1='0' y1='0' x2='1440' y2='0'%3E%3Cstop offset='0%25' stop-color='%23c49840ff' stop-opacity='0.1'/%3E%3Cstop offset='100%25' stop-color='%238d6e31ff' stop-opacity='0.1'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            animation: 'wave 10s linear infinite',
            '@keyframes wave': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            }
          }
        }}
      />
    </Box>
  );
};

export default Info;