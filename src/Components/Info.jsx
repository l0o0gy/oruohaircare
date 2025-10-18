import React from "react";
import { Button, Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Info = ({ item }) => {
  const { CardInfo } = item;
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} justifyContent="center" >
      {CardInfo.map((card) => (
        <Grid item key={card.id} xs={11} sm={6} md={4} lg={3}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <CardMedia
              component="img"
              image={card.img}
              alt={card.title}
              sx={{
                width: "100%",
                height: 300,
                objectFit: 'cover',
                border: "10px solid white",
                borderRadius: 5,
              }}
            />

            <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
              <Typography variant="subtitle1" fontWeight="600" color="text.primary">
                {card.title}
              </Typography>
            </CardContent>

            <Box sx={{ p: 2 }}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#ecc900ff",
                  "&:hover": { backgroundColor: "#dab901ff" },
                  borderRadius: 50,
                  textTransform: "none",
                  fontWeight: "bold",
                }}
                onClick={() => navigate(`/info/${card.id}`)}
              >
                انقر هنا للمزيد من المعلومات 
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Info;
