import React, { useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Fade,
  Zoom,
  Paper,
  Typography,
  Skeleton,
  Chip,
  Tooltip,
  Badge,
  Modal,
  Backdrop,
} from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import VerifiedIcon from '@mui/icons-material/Verified';
import ImageIcon from '@mui/icons-material/Image';
import TouchAppIcon from '@mui/icons-material/TouchApp';

function ProductDetails({ item }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
  };

  const handleMouseMove = (e) => {
    if (zoomLevel > 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setImagePosition({ x, y });
    }
  };

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
    setZoomLevel(1);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          dir: 'rtl',
          width: '100%',
          mb: 4,
          position: 'relative',
        }}
      >
        <Fade in timeout={1000}>
          <Card
            sx={{
              width: '100%',
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
              border: '3px solid rgba(196, 152, 64, 0.1)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                boxShadow: '0 20px 40px rgba(196, 152, 64, 0.2)',
                borderColor: 'rgba(196, 152, 64, 0.3)',
              },
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setImagePosition({ x: 50, y: 50 });
            }}
            onMouseMove={handleMouseMove}
          >
            {/* Top Badges */}
            <Box
              sx={{
                position: 'absolute',
                top: 20,
                left: 20,
                right: 20,
                display: 'flex',
                justifyContent: 'space-between',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            >
              {/* Left Badges */}
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {item.isNew && (
                  <Zoom in timeout={1200}>
                    <Chip
                      icon={<StarIcon />}
                      label="جديد"
                      size="medium"
                      sx={{
                        background: 'linear-gradient(135deg, #c49840ff, #8d6e31ff)',
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(196, 152, 64, 0.4)',
                        animation: 'pulse 2s infinite',
                        '@keyframes pulse': {
                          '0%': { transform: 'scale(1)' },
                          '50%': { transform: 'scale(1.05)' },
                          '100%': { transform: 'scale(1)' },
                        }
                      }}
                    />
                  </Zoom>
                )}
                {item.discount && (
                  <Zoom in timeout={1300}>
                    <Chip
                      icon={<LocalOfferIcon />}
                      label={`خصم ${item.discount}%`}
                      size="medium"
                      sx={{
                        background: 'linear-gradient(135deg, #ff5252, #ff1744)',
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(255, 23, 68, 0.4)',
                      }}
                    />
                  </Zoom>
                )}
                {item.verified && (
                  <Zoom in timeout={1400}>
                    <Chip
                      icon={<VerifiedIcon />}
                      label="أصلي"
                      size="medium"
                      sx={{
                        background: 'linear-gradient(135deg, #4caf50, #2e7d32)',
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
                      }}
                    />
                  </Zoom>
                )}
              </Box>

              {/* Right Badge - Premium */}
              {item.premium && (
                <Zoom in timeout={1500}>
                  <Paper
                    elevation={6}
                    sx={{
                      background: 'linear-gradient(135deg, #D4AF37, #8B6D2F)',
                      color: 'white',
                      px: 2,
                      py: 1,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <StarIcon />
                    <Typography fontWeight="bold">Premium</Typography>
                  </Paper>
                </Zoom>
              )}
            </Box>

            {/* Loading Skeleton */}
            {!imageLoaded && (
              <Skeleton
                variant="rectangular"
                sx={{
                  width: '100%',
                  height: 600,
                  background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s infinite',
                  '@keyframes shimmer': {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                  },
                }}
              />
            )}

            {/* Product Image */}
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: 'auto',
                position: 'relative',
                cursor: zoomLevel > 1 ? 'move' : 'zoom-in',
                background: 'white',
              }}
            >
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                onLoad={() => setImageLoaded(true)}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: zoomLevel > 1 ? `${imagePosition.x}% ${imagePosition.y}%` : 'center',
                  transition: zoomLevel === 1 ? 'transform 0.3s ease' : 'none',
                  display: imageLoaded ? 'block' : 'none',
                  filter: imageLoaded ? 'none' : 'blur(20px)',
                }}
              />
            </Box>

            {/* Hover Instruction */}
            {isHovering && zoomLevel === 1 && (
              <Fade in>
                <Paper
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(10px)',
                    color: 'white',
                    px: 2,
                    py: 1,
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <TouchAppIcon sx={{ fontSize: 20 }} />
                  <Typography variant="caption">انقر للتكبير</Typography>
                </Paper>
              </Fade>
            )}

            {/* Control Buttons */}
            <Fade in={isHovering}>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  display: 'flex',
                  gap: 1,
                  pointerEvents: isHovering ? 'auto' : 'none',
                }}
              >
                <Tooltip title="تكبير" placement="top">
                  <IconButton
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      color: '#c49840ff',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        background: 'white',
                        transform: 'scale(1.1)',
                      },
                      '&:disabled': {
                        opacity: 0.5,
                      },
                    }}
                  >
                    <ZoomInIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="تصغير" placement="top">
                  <IconButton
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      color: '#c49840ff',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        background: 'white',
                        transform: 'scale(1.1)',
                      },
                      '&:disabled': {
                        opacity: 0.5,
                      },
                    }}
                  >
                    <ZoomOutIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="عرض ملء الشاشة" placement="top">
                  <IconButton
                    onClick={handleFullscreenToggle}
                    sx={{
                      background: 'linear-gradient(135deg, #c49840ff, #8d6e31ff)',
                      color: 'white',
                      boxShadow: '0 4px 15px rgba(196, 152, 64, 0.4)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #8d6e31ff, #c49840ff)',
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    <FullscreenIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Fade>

            {/* Zoom Level Indicator */}
            {zoomLevel > 1 && (
              <Fade in>
                <Chip
                  label={`${Math.round(zoomLevel * 100)}%`}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                />
              </Fade>
            )}
          </Card>
        </Fade>

        {/* Product Info Overlay */}
        {item.quickInfo && (
          <Zoom in timeout={1600}>
            <Paper
              elevation={6}
              sx={{
                position: 'absolute',
                bottom: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'white',
                borderRadius: 50,
                px: 3,
                py: 1.5,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                border: '2px solid rgba(196, 152, 64, 0.2)',
              }}
            >
              <InfoIcon sx={{ color: '#c49840ff' }} />
              <Typography variant="body2" fontWeight={600}>
                {item.quickInfo}
              </Typography>
            </Paper>
          </Zoom>
        )}
      </Box>

      {/* Fullscreen Modal */}
      <Modal
        open={isFullscreen}
        onClose={handleFullscreenToggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          sx: {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
          }
        }}
      >
        <Fade in={isFullscreen}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90vw',
              height: '90vh',
              outline: 'none',
            }}
          >
            <IconButton
              onClick={handleFullscreenToggle}
              sx={{
                position: 'absolute',
                top: 20,
                right: 20,
                zIndex: 10,
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.3)',
                  transform: 'rotate(90deg)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <CloseIcon />
            </IconButton>
            
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  borderRadius: '8px',
                }}
              />
            </Box>

            {/* Fullscreen Title */}
            {item.title && (
              <Typography
                variant="h5"
                sx={{
                  position: 'absolute',
                  bottom: 40,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'white',
                  fontWeight: 600,
                  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                  background: 'linear-gradient(135deg, #c49840ff, #8d6e31ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {item.title}
              </Typography>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default ProductDetails;