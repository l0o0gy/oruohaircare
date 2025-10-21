import React, { useState } from "react";
import { 
  Box, Typography, Container, Paper, Fade, Zoom, Grid, Chip, Avatar, Stack, Skeleton 
} from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShieldIcon from '@mui/icons-material/Shield';
import StarIcon from '@mui/icons-material/Star';
import SpaIcon from '@mui/icons-material/Spa';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import img from "../assets/img/op.jpg";

const AboutAbd = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const features = [
    { icon: <SpaIcon />, title: "تقنية Nano Filter", desc: "تغلغل عميق لعلاج الشعر من الداخل" },
    { icon: <WaterDropIcon />, title: "زيت الأركان", desc: "ترطيب فائق ولمعان طبيعي" },
    { icon: <LocalFloristIcon />, title: "زيت الماكاداميا", desc: "تغذية مكثفة وحماية من التلف" },
    { icon: <ShieldIcon />, title: "آمن تماماً", desc: "خالي من الفورمالين والمواد الضارة" },
  ];

  const benefits = [
    "لأنك تستحقين شعراً ناعماً دون نفشة أو تجعّد",
    "لأن النتيجة فورية وتدوم طويلاً",
    "لأنه منتج آمن ومغذٍ يعالج الشعر من الجذور حتى الأطراف",
    "بخطوة واحدة فقط، يمنحك شعور الصالون في منزلك"
  ];

  return (
    <Box
      component="div"
      dir="rtl"
      sx={{
        background: "linear-gradient(180deg, #fff 0%, #faf7f2 50%, #fff 100%)", // ✅ خلفية بيضاء راقية
        minHeight: "100vh",
        py: 6,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* خلفيات زخرفية ذهبية */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196, 152, 64, 0.1) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* صورة المنتج + المميزات */}
          <Grid item xs={12} md={5}>
            <Fade in timeout={1000}>
              <Box sx={{ position: 'sticky', top: 20 }}>
                <Box sx={{ position: 'relative', mb: 4 }}>
                  {!imageLoaded && (
                    <Skeleton
                      variant="rounded"
                      sx={{
                        width: '100%',
                        height: 400,
                        borderRadius: 4,
                        background: 'linear-gradient(90deg, #f0f0f0 25%, #fafafa 50%, #f0f0f0 75%)',
                      }}
                    />
                  )}
                  <Box
                    component="img"
                    src={img}
                    alt="ORUO Nano Filter"
                    onLoad={() => setImageLoaded(true)}
                    sx={{
                      width: "100%",
                      height: 'auto',
                      borderRadius: 4,
                      boxShadow: "0 15px 40px rgba(212, 175, 55, 0.15)",
                      border: '2px solid rgba(212, 175, 55, 0.3)',
                      display: imageLoaded ? 'block' : 'none',
                      transition: "all 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.02)",
                        boxShadow: "0 20px 50px rgba(212, 175, 55, 0.3)",
                      },
                    }}
                  />
                  
                  <Paper
                    elevation={6}
                    sx={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
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
                    <Typography fontWeight="bold">منتج مميز</Typography>
                  </Paper>
                </Box>

                <Grid container spacing={2}>
                  {features.map((feature, index) => (
                    <Grid item xs={6} key={index}>
                      <Zoom in timeout={1200 + index * 100}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            background: 'rgba(212, 175, 55, 0.05)',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            borderRadius: 3,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: 'rgba(212, 175, 55, 0.1)',
                              transform: 'translateY(-3px)',
                              boxShadow: '0 10px 25px rgba(212, 175, 55, 0.15)',
                            },
                          }}
                        >
                          <Avatar
                            sx={{
                              background: 'linear-gradient(135deg, #D4AF37, #8B6D2F)',
                              mb: 1,
                              width: 40,
                              height: 40,
                            }}
                          >
                            {feature.icon}
                          </Avatar>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#8B6D2F', mb: 0.5 }}>
                            {feature.title}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#555' }}>
                            {feature.desc}
                          </Typography>
                        </Paper>
                      </Zoom>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>

          {/* النصوص */}
          <Grid item xs={12} md={7}>
            <Fade in timeout={800}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    textAlign: "right",
                    background: 'linear-gradient(135deg, #D4AF37 0%, #8B6D2F 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: { xs: "28px", sm: "36px", md: "44px" },
                    lineHeight: 1.3,
                  }}
                >
                  علاج الشعر ORUO Nano Filter
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: '#555',
                    fontWeight: 400,
                    fontSize: { xs: "18px", sm: "22px", md: "24px" },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    justifyContent: 'flex-end',
                  }}
                >
                  الجمال يبدأ من خصلات ناعمة
                  <AutoAwesomeIcon sx={{ color: '#D4AF37' }} />
                </Typography>
              </Box>
            </Fade>

            <Box
              sx={{
                color: "#333",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                lineHeight: 2,
                textAlign: "justify",
                mb: 4,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  background: 'rgba(212, 175, 55, 0.05)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: 3,
                  borderRight: '4px solid #D4AF37',
                }}
              >
                <Typography variant="body1" sx={{ mb: 2 }}>
                  امنحي شعرك تجربة فاخرة لا مثيل لها مع <strong style={{ color: '#8B6D2F' }}>ORUO Nano Filter</strong>،
                  العلاج الاحترافي الذي يعيد لشعرك نعومته ولمعانه الطبيعي من أول استخدام.
                </Typography>
              </Paper>

              <Typography variant="body1" sx={{ mb: 3 }}>
                بفضل تقنية <Chip label="Nano Filter" size="small" sx={{ background: '#D4AF37', color: 'white', fontWeight: 'bold', mx: 1 }}/> 
                المتطورة، يتغلغل المنتج بعمق داخل ألياف الشعر ليعالج التلف من الداخل ويرطب كل خصلة بلطف.
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                تركيبته الغنية بزيت الأركان وزيت الماكاداميا والبروتين تمنح الشعر تغذية مكثفة ومرونة ولمعان استثنائي.
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  background: 'rgba(255, 247, 230, 0.4)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <ShieldIcon sx={{ color: '#D4AF37', fontSize: 32 }} />
                <Typography variant="body1">
                  خالٍ تمامًا من الفورمالين والمواد الضارة — آمن على جميع أنواع الشعر حتى المصبوغ.
                </Typography>
              </Paper>
            </Box>

            {/* الفوائد */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 4,
                background: 'rgba(212, 175, 55, 0.05)',
                border: '2px solid rgba(212, 175, 55, 0.2)',
                borderRadius: 4,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  textAlign: "center",
                  color: "#8B6D2F",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <FavoriteIcon sx={{ fontSize: 32 }} />
                لماذا تختارين ORUO Nano Filter؟
              </Typography>

              <Stack spacing={2}>
                {benefits.map((benefit, index) => (
                  <Zoom in timeout={1400 + index * 100} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        background: 'rgba(255,255,255,0.5)',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(212, 175, 55, 0.1)',
                          transform: 'translateX(-5px)',
                        }
                      }}
                    >
                      <Avatar
                        sx={{
                          background: 'linear-gradient(135deg, #D4AF37, #8B6D2F)',
                          width: 32,
                          height: 32,
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        {index + 1}
                      </Avatar>
                      <Typography sx={{ color: '#333', fontSize: { xs: '16px', md: '18px' } }}>
                        {benefit}
                      </Typography>
                    </Box>
                  </Zoom>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutAbd;
