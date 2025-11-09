import React, { useState } from "react";
import { Box, Typography, Container, Paper, Fade, Zoom, Stack, Skeleton, Divider, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import img from "../assets/img/HowToUse.jpg";

const HowToUse = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const steps = [
    "يغسل الشعر مرتين بالشامبو.",
    "تجفيف الشعر 100%.",
    "يوزع المنتج على الشعر بالكامل مع ترك مسافة 0.5 سم من الجذور.",
    "يترك على الشعر لمدة ساعة واحدة فقط.",
    "تجفيف الشعر بالمجفف مع استخدام فرشاة مستقيمة.",
    "تمليس الشعر بمكواة الشعر في خصل رفيعة من 15 إلى 20 مرة لكل خصلة.",
    "ملاحظة: للشعر المصبوغ يغسل 50% من المادة بعد وضعها لمدة ساعة.",
    "يحافظ على عدم تساقط الشعر.",
    "آمن على الأطفال والحوامل.",
  ];

  return (
    <Box
      component="div"
      dir="rtl"
      sx={{
        background: "linear-gradient(180deg, #fff 0%, #faf7f2 50%, #fff 100%)",
        minHeight: "100vh",
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* خلفيات ذهبية ناعمة */}
      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,152,64,0.1) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <Container maxWidth="md">
        {/* الصورة */}
        <Fade in timeout={800}>
          <Box sx={{ position: "relative", mb: 6 }}>
            {!imageLoaded && (
              <Skeleton
                variant="rounded"
                sx={{
                  width: "100%",
                  height: 400,
                  borderRadius: 4,
                  background: "linear-gradient(90deg, #f0f0f0 25%, #fafafa 50%, #f0f0f0 75%)",
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
                height: "auto",
                borderRadius: 4,
                boxShadow: "0 15px 40px rgba(212,175,55,0.15)",
                border: "2px solid rgba(212,175,55,0.3)",
                display: imageLoaded ? "block" : "none",
                transition: "all 0.5s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 25px 50px rgba(212,175,55,0.25)",
                },
              }}
            />

            <Paper
              elevation={6}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                background: "linear-gradient(135deg, #D4AF37, #8B6D2F)",
                color: "white",
                px: 2,
                py: 1,
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <AutoAwesomeIcon />
              <Typography fontWeight="bold">طريقة الاستخدام</Typography>
            </Paper>
          </Box>
        </Fade>

        {/* العنوان */}
        <Fade in timeout={1000}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 4,
              textAlign: "right",
              background: "linear-gradient(135deg, #D4AF37 0%, #8B6D2F 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "26px", sm: "32px", md: "40px" },
            }}
          >
       طريقة استخدامORUO Nano Filler 
          </Typography>
        </Fade>

        <Divider sx={{ mb: 4, borderColor: "#D4AF37", opacity: 0.3 }} />

        {/* الخطوات */}
        <Stack spacing={3}>
          {steps.map((step, index) => (
            <Zoom in timeout={1100 + index * 100} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  border: "1px solid rgba(212,175,55,0.25)",
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.6)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "rgba(212,175,55,0.08)",
                    transform: "translateX(-5px)",
                    boxShadow: "0 10px 25px rgba(212,175,55,0.1)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    background: "linear-gradient(135deg, #D4AF37, #8B6D2F)",
                    color: "white",
                    width: 36,
                    height: 36,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </Avatar>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#333",
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    lineHeight: 1.8,
                  }}
                >
                  {step}
                </Typography>
              </Paper>
            </Zoom>
          ))}
        </Stack>

        {/* النتيجة النهائية */}
        <Fade in timeout={1500}>
          <Paper
            elevation={0}
            sx={{
              mt: 6,
              p: 3,
              background: "linear-gradient(90deg, #FFF8DC, #FAF0E6)",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: 4,
              textAlign: "center",
              boxShadow: "0 10px 25px rgba(212,175,55,0.15)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#8B6D2F",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                fontSize: { xs: "18px", sm: "22px", md: "26px" },
              }}
            >
              <CheckCircleIcon sx={{ color: "#D4AF37", fontSize: 28 }} />
              ✨ النتيجة: شعر ناعم، لامع، انسيابي، سهل التسريح، وصحي!
            </Typography>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default HowToUse;
