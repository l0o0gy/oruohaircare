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
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CollectionsIcon from "@mui/icons-material/Collections";

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
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
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
        background: "linear-gradient(135deg, #ffffff 0%, #faf7f2 50%, #f5f1eb 100%)",
        py: { xs: 6, md: 10 },
        mt: 0,
      }}
    >
      {/* Subtle Background Pattern */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #d9c79b,
            #d9c79b 10px,
            transparent 10px,
            transparent 20px
          )`,
          pointerEvents: "none",
        }}
      />

      {/* Section Header */}
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Box sx={{ textAlign: "center", mb: 6, position: "relative", zIndex: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <AutoAwesomeIcon
                sx={{
                  color: "#b3913cff",
                  fontSize: 32,
                  animation: "sparkle 2s ease-in-out infinite",
                  "@keyframes sparkle": {
                    "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
                    "50%": { opacity: 1, transform: "scale(1.2)" },
                  },
                }}
              />
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #b3913cff 0%, #d1a63fff 50%, #a37c2fff 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-1px",
                  textShadow: "0 0 15px rgba(179,145,60,0.2)",
                }}
              >
                نتائج منتجاتنا
              </Typography>
              <AutoAwesomeIcon
                sx={{
                  color: "#b3913cff",
                  fontSize: 32,
                  animation: "sparkle 2s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              />
            </Box>

            <Typography
              variant="h6"
              sx={{
                color: "rgba(60,60,60,0.8)",
                maxWidth: "600px",
                mx: "auto",
                fontWeight: 400,
                letterSpacing: "0.5px",
              }}
            >
شاهدوا الفرق المذهل قبل وبعد استخدام مسرح الشعر  الخاص بنا               </Typography>

            {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
              <Chip
                icon={<CollectionsIcon />}
                label={`${images.length} منتج`}
                sx={{
                  background: "rgba(179,145,60,0.08)",
                  color: "#a37c2fff",
                  border: "1px solid rgba(179,145,60,0.3)",
                  fontWeight: 600,
                }}
              />
              <Chip
                label="جودة مضمونة 100%"
                sx={{
                  background: "rgba(179,145,60,0.08)",
                  color: "#a37c2fff",
                  border: "1px solid rgba(179,145,60,0.3)",
                  fontWeight: 600,
                }}
              />
            </Box> */}
          </Box>
        </Fade>
      </Container>

      {/* Light Gradients on Sides */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: { xs: "15%", md: "20%" },
          background: "linear-gradient(90deg, #fff 0%, transparent 100%)",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: { xs: "15%", md: "20%" },
          background: "linear-gradient(270deg, #fff 0%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Play/Pause Button */}
      <IconButton
        onClick={() => setIsPaused(!isPaused)}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 3,
          background: "linear-gradient(135deg, #d1a63fff, #b3913cff)",
          color: "white",
          border: "2px solid rgba(255,255,255,0.5)",
          backdropFilter: "blur(8px)",
          transition: "all 0.3s ease",
          "&:hover": {
            background: "linear-gradient(135deg, #b3913cff, #d1a63fff)",
            transform: "scale(1.1) rotate(180deg)",
            boxShadow: "0 8px 25px rgba(179,145,60,0.4)",
          },
        }}
      >
        {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
      </IconButton>

      {/* Image Scroller */}
      <Box
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        sx={{
          display: "flex",
          width: "max-content",
          animation: isPaused ? "none" : "scroll 50s linear infinite",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              mx: { xs: 1.5, md: 2.5 },
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredIndex === index ? "scale(1.07) translateY(-10px)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {!loadedImages[index] && (
              <Skeleton
                variant="rounded"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: { xs: 200, sm: 280, md: 350 },
                  width: { xs: 150, sm: 210, md: 260 },
                  borderRadius: "24px",
                  background: "linear-gradient(90deg, #f0ede8 25%, #f9f7f3 50%, #f0ede8 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                  "@keyframes shimmer": {
                    "0%": { backgroundPosition: "200% 0" },
                    "100%": { backgroundPosition: "-200% 0" },
                  },
                }}
              />
            )}

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
                boxShadow:
                  hoveredIndex === index
                    ? "0 20px 40px rgba(179,145,60,0.25)"
                    : "0 8px 25px rgba(0,0,0,0.1)",
                border:
                  hoveredIndex === index
                    ? "2px solid rgba(179,145,60,0.4)"
                    : "2px solid rgba(0,0,0,0.05)",
                filter: hoveredIndex === index ? "brightness(1.08)" : "brightness(1)",
                opacity: loadedImages[index] ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />

            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.7))",
                borderRadius: "0 0 24px 24px",
                opacity: hoveredIndex === index ? 1 : 0,
                transition: "opacity 0.3s ease",
                display: "flex",
                alignItems: "flex-end",
                padding: 2,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#a37c2fff",
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  منتج مميز
                </Typography>
                <Box
                  sx={{
                    height: 2,
                    background: "linear-gradient(90deg, #b3913cff, transparent)",
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Bottom Glow Line */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #b3913cff, transparent)",
          animation: "glow 3s ease-in-out infinite",
          "@keyframes glow": {
            "0%, 100%": { opacity: 0.4 },
            "50%": { opacity: 1 },
          },
        }}
      />

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
