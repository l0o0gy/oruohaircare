import React from "react";
import { FavoriteBorder } from "@mui/icons-material";
import { Rating, Button, Box, Typography, Card, CardContent, CardMedia, IconButton, Grid } from "@mui/material";

const Info = ({ item }) => {
  const { CardInfo } = item;

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

            {/* Image */}
            <CardMedia
              component="img"
              image={card.img}
              alt={card.title}
              sx={{
                width: "100%",
                height: 300,
                // objectFit: "contain",
                // margin: "5px auto 0",
                objectFit: 'cover',
                border: "10px solid white",
                borderRadius: 5,
              }}
            />

            {/* Info */}
            <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
              <Typography variant="subtitle1" fontWeight="600" color="text.primary">
                {card.title}
              </Typography>

              {/* <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {card.des}
              </Typography> */}
            </CardContent>

            {/* Button */}
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
