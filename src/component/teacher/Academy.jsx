import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

/**
 * 教师页面的 loader
 */
export async function loader() {
  try {
    const response = await axios.get("/server/teacher");
    return { teachers: response.data };
  } catch (error) {
    return { error: "获取数据失败，请稍后再试。" };
  }
}

export default function Academy() {
  const { teachers, error } = useLoaderData();
  if (error) {
    return <Typography>{error}</Typography>;
  }

  // 按学院分类教师
  const colleges = teachers.reduce((acc, teacher) => {
    if (!acc[teacher.department]) {
      acc[teacher.department] = [];
    }
    acc[teacher.department].push(teacher);
    return acc;
  }, {});

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={5} justifyContent="flex-start">
        {Object.keys(colleges).map((collegeName) => (
          <Grid item xs={12} sm={5} md={6} lg={4} key={collegeName}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardActionArea
                component={Link}
                to={`/academy/${collegeName}`}
                sx={{ color: "inherit" }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {collegeName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    点击查看该学院的教师列表
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
