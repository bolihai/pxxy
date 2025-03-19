import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Card,
  CardMedia,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Carousel from "react-material-ui-carousel";

export async function loader() {
  try {
    const response = await axios.get("/server/teacher");
    return { teachers: response.data };
  } catch (error) {
    return { error: "获取数据失败，请稍后再试。" };
  }
}

export default function HomePage() {
  const navigate = useNavigate();
  const { teachers, error } = useLoaderData();
  const extractedData = teachers.map((item) => ({
    fullName: item.fullName,
    gender: item.gender,
    department: item.department,
    label: `${item.fullName} ${item.gender} ${item.department}`,
  }));

  const carouselItems = teachers.map((teacher) => ({
    src: teacher.src,
    alt: teacher.fullName,
    title: teacher.fullName,
    description: `${teacher.gender}, ${teacher.department}`,
  }));

  carouselItems.push({ ...carouselItems[0] });

  const handlePersonClick = (personId) => {
    navigate(`/person/${personId}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Autocomplete
        disablePortal
        options={extractedData}
        sx={{ width: 600 }}
        renderInput={(params) => (
          <TextField {...params} label="可以搜索姓名/学院/性别" />
        )}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            {...props}
            onClick={() => handlePersonClick(option.fullName)}
          >
            {option.label}
          </Box>
        )}
      />
      <Box marginTop={15} width="100%">
        <Carousel
          autoPlay
          animation="slide"
          interval={2000}
          navButtonsAlwaysVisible
          sx={{
            width: "100%",
            maxWidth: 800,
            margin: "20px auto",
          }}
        >
          {carouselItems.map((item, index) => (
            <Box key={index} sx={{ position: "relative" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Card
                    sx={{ maxWidth: 250, margin: "auto" }}
                    onClick={() => handlePersonClick(item.title)}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.src}
                      sx={{ objectFit: "cover" }}
                    />
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ textAlign: "center", mt: 2 }}
                    >
                      {item.title}
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card
                    sx={{ maxWidth: 250, margin: "auto" }}
                    onClick={() =>
                      handlePersonClick(
                        carouselItems[(index + 1) % carouselItems.length].title
                      )
                    } // 添加点击事件
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={
                        carouselItems[(index + 1) % carouselItems.length].src
                      }
                      sx={{ objectFit: "cover" }}
                    />
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ textAlign: "center", mt: 2 }}
                    >
                      {carouselItems[(index + 1) % carouselItems.length].title}
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card
                    sx={{ maxWidth: 250, margin: "auto" }}
                    onClick={() =>
                      handlePersonClick(
                        carouselItems[(index + 2) % carouselItems.length].title
                      )
                    }
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={
                        carouselItems[(index + 2) % carouselItems.length].src
                      }
                      sx={{ objectFit: "cover" }}
                    />
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ textAlign: "center", mt: 2 }}
                    >
                      {carouselItems[(index + 2) % carouselItems.length].title}
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
