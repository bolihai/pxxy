import React from "react";
import {
  Box,
  Typography,
  Divider,
  Avatar,
  Grid,
  Paper,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import { Timeline, TimelineItem, TimelineContent, TimelineDot } from "@mui/lab";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/WorkHistory";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const fullName = params ? params.fullName : undefined;
  if (fullName === undefined) {
    return {
      teacher: [
        {
          fullName: "刘爱萍",
          department: "工程与管理学院",
          email: "aipingl@ustc.edu.cn",
          education: "博士 · 中国科学技术大学",
          individualResume:
            "中国科学技术大学类脑智能控制技术及应用国家工程实验室副教授，博士，2009年本科毕业于中国科学技术大学电子科学与技术系与少年班。2011年至2016年在中国科学院自动化研究所模式识别国家重点实验室电子与计算机工程专业攻读博士学位。",
        },
      ],
    };
  }
  try {
    const res = await axios.get(`/server/teacher/byName/${fullName}`);
    return { teacher: res.data, error: null };
  } catch (error) {
    return { error: "获取数据失败" };
  }
}

export default function Person() {
  const theme = useTheme();
  const accentColor = theme.palette.primary.main;
  const { teacher } = useLoaderData();
  return (
    <Box
      sx={{
        p: { xs: 2, md: 6 },
        minHeight: "80%",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* 左侧个人信息卡片 */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Avatar
              sx={{
                width: 160,
                height: 160,
                margin: "0 auto",
                border: `3px solid ${accentColor}`,
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />
            <Typography
              variant="h4"
              sx={{
                mt: 3,
                fontWeight: 800,
                color: accentColor,
                textAlign: "center",
                letterSpacing: 1.2,
              }}
            >
              {teacher[0].fullName}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                mb: 2,
              }}
            >
              {teacher[0].department}
            </Typography>
            <Divider
              sx={{
                my: 3,
                borderColor: accentColor,
                borderWidth: 1,
              }}
            />
            <List>
              <ListItem sx={{ px: 0 }}>
                <EmailIcon sx={{ color: accentColor, mr: 2 }} />
                <Typography variant="body1">{teacher[0].email}</Typography>
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <SchoolIcon sx={{ color: accentColor, mr: 2 }} />
                <Typography variant="body1">{teacher[0].education}</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        {/* 右侧详细信息区域 */}
        <Grid item xs={12} md={4} lg={7}>
          {/* 个人简介区块 */}
          <Paper
            sx={{
              p: 4,
              mb: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: accentColor,
                display: "flex",
                alignItems: "center",
              }}
            >
              <WorkIcon sx={{ mr: 1.5 }} />
              个人简介
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 1.8,
                color: "text.secondary",
                fontSize: "1.1rem",
              }}
            >
              {teacher[0].individualResume}
            </Typography>
          </Paper>
          {/* 时间轴区块 */}
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            <Timeline position="alternate">
              {/* 教育经历 */}
              <TimelineItem>
                <TimelineDot color="primary" sx={{ boxShadow: "none" }}>
                  <SchoolIcon />
                </TimelineDot>
                <TimelineContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2011 - 2016 · 博士
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    中国科学院自动化研究所 · 电子与计算机工程
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              {/* 工作经历 */}
              <TimelineItem>
                <TimelineDot color="primary" sx={{ boxShadow: "none" }}>
                  <WorkIcon />
                </TimelineDot>
                <TimelineContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    2023 - 至今 · 副教授
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    中国科学技术大学电子工程与信息科学系
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
