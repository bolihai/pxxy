import React from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// 定义一个带有动画的 Box 组件
const MotionBox = styled(motion.div)(({ theme }) => ({
  width: "100%",
  maxWidth: 800,
  margin: "0 auto",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  backgroundColor: theme.palette.background.paper,
}));

export async function loader() {
  return {};
}

export default function SchoolProfile() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <CardContent sx={{ p: 4, flex: 1 }}>
            <Typography variant="body1" paragraph sx={{ textIndent: "2em" }}>
              萍乡学院坐落于中国近代工业主要发祥地之一——江西省萍乡市。1898年创办的萍乡煤矿，是当时中国“十大厂矿”之一。萍乡是全国文明城市、国家园林城市、全国海绵城市试点城市、水生态文明建设试点城市、国家产业转型升级示范区。芦溪县是中国最大的电瓷产业基地；湘东区是中国工业陶瓷重要生产基地。萍乡历史悠久、人文荟萃，自古享有“读书之乡、教育之邦”的美誉；傩面具、傩舞、傩庙“三宝”俱全；中国佛教五家七宗之一的杨岐宗远播日本、韩国和东南亚；武功山十万亩高山草甸被誉为“云中草原、户外天堂”。萍乡是中国工人运动的发源地、中国少年先锋队的诞生地、秋收起义的策源地和主要爆发地。
            </Typography>
            <Typography variant="body1" paragraph sx={{ textIndent: "2em" }}>
              萍乡学院是一所以工学为主，文理为基础，多学科协调发展的全日制普通本科院校。坚持做强材料、机械、信息类专业，做精师范教育类专业，努力构建与地方产业相匹配、适应经济社会发展需要的学科专业体系。学校溯源于1941年创办的省立萍乡简易师范学校，1949年更名为萍乡师范学校，1978年开办大专班，1982年成立萍乡教育学院，1993年更名为萍乡高等专科学校，2013年经教育部批准升格为本科院校——萍乡学院。2016年获得学士学位授予权。2019年通过教育部本科教学工作合格评估。80余载办学春秋，为社会输送了10余万名毕业生。首届毕业生刘天泉是中国工程院院士。
            </Typography>
            <Typography variant="body1" paragraph sx={{ textIndent: "2em" }}>
              升本以来，学校秉承“厚德至善、励学笃行”的校训精神，坚持以工学为主，文理为基础，多学科协调发展，牢固树立地方性、应用型办学定位，不断深化教育教学改革，努力构建符合高等教育发展规律、适应地方经济社会发展需求的人才培养体系，发展态势良好，办学水平和社会声誉提升迅速，本科办学初见成效。获得全国文明单位、全国五四红旗团委、全国群众体育先进单位、全国高校美育工作先进单位、江西省就业工作先进单位、江西省综治工作先进单位、第一届江西省文明校园、萍乡市服务地方经济突出贡献单位等荣誉称号。2015年被列为江西省首批向应用型高校转型发展试点院校，是全国大学生创新创业实践联盟成员。
            </Typography>
            <Typography variant="body1" paragraph sx={{ textIndent: "2em" }}>
              学校设有11个二级学院，涉及工学、文学、理学、教育学、管理学、艺术学、法学、历史学、农学等九个学科门类的34个本科专业。现有普通全日制在校生13000余人。校园占地面积1200余亩，总建筑面积66万余平方米。有教学实验实训室200余个，校外实习实践实训基地190余个。建有省级柔力球训练基地和省级社会体育指导员培训基地。教学科研仪器设备总值近1.98亿元，馆藏纸质图书136万余册，电子图书150万余册。
            </Typography>
            <Typography variant="body1" paragraph sx={{ textIndent: "2em" }}>
              学校有国家重点研发首席科学家、国家百千万人才、国家有突出贡献中青年专家、国务院特殊津贴专家、教育部新世纪优秀人才、江西省政府特殊津贴专家、江西省创新驱动“5511工程”科技创新人才、江西省百千万人才、江西省高层次高技能领军人才、江西省主要学科学术和技术带头人、“赣鄱英才555工程”人选、江西省宣传文化领域“四个一批”人才、江西省青年井冈学者、江西省金牌教师等各类人才50余人。2022年被江西省列为硕士学位授予立项建设单位。
            </Typography>
            <Typography variant="body1" paragraph sx={{ textIndent: "2em" }}>
              学校现有省级一流专业1个，校级特色专业10个，省高校专业综合改革试点项目1个，省级高水平本科教学团队2个，省级精品课程（精品资源共享课、精品在线开放课程）13门，省级一流本科课程8门，省高校“课程思政”示范课程6门，省课程思政示范中心1个。2013年以来立项全国教育规划课题1项、江西省教育规划课题61项、江西省高校教改课题107项，获江西省教学成果奖6项。
            </Typography>
          </CardContent>
        </Card>
      </MotionBox>
    </Container>
  );
}
