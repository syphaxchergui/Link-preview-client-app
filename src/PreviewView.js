import "./App.css";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PreviewView = ({ url, title, favicon, description, image }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 1.2,
        minHeight: "120px",
      }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}>
            <CardMedia
              component='img'
              sx={{ width: "20px", height: "20px", marginRight: "8px" }}
              image={favicon}
            />
            <Typography component='div' variant='h6'>
              {title}
            </Typography>
          </Box>

          <Typography
            variant='subtitle2'
            color='text.secondary'
            component='div'>
            {description}
          </Typography>
          <a className="link" href={url} target="_blank">🕸 Go to link</a>
        </CardContent>
      </Box>
      <CardMedia
        component='img'
        sx={{ width: "200px" }}
        image={image}
        alt={title}
      />
    </Card>
  );
};

export default PreviewView;
