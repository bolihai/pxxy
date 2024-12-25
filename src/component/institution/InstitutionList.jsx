import React from "react";
import { Box, Card, Typography, Grid, CardActionArea } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";

/**
 * 教师页面的 loader
 */
export async function loader() {}

export default function InstitutionList() {
  const institutions = [
    "商学院",
    "人文与传媒学院",
    "工程与管理学院",
    "外国语学院",
    "材料与化学工程学院",
    "体育学院",
    "机械电子工程学院",
    "信息与计算机工程学院",
    "艺术学院",
    "教育学院",
    "马克思主义学院",
    "继续教育学院",
  ];

  return (
    <Box>
      <Typography variant="h5" align="center" gutterBottom>
        学院
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {institutions.map((institution, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <Link
                to={`/institution/${institution}`}
                style={{ textDecoration: "none" }}
              >
                <CardActionArea>
                  <Box
                    sx={{
                      width: 400,
                      height: 200,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ color: "black" }}>
                      {institution}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
