import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import img from "../assets/img/op.jpg";

const AboutAbd = () => {
  return (
    <Box
      component="div"
      dir="rtl"
      sx={{
        // background: "linear-gradient(180deg, #fffaf0 0%, #fdf5e6 100%)",
        minHeight: "100vh",
        py: 1,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Container maxWidth="md">
        {/* Image */}
        <Box
          component="img"
          src={img}
          alt="ORUO Nano Filter"
          sx={{
  width: "100%", 
  borderRadius: 3,
  mb: 5,
  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.02)",
  },
}}
        />

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: "right",
            color: "#8B6D2F",
            borderRight: "6px solid #D4AF37",
            pr: 2,
            py: 1,
            borderRadius: "4px 0 0 4px",
            fontSize: {
              xs: "16px",  
              sm: "20px",  
              md: "24px",  
              lg: "28px",  
              xl: "32px",  
            },
          }}
        >
          علاج الشعر ORUO Nano Filter – الجمال يبدأ من خصلات ناعمة
        </Typography>

        <Divider sx={{ mb: 4, borderColor: "#D4AF37", opacity: 0.3 }} />

        {/* Paragraphs */}
        <Box
          component="div"
          sx={{
            // color: "#5A4632",
            fontSize: "1.05rem",
            lineHeight: 2.2,
            textAlign: "right",
            mb: 3,
            fontSize: {
              xs: "16px",  
              sm: "20px",  
              md: "24px",  
              lg: "28px",  
              xl: "32px",  
            },
          }}
        >
          <Typography variant="body1" sx={{ mb: 2 }}>
            امنحي شعرك تجربة فاخرة لا مثيل لها مع ORUO Nano Filter، العلاج الاحترافي المصمّم خصيصًا ليعيد لشعرك نعومته ولمعانه الطبيعي، ويقضي على النفشة والهيشان من أول استخدام.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            بفضل تقنية Nano Filter المتطورة، يتغلغل المنتج بعمق داخل ألياف الشعر ليعالج التلف من الداخل، ويرطّب كل خصلة دون أن يثقلها.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            تركيبته الغنية بمزيج من زيت الأركان وزيت الماكاداميا والبروتين تمنح الشعر تغذية مكثّفة، ليصبح أكثر مرونة ولمعانًا وانسيابية من أي وقت مضى.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            ولا داعي للقلق، فـ ORUO Nano Filter خالٍ تمامًا من الفورمالين والمواد الضارة — مما يجعله آمنًا للاستخدام، حتى على الشعر المصبوغ أو الحساس.
          </Typography>
        </Box>

        {/* Highlights */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            mt: 3,
            mb: 2,
            textAlign: "right",
            color: "#8B6D2F",
            background: "linear-gradient(90deg, #FFF8DC, #FAF0E6)",
            p: 2,
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            fontSize: {
              xs: "16px",  
              sm: "20px",  
              md: "24px",  
              lg: "28px",  
              xl: "32px",  
            },
          }}
        >
          💛 لماذا تختارين ORUO Nano Filter؟
        </Typography>

        <Box
          component="ul"
          sx={{
            paddingRight: 3,
            textAlign: "right",
            marginBottom: 3,
            lineHeight: 2.2,
            // color: "#5A4632",
            fontSize: "1.05rem",
            listStyleType: "decimal",
            fontSize: {
              xs: "16px",  
              sm: "20px",  
              md: "24px",  
              lg: "28px",  
              xl: "32px",  
            },
          }}
        >
          <li>لأنك تستحقين شعراً ناعماً دون نفشة أو تجعّد.</li>
          <li>لأن النتيجة فورية وتدوم طويلاً.</li>
          <li>لأنه منتج آمن ومغذٍ يعالج الشعر من الجذور حتى الأطراف.</li>
          <li>بخطوة واحدة فقط، يمنحك شعور الصالون في منزلك.</li>
        </Box>

        {/* Result Note */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            textAlign: "right",
            mt: 4,
            color: "#8B6D2F",
            background: "linear-gradient(90deg, #FFF8DC, #FAF0E6)",
            p: 2,
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            fontSize: {
              xs: "16px",  
              sm: "20px",  
              md: "24px",  
              lg: "28px",  
              xl: "32px",  
            },
          }}
        >
          ✨ النتيجة: شعر ناعم، لامع، انسيابي، سهل التسريح... ينبض بالحياة!
        </Typography>
      </Container>
    </Box>
  );
};

export default AboutAbd;
