import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";
import img from "../assets/img/compo.jpg";

const Ingredients = () => {
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
          alt="مكونات ORUO Nano Filter"
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
          }}
        >
          مكونات ORUO Nano Filter وفوائدها
        </Typography>

        <Divider sx={{ mb: 4, borderColor: "#D4AF37", opacity: 0.3 }} />

        {/* Ingredients List */}
        <Box
          component="ul"
          sx={{
            paddingRight: 3,
            textAlign: "right",
            marginBottom: 3,
            lineHeight: 2.2,
            color: "#5A4632",
            fontSize: "1.05rem",
            listStyleType: "decimal",
          }}
        >
          <li>
            <strong>زيت المكاديميا:</strong> يغذي الشعر بعمق ويمنحه نعومة ولمعان طبيعي.
          </li>
          <li>
            <strong>مستخلص الكافيار:</strong> يحفز نمو الشعر ويعيد حيويته من الجذور.
          </li>
          <li>
            <strong>زيت جوز الهند:</strong> يرطب الشعر ويحميه من التقصف والتلف.
          </li>
          <li>
            <strong>زيت الأمازون:</strong> يمنح الشعر القوة والمرونة ويقلل الهيشان.
          </li>
          <li>
            <strong>البوتكس:</strong> يعمل على تنعيم الشعر وتقليل التجاعيد والملمس الخشن.
          </li>
          <li>
            <strong>الكولاجين:</strong> يقوي الشعر ويعزز مرونته ولمعانه.
          </li>
          <li>
            <strong>زيت بذور الكتان:</strong> يغذي الشعر ويعزز نموه ويحافظ على صحته.
          </li>
        </Box>

        {/* Note */}
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
          }}
        >
          ✨ جميع المكونات طبيعية وآمنة، تساعد على تغذية الشعر وجعله أكثر صحة ولمعان!
        </Typography>
      </Container>
    </Box>
  );
};

export default Ingredients;
