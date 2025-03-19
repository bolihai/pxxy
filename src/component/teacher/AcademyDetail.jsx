import React from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

export async function loader({ params }) {
  const collegeName = params.collegeName;
  try {
    const response = await axios.get(`/server/teacher/${collegeName}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("出错了");
    return null;
  }
}

export default function AcademyDetail() {
  const { teachers } = useLoaderData();
  const navigate = useNavigate();

  const handleCardClick = (teacherId) => {
    navigate(`/person/${teacherId}`);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        {teachers.map((teacher) => (
          <Grid item key={teacher._id} xs={12} sm={6} md={3}>
            <Card
              sx={{ height: "100%", cursor: "pointer" }}
              onClick={() => handleCardClick(teacher.fullName)}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {teacher.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {teacher.department}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {teacher.gender}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {teacher.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
