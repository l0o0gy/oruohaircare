import React, { useState, useRef, useEffect } from "react";
import { 
  Box, 
  Typography, 
  IconButton, 
  Fade,
  Container,
  Chip,
  Skeleton
} from "@mui/material";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CollectionsIcon from '@mui/icons-material/Collections';
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const AutoScrollImages = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});
  const scrollRef = useRef(null);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    // Preload images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        background: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #111 100%)",
        py: { xs: 6, md: 10 },
        mt: 6,
      }}
    >
      {/* Decorative Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #c49840ff,
            #c49840ff 10px,
            transparent 10px,
            transparent 20px
          )`,
          pointerEvents: 'none',
        }}
      />

      {/* Section Header */}
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Box 
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              position: 'relative',
              zIndex: 3,
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, mb: 2 }}>
              <AutoAwesomeIcon 
                sx={{ 
                  color: '#c49840ff', 
                  fontSize: 32,
                  animation: 'sparkle 2s ease-in-out infinite',
                  '@keyframes sparkle': {
                    '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
                    '50%': { opacity: 1, transform: 'scale(1.2)' },
                  }
                }} 
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #c49840ff 0%, #D4AF37 50%, #8d6e31ff 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-1px',
                  textShadow: '0 0 40px rgba(196, 152, 64, 0.3)',
                }}
              >
                معرض المنتجات
              </Typography>
              <AutoAwesomeIcon 
                sx={{ 
                  color: '#c49840ff', 
                  fontSize: 32,
                  animation: 'sparkle 2s ease-in-out infinite',
                  animationDelay: '1s',
                }} 
              />
            </Box>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(245, 245, 245, 0.7)',
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 300,
                letterSpacing: '0.5px',
              }}
            >
              استعرض مجموعتنا الفاخرة من المنتجات عالية الجودة
            </Typography>

            {/* Gallery Stats */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
              <Chip
                icon={<CollectionsIcon />}
                label={`${images.length} منتج`}
                sx={{
                  background: 'rgba(196, 152, 64, 0.1)',
                  color: '#c49840ff',
                  border: '1px solid rgba(196, 152, 64, 0.3)',
                  fontWeight: 600,
                }}
              />
              <Chip
                label="جودة مضمونة 100%"
                sx={{
                  background: 'rgba(196, 152, 64, 0.1)',
                  color: '#c49840ff',
                  border: '1px solid rgba(196, 152, 64, 0.3)',
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>
        </Fade>
      </Container>

      {/* Gradient Overlays - Enhanced */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: "15%", md: "20%" },
          background: "linear-gradient(90deg, #111 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { xs: "15%", md: "20%" },
          background: "linear-gradient(270deg, #111 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Play/Pause Control */}
      <IconButton
        onClick={() => setIsPaused(!isPaused)}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 3,
          background: 'linear-gradient(135deg, #c49840ff, #8d6e31ff)',
          color: 'white',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(135deg, #8d6e31ff, #c49840ff)',
            transform: 'scale(1.1) rotate(180deg)',
            boxShadow: '0 8px 25px rgba(196, 152, 64, 0.4)',
          }
        }}
      >
        {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
      </IconButton>

      {/* Image Scroller Container */}
      <Box
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        sx={{
          display: "flex",
          width: "max-content",
          animation: isPaused ? 'none' : "scroll 50s linear infinite",
          '&:hover': {
            cursor: 'grab',
          }
        }}
      >
        {[...images, ...images].map((src, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              mx: { xs: 1.5, md: 2.5 },
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredIndex === index ? 'scale(1.08) translateY(-10px)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Loading Skeleton */}
            {!loadedImages[index] && (
              <Skeleton
                variant="rounded"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: { xs: 200, sm: 280, md: 350 },
                  width: { xs: 150, sm: 210, md: 260 },
                  borderRadius: '24px',
                  background: 'linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  '@keyframes shimmer': {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                  },
                }}
              />
            )}

            {/* Image Card */}
            <Box
              component="img"
              src={src}
              alt={`product-${index}`}
              onLoad={() => handleImageLoad(index)}
              sx={{
                height: { xs: 200, sm: 280, md: 350 },
                width: { xs: 150, sm: 210, md: 260 },
                objectFit: "cover",
                borderRadius: "24px",
                boxShadow: hoveredIndex === index 
                  ? "0 20px 40px rgba(196, 152, 64, 0.3)" 
                  : "0 10px 30px rgba(0,0,0,0.3)",
                border: hoveredIndex === index 
                  ? "3px solid rgba(196, 152, 64, 0.5)" 
                  : "3px solid rgba(255,255,255,0.1)",
                filter: hoveredIndex === index ? 'brightness(1.1)' : 'brightness(0.95)',
                opacity: loadedImages[index] ? 1 : 0,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />

            {/* Hover Overlay */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.8))',
                borderRadius: '0 0 24px 24px',
                opacity: hoveredIndex === index ? 1 : 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'flex-end',
                padding: 2,
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: '#c49840ff',
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  منتج مميز
                </Typography>
                <Box
                  sx={{
                    height: 2,
                    background: 'linear-gradient(90deg, #c49840ff, transparent)',
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Box>

            {/* Product Number Badge */}
            {hoveredIndex === index && (
              <Fade in>
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'linear-gradient(135deg, #c49840ff, #8d6e31ff)',
                    color: 'white',
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(196, 152, 64, 0.5)',
                  }}
                >
                  {(index % images.length) + 1}
                </Box>
              </Fade>
            )}
          </Box>
        ))}
      </Box>

      {/* Bottom Gradient Line */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, transparent, #c49840ff, transparent)',
          animation: 'glow 3s ease-in-out infinite',
          '@keyframes glow': {
            '0%, 100%': { opacity: 0.5 },
            '50%': { opacity: 1 },
          }
        }}
      />

      {/* CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

export default AutoScrollImages;