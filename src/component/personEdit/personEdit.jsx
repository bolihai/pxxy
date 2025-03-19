import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { editPeopleInfo } from "../../lib/teacher";

// TODO: 根据登录人员的信息
const initialData = {
  fullName: "王五",
  gender: "男",
  department: "人文与传媒学院",
  email: "wangwu@hmc.edu",
  password: "Ww123456!",
  portrait: "/assets/images/wangwu.jpg",
  individualResume: "王五，人文与传媒学院教授，研究方向为传播学与社会变迁。",
  education: "复旦大学 传播学博士",
  researchField: "传播学",
  telephone: "13800000003",
  academicAchievement: "主持过多个国家级科研项目，出版学术专著5部。",
};

const onSubmit = async (values) => {
  const result = await editPeopleInfo(values.fullName, values);

  if (result.success) {
    setSnackbar({
      open: true,
      message: result.message,
      severity: "success",
    });
  } else {
    setSnackbar({
      open: true,
      message: result.message,
      severity: "error",
    });
  }
};

export default function PersonEdit() {
  // 表单数据
  const [formData, setFormData] = useState(initialData);

  // 加载状态
  const [loading, setLoading] = useState(false);

  // 提示框
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // 表单数据改变
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 头像上传
  const handleImageUpload = (event, field) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          [field]: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // 表单提交
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await onSubmit(formData);
      setSnackbar({
        open: true,
        message: "保存成功！",
        severity: "success",
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "保存失败，请重试！",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ py: 4, maxWidth: "lg" }}>
      <Paper
        sx={{
          p: 4,
          borderRadius: 2,
          bgcolor: "rgba(255, 255, 255, 0.9)",
          boxShadow: "none",
        }}
        elevation={3}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Box
            sx={{
              textAlign: "center",
              mb: 4,
              pb: 2,
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="h4" color="primary">
              个人信息编辑
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box>
                <Typography variant="h6" gutterBottom>
                  头像
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed #e0e0e0",
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                >
                  <input
                    accept="image/*"
                    type="file"
                    hidden
                    id="portrait-upload"
                    onChange={(e) => handleImageUpload(e, "portrait")}
                  />
                  <label htmlFor="portrait-upload">
                    <IconButton component="span" color="primary">
                      <PhotoCamera />
                    </IconButton>
                    <Typography>上传头像</Typography>
                  </label>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    name="fullName"
                    label="姓名"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required>
                    <InputLabel>性别</InputLabel>
                    <Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      label="性别"
                    >
                      <MenuItem value="男">男</MenuItem>
                      <MenuItem value="女">女</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    name="department"
                    label="所属院系"
                    value={formData.department}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    name="email"
                    label="邮箱"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    name="telephone"
                    label="联系电话"
                    value={formData.telephone}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="education"
                    label="教育背景"
                    value={formData.education}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    name="researchField"
                    label="研究方向"
                    value={formData.researchField}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="individualResume"
                    label="个人简介"
                    value={formData.individualResume}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="academicAchievement"
                    label="学术成就"
                    value={formData.academicAchievement}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: "1px solid #e0e0e0",
              textAlign: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{ mr: 2 }}
            >
              保存
            </Button>
            <Button variant="outlined">取消</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
