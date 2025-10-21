import React from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
  Grid,
  Paper,
  Container,
  Fade,
  Zoom,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Footer({ item }) {
  const handleWhatsAppClick = (number) => {
    window.open(`https://wa.me/${number}`, '_blank');
  };

  const socialIcons = {
    instagram: { icon: InstagramIcon, color: '#E1306C' },
    facebook: { icon: FacebookIcon, color: '#1877F2' },
    tiktok: { icon: MusicNoteIcon, color: '#000' },
  };

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #111 100%)',
        color: '#f5f5f5',
        pt: 10,
        pb: 3,
        mt: 6,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #D4AF37, #16423c, #D4AF37)',
          animation: 'shimmer 3s ease-in-out infinite',
        },
        '@keyframes shimmer': {
          '0%': { opacity: 0.6 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.6 },
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Main Content Grid */}
        <Grid container spacing={6}>
          {/* WhatsApp Contact Section */}
          <Grid item xs={12} lg={5}>
            <Fade in timeout={1000}>
              <Paper
                elevation={0}
                sx={{
                  background: 'linear-gradient(145deg, #16423c, #1b4d45)',
                  borderRadius: 4,
                  p: 4,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -50,
                    right: -50,
                    width: 150,
                    height: 150,
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 55, 0.1)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <WhatsAppIcon sx={{ fontSize: 40, color: '#D4AF37', mr: 2 }} />
                  <Typography
                    variant="h5"
                    sx={{ 
                      fontWeight: 700, 
                      color: '#D4AF37',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    تواصل معنا مباشرة
                  </Typography>
                </Box>

                <Stack spacing={2.5}>
                  {/* ORUO WhatsApp */}
                  <Box
                    onClick={() => handleWhatsAppClick('9647757766266')}
                    sx={{
                      background: 'linear-gradient(135deg, #128C7E, #0d6e62)',
                      borderRadius: 3,
                      p: 2,
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-3px) scale(1.02)',
                        boxShadow: '0 8px 20px rgba(18, 140, 126, 0.4)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 0,
                        height: 0,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        transform: 'translate(-50%, -50%)',
                        transition: 'width 0.6s, height 0.6s',
                      },
                      '&:hover::before': {
                        width: 300,
                        height: 300,
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <WhatsAppIcon sx={{ fontSize: 32, color: 'white' }} />
                      <Box>
                        <Typography 
                          sx={{ 
                            fontWeight: 600, 
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.9)' 
                          }}
                        >
                          ORUO
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                          +964 775 776 6266
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>

                  {/* PV Cosmetic WhatsApp */}
                  <Box
                    onClick={() => handleWhatsAppClick('9647757528910')}
                    sx={{
                      background: 'linear-gradient(135deg, #128C7E, #0d6e62)',
                      borderRadius: 3,
                      p: 2,
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-3px) scale(1.02)',
                        boxShadow: '0 8px 20px rgba(18, 140, 126, 0.4)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 0,
                        height: 0,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        transform: 'translate(-50%, -50%)',
                        transition: 'width 0.6s, height 0.6s',
                      },
                      '&:hover::before': {
                        width: 300,
                        height: 300,
                      },
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <WhatsAppIcon sx={{ fontSize: 32, color: 'white' }} />
                      <Box>
                        <Typography 
                          sx={{ 
                            fontWeight: 600, 
                            fontSize: '0.9rem',
                            color: 'rgba(255,255,255,0.9)' 
                          }}
                        >
                          PV Cosmetic
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                          +964 775 752 8910
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Paper>
            </Fade>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} lg={7}>
            <Grid container spacing={4} height="100%">
              {/* Company Info */}
              <Grid item xs={12}>
                <Fade in timeout={1200}>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#D4AF37',
                        mb: 3,
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: 0,
                          width: '50px',
                          height: '3px',
                          background: 'linear-gradient(90deg, #D4AF37, transparent)',
                        },
                      }}
                    >
                      من نحن
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.9,
                        color: 'rgba(245,245,245,0.85)',
                        direction: 'rtl',
                        textAlign: 'right',
                        fontSize: '1.05rem',
                      }}
                    >
                      نحن في <strong style={{ color: '#D4AF37' }}>PV Cosmetic</strong> و
                      <strong style={{ color: '#D4AF37' }}> ORUO</strong> نسعى لتقديم أفضل 
                      المنتجات والخدمات لعملائنا. نفخر بتقديم منتجات عالية الجودة مع خدمة 
                      عملاء استثنائية، ونسعد دائماً بالتواصل معكم عبر قنواتنا الرسمية.
                    </Typography>
                  </Box>
                </Fade>
              </Grid>

              {/* Social Media Section */}
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  {/* ORUO Social */}
                  <Grid item xs={12} sm={6}>
                    <Zoom in timeout={1400}>
                      <Paper
                        elevation={0}
                        sx={{
                          background: 'rgba(22, 66, 60, 0.2)',
                          borderRadius: 3,
                          p: 3,
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(22, 66, 60, 0.3)',
                            borderColor: 'rgba(212, 175, 55, 0.4)',
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 'bold',
                            color: '#D4AF37',
                            mb: 2,
                            textAlign: 'center',
                          }}
                        >
                          ORUO
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent="center">
                          {item?.agents?.[1] && (
                            <IconButton
                              onClick={() => window.open(item.agents[1].link, '_blank')}
                              sx={{
                                background: 'rgba(255,255,255,0.05)',
                                color: '#f5f5f5',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #E1306C, #F77737)',
                                  transform: 'scale(1.15) rotate(-5deg)',
                                  color: 'white',
                                },
                              }}
                            >
                              <InstagramIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                          )}
                          {item?.agentstick?.[0] && (
                            <IconButton
                              onClick={() => window.open(item.agentstick[0].link, '_blank')}
                              sx={{
                                background: 'rgba(255,255,255,0.05)',
                                color: '#f5f5f5',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #000, #333)',
                                  transform: 'scale(1.15) rotate(5deg)',
                                  color: 'white',
                                },
                              }}
                            >
                              <MusicNoteIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                          )}
                          {item?.agentsfac?.[1] && (
                            <IconButton
                              onClick={() => window.open(item.agentsfac[1].link, '_blank')}
                              sx={{
                                background: 'rgba(255,255,255,0.05)',
                                color: '#f5f5f5',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #1877F2, #4267B2)',
                                  transform: 'scale(1.15) rotate(-5deg)',
                                  color: 'white',
                                },
                              }}
                            >
                              <FacebookIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                          )}
                        </Stack>
                      </Paper>
                    </Zoom>
                  </Grid>

                  {/* PV Cosmetic Social */}
                  <Grid item xs={12} sm={6}>
                    <Zoom in timeout={1600}>
                      <Paper
                        elevation={0}
                        sx={{
                          background: 'rgba(22, 66, 60, 0.2)',
                          borderRadius: 3,
                          p: 3,
                          border: '1px solid rgba(212, 175, 55, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(22, 66, 60, 0.3)',
                            borderColor: 'rgba(212, 175, 55, 0.4)',
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 'bold',
                            color: '#D4AF37',
                            mb: 2,
                            textAlign: 'center',
                          }}
                        >
                          PV Cosmetic
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent="center">
                          {item?.agents?.[0] && (
                            <IconButton
                              onClick={() => window.open(item.agents[0].link, '_blank')}
                              sx={{
                                background: 'rgba(255,255,255,0.05)',
                                color: '#f5f5f5',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #E1306C, #F77737)',
                                  transform: 'scale(1.15) rotate(-5deg)',
                                  color: 'white',
                                },
                              }}
                            >
                              <InstagramIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                          )}
                          {item?.agentsfac?.[0] && (
                            <IconButton
                              onClick={() => window.open(item.agentsfac[0].link, '_blank')}
                              sx={{
                                background: 'rgba(255,255,255,0.05)',
                                color: '#f5f5f5',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                  background: 'linear-gradient(135deg, #1877F2, #4267B2)',
                                  transform: 'scale(1.15) rotate(5deg)',
                                  color: 'white',
                                },
                              }}
                            >
                              <FacebookIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                          )}
                        </Stack>
                      </Paper>
                    </Zoom>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Decorative Divider */}
        <Box
          sx={{
            my: 6,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              background: '#111',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            '&::after': {
              content: '"★"',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#D4AF37',
              fontSize: '24px',
            },
          }}
        />

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              opacity: 0.7,
              fontSize: '0.9rem',
              letterSpacing: '1px',
            }}
          >
            © {new Date().getFullYear()}{' '}
            <Box
              component="span"
              sx={{
                color: '#D4AF37',
                fontWeight: 600,
              }}
            >
              PV Cosmetic & ORUO
            </Box>{' '}
            | جميع الحقوق محفوظة
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 1,
              opacity: 0.5,
              fontSize: '0.75rem',
            }}
          >
            Made with ❤️ in Iraq
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;