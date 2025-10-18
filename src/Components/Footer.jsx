import React from 'react';
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
  Grid,
  Paper,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // TikTok
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer({ item }) {
  const handleWhatsAppClick = (number) => {
    window.open(`https://wa.me/${number}?`, '_blank');
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111',
        color: '#f5f5f5',
        pt: 8,
        pb: 4,
        px: { xs: 3, md: 10 },
        mt: 6,
      }}
    >
      {/* WhatsApp Section */}
      <Paper
        elevation={6}
        sx={{
          background: 'linear-gradient(135deg, #16423c 20%, #1b4d45 90%)',
          borderRadius: 3,
          p: { xs: 3, md: 6 },
          mb: 8,
          color: 'white',
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 3, color: '#D4AF37' }}
            >
              تواصل معنا عبر الواتساب
            </Typography>

            {/* ORUO */}
            <Box sx={{ mb: 3 }}>
              <Typography sx={{ mb: 1, fontWeight: 600 }}>ORUO</Typography>
              <Box
                onClick={() => handleWhatsAppClick('9647757766266')}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#128C7E',
                  color: 'white',
                  borderRadius: 2,
                  p: 1.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#0d6e62',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 30, mr: 2 }} />
                <Typography>+964 775 776 6266</Typography>
              </Box>
            </Box>

            {/* PV Cosmetic */}
            <Box>
              <Typography sx={{ mb: 1, fontWeight: 600 }}>PV Cosmetic</Typography>
              <Box
                onClick={() => handleWhatsAppClick('9647757528910')}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#128C7E',
                  color: 'white',
                  borderRadius: 2,
                  p: 1.5,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#0d6e62',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 30, mr: 2 }} />
                <Typography>+964 775 752 8910</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Description */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#f0f0f0' }}>
              نحن في <strong>PV Cosmetic</strong> و<strong>ORUO</strong> نسعى لتقديم أفضل الخدمات لعملائنا،
              ونسعد دائماً بالتواصل معكم عبر قنواتنا الرسمية للحصول على الدعم والمساعدة الفورية.
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Divider */}
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 6 }} />

      {/* Social Media Section */}
      <Grid container spacing={6} justifyContent="center">
        {/* ORUO */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#D4AF37', mb: 2 }}
          >
            ORUO
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            {item.agents && item.agents[1] && (
              <IconButton
                onClick={() => window.open(item.agents[1].link, '_blank')}
                sx={{
                  color: '#f5f5f5',
                  transition: 'all 0.3s ease',
                  '&:hover': { color: '#E1306C', transform: 'scale(1.2)' },
                }}
              >
                <InstagramIcon sx={{ fontSize: 36 }} />
              </IconButton>
            )}
            {item.agentstick && item.agentstick[0] && (
              <IconButton
                onClick={() => window.open(item.agentstick[0].link, '_blank')}
                sx={{
                  color: '#f5f5f5',
                  transition: 'all 0.3s ease',
                  '&:hover': { color: '#000', transform: 'scale(1.2)' },
                }}
              >
                <MusicNoteIcon sx={{ fontSize: 36 }} />
              </IconButton>
            )}
            {item.agentsfac && item.agentsfac[1] && (
              <IconButton
                onClick={() => window.open(item.agentsfac[1].link, '_blank')}
                sx={{
                  color: '#f5f5f5',
                  transition: 'all 0.3s ease',
                  '&:hover': { color: '#1877F2', transform: 'scale(1.2)' },
                }}
              >
                <FacebookIcon sx={{ fontSize: 36 }} />
              </IconButton>
            )}
          </Stack>
        </Grid>

        {/* PV Cosmetic */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#D4AF37', mb: 2 }}
          >
            PV Cosmetic
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center">
            {item.agents && item.agents[0] && (
              <IconButton
                onClick={() => window.open(item.agents[0].link, '_blank')}
                sx={{
                  color: '#f5f5f5',
                  transition: 'all 0.3s ease',
                  '&:hover': { color: '#E1306C', transform: 'scale(1.2)' },
                }}
              >
                <InstagramIcon sx={{ fontSize: 36 }} />
              </IconButton>
            )}
            {item.agentsfac && item.agentsfac[0] && (
              <IconButton
                onClick={() => window.open(item.agentsfac[0].link, '_blank')}
                sx={{
                  color: '#f5f5f5',
                  transition: 'all 0.3s ease',
                  '&:hover': { color: '#1877F2', transform: 'scale(1.2)' },
                }}
              >
                <FacebookIcon sx={{ fontSize: 36 }} />
              </IconButton>
            )}
          </Stack>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Typography
        variant="body2"
        sx={{ opacity: 0.6, textAlign: 'center', mt: 8 }}
      >
        © {new Date().getFullYear()} <strong>PV Cosmetic & ORUO</strong> | All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;
