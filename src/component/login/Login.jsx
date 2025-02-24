import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { EditTextField, ColumnFlexBoxAC } from "../common/Common";
import Card from "@mui/material/Card";
import { Link, useNavigate } from "react-router-dom";

/**
 * 登录的 loader
 */
export async function loader() {
  return {};
}

export default function Login() {
  const navigate = useNavigate(); // 使用 useNavigate 钩子

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
          display: "flex",
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
            height: 400,
            flexDirection: "column",
            flexFlow: "column nowrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => navigate(-1)}
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              color: "#862617",
              "&:hover": {
                color: "rgba(134, 38, 23, 0.8)",
              },
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h4">登录</Typography>
          <form
            style={{
              flexDirection: "column",
              flexFlow: "column nowrap",
              display: "flex",
            }}
          >
            <EditTextField
              id="email"
              small
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginLeft: 5,
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#862617",
                  "&:hover": {
                    backgroundColor: "rgba(134, 38, 23, 0.8)",
                  },
                }}
              >
                登录
              </Button>
              <Link to="/register">没有账户？</Link>
            </Box>
          </form>
        </Card>
      </Box>
    </Box>
  );
}
