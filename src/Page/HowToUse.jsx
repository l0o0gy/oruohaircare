import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import img from "../assets/img/HowToUse.jpg"; 

const HowToUse = () => {
  return (
    <Box
      component="div"
      dir="rtl"
      sx={{
        background: "linear-gradient(180deg, #fffaf0 0%, #fdf5e6 100%)", 
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
            color: "#8B6D2F", // لون ذهبي داكن للعنوان
            borderRight: "6px solid #D4AF37", // خط ذهبي خفيف
            pr: 2,
            py: 1,
            borderRadius: "4px 0 0 4px",
          }}
        >
          طريقة استخدام ORUO Nano Filter
        </Typography>

        <Divider sx={{ mb: 4, borderColor: "#D4AF37", opacity: 0.3 }} />

        {/* Steps */}
        <Box component="ul" sx={{ 
          paddingRight: 3, 
          textAlign: "right", 
          marginBottom: 3, 
          lineHeight: 2.2,
          color: "#5A4632",
          fontSize: "1.05rem",
          listStyleType: "decimal",
        }}>
          <li>يغسل الشعر مرتين بالشامبو.</li>
          <li>تجفيف الشعر 100%.</li>
          <li>يوزع المنتج على الشعر بالكامل مع ترك مسافة 0.5 سم من الجذور.</li>
          <li>يترك على الشعر لمدة ساعة واحدة فقط.</li>
          <li>تجفيف الشعر بالمجفف مع استخدام فرشاة مستقيمة.</li>
          <li>تمليس الشعر بمكواة الشعر في خصل رفيعة من 15 إلى 20 مرة لكل خصلة.</li>
          <li>ملاحظة: للشعر المصبوغ يغسل 50% من المادة بعد وضعها لمدة ساعة.</li>
          <li>يحافظ على عدم تساقط الشعر.</li>
          <li>آمن على الأطفال والحوامل.</li>
        </Box>

        {/* Note */}
        <Typography
          variant="h6"
          sx={{ 
            fontWeight: 700, 
            textAlign: "right", 
            mt: 4, 
            color: "#8B6D2F",
            background: "linear-gradient(90deg, #FFF8DC, #FAF0E6)", // تدرج ذهبي خفيف
            p: 2,
            borderRadius: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          ✨ النتيجة: شعر ناعم، لامع، انسيابي، سهل التسريح، وصحي!
        </Typography>
      </Container>
    </Box>
  );
};

export default HowToUse;
