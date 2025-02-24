import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Link as RouterLink } from "react-router-dom";
const buttonStyles = (isActive) => ({
  fontSize: isActive ? "32px" : "28px",
  fontFamily: "monospace",
  color: "black",
  mr: "5px",
  mb: "10px",
  borderRadius: 0,
  height: "auto",
  lineHeight: 1,
  "&:hover": {
    backgroundColor: "#862617",
    color: "#fff",
  },
});
const Items = [
  { label: "首页", to: "/" },
  // { label: "论坛", to: "/forum" },
  { label: "教师", to: "/academy" },
  { label: "个人", to: "/person" },
  { label: "学校概况", to: "/schoolProfile" },
];
export default function TopBar() {
  const [isActive] = useState(false);
  const isMaxScreenWidth = useMediaQuery("(max-width: 920px)");
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          overflowX: "hidden",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMaxScreenWidth ? "column" : "row",
            alignItems: "center",
            justifyContent: isMaxScreenWidth ? "center" : "flex-start",
            pl: isMaxScreenWidth ? "0" : "30px",
            pt: "5px",
            ml: "10px",
            minWidth: "160px",
            width: isMaxScreenWidth ? "100%" : "60%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <a href="https://www.pxc.jx.cn">
              <img
                src="/assets/images/apple-touch-icon.png"
                alt="Icon"
                style={{ width: "70px", height: "70px" }}
              />
            </a>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pl: "5px",
              }}
            >
              <img
                src="/assets/images/school.png"
                style={{ width: "120px", height: "60px" }}
              />
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: "36px",
              fontFamily: "monospace",
              ml: "15px",
            }}
          >
            教职工个人主页
          </Typography>
        </Box>
        {!isMaxScreenWidth && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ ...buttonStyles(false), mr: "60px", fontSize: "16px" }}
              component={Link}
              to="/login"
            >
              <AccountCircleIcon sx={{ mr: 1, fontSize: "24px" }} />
              登录
            </Button>
          </Box>
        )}
      </Box>

      {!isMaxScreenWidth && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "row",
              pl: "450px",
              marginLeft: 60,
            }}
          >
            {Items.map((item) => (
              <Button
                key={item.to}
                component={RouterLink}
                to={item.to}
                sx={buttonStyles(isActive)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
