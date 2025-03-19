import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

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
  { label: "教师", to: "/academy" },
  { label: "个人", to: "/edit" },
  { label: "学校概述", to: "/school" },
];

export default function TopBar() {
  const [isActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const isMaxScreenWidth = useMediaQuery("(max-width: 920px)");
  const navigate = useNavigate();

  // 检查是否有 sessionStorage 中的用户信息
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    setOpenDialog(true);
  };

  const handleDialogConfirm = () => {
    // 清除 sessionStorage 中的用户信息
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
    setOpenDialog(false);
  };

  const handleDialogCancel = () => {
    setOpenDialog(false);
  };

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
              onClick={isLoggedIn ? handleLogout : () => navigate("/login")}
            >
              <AccountCircleIcon sx={{ mr: 1, fontSize: "24px" }} />
              {isLoggedIn ? "退出登录" : "登录"}
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
                component={Link}
                to={item.to}
                sx={buttonStyles(isActive)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
      )}

      {/* 退出登录对话框 */}
      <Dialog open={openDialog} onClose={handleDialogCancel}>
        <DialogTitle>确认退出</DialogTitle>
        <DialogContent>
          <DialogContentText>您确定要退出登录吗？</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogCancel} color="primary">
            取消
          </Button>
          <Button onClick={handleDialogConfirm} color="primary" autoFocus>
            确定
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
