import React from "react";
import { Typography, Box } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  const collegeName = params.collegeName;
  try {
    const response = await axios.get(`/server/teacher/${collegeName}`);
    console.log("loader", response.data);
    return { teachers: response.data };
  } catch (error) {
    console.error("获取数据失败:", error);
    return { error: "获取数据失败，请稍后再试。" };
  }
}

export default function AcademyDetail() {
  const data = useLoaderData();
  console.log("data", data);

  if (error) {
    return <Typography>{error}</Typography>;
  }

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
