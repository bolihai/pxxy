import React from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const collegeName = params.collegeName;
  try {
    const response = await axios.get(`/server/teacher/${collegeName}`);
    console.log(response.data);
    return { teachers: response.data, error: null };
  } catch (error) {
    return { error: "获取数据失败，请稍后再试。" };
  }
}

export default function AcademyDetail() {
  const { teachers, error } = useLoaderData();
  console.log(teachers);

  // if (error) {
  //   return <Typography>{error}</Typography>;
  // }

  return (
    <Box sx={{ padding: 4 }}>
      <List>
        {teachers.map((teacher) => (
          <ListItem key={teacher.id}>
            <ListItemText primary={teacher.name} secondary={teacher.position} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
