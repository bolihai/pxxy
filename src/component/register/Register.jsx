import React from "react";

import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { EditTextField } from "../common/Common";
import Card from "@mui/material/Card";

/**
 * 注册的 loader
 */
export async function loader() {
  return {};
}

export default function Register() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: `100vh`,
        flexDirection: "column",
        backgroundSize: "cover",
        backgroundImage: 'url( "./assets/images/backgroundImage.jpg")',
      }}
    >
      <Box
        sx={{
          mt: 2,
          width: 1000,
          textAlign: "center",
          flexDirection: "row",
          display: " flex",
        }}
      >
        <a href="https://www.pxc.jx.cn">
          <img
            src="./assets/images/07.png"
            alt="Icon"
            style={{ width: "200px", height: "70px", marginLeft: 20 }}
          />
        </a>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: "36px",
            fontFamily: "monospace",
            ml: "15px",
            width: 300,
          }}
        >
          教职工个人主页
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: `100%`,
          flexDirection: "column",
          justifyContent: "center",
          backgroundSize: "cover",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            display: "flex",
            minWidth: 500,
            height: 600,
            flexDirection: "column",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <Typography variant="h4">注册</Typography>
          <form
            style={{
              flexDirection: "column",

              flexFlow: "column nowrap",
              display: "flex",
            }}
          >
            <EditTextField
              id="username"
              label="姓名"
              variant="standard"
              sx={{
                py: 1,
                width: 400,
                mb: 5,
              }}
            />
            <EditTextField
              id="college"
              label="学院"
              variant="standard"
              sx={{
                py: 1,
                width: 400,
                mb: 5,
              }}
            />
            <EditTextField
              id="email"
              label="邮箱"
              variant="standard"
              sx={{
                py: 1,
                width: 400,
                mb: 5,
              }}
            />
            <EditTextField
              id="password"
              label="密码"
              variant="standard"
              sx={{
                py: 1,
                width: 400,
                mb: 5,
              }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#862617",
                "&:hover": {
                  backgroundColor: "rgba(134, 38, 23, 0.8)",
                },
              }}
            >
              注册
            </Button>
          </form>
        </Card>
      </Box>
    </Box>
  );
}
