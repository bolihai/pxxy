/**
 * Root component
 * @module Root
 */

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Slider from "react-slick";

/**
 * 主页的 loader
 */
export async function loader() {
  return {};
}

export default function HomePage() {
  const carouselItems = [
    { name: "林一", image: "/dist/assets/images/example.jpg" },
    { name: "彭二", image: "/dist/assets/images/example2.jpg" },
    { name: "张三", image: "/dist/assets/images/example3.jpg" },
    { name: "李四", image: "/dist/assets/images/example4.jpg" },
    { name: "王五", image: "/dist/assets/images/example5.jpg" },
    { name: "赵六", image: "/dist/assets/images/example6.jpg" },
    { name: "钱七", image: "/dist/assets/images/example.jpg" },
    { name: "孙八", image: "/dist/assets/images/example2.jpg" },
    { name: "周九", image: "/dist/assets/images/example3.jpg" },
    { name: "吴十", image: "/dist/assets/images/example4.jpg" },
  ];

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#862617",
    padding: "10px",
    cursor: "pointer",
    zIndex: 1,
    borderRadius: "50%",
  };
  const Arrow = ({ className, onClick, icon }) => (
    <div className={className} style={{ ...arrowStyle }} onClick={onClick}>
      {icon}
    </div>
  );
  const NextArrow = (props) => <Arrow {...props} icon="❯" />;
  const PrevArrow = (props) => <Arrow {...props} icon="❮" />;

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const [searchKeyword, setSearchKeyword] = useState("");
  const isMaxScreenWidth = useMediaQuery("(max-width: 860px)");
  const isMidScreenWidth = useMediaQuery("(max-width: 1260px)");
  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value.toLowerCase();
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(keyword)
    );
    setFilteredItems(filtered);
  };
  const handleLetterClick = (letter) => {
    const filtered = items.filter(
      (item) => item.title[0].toLowerCase() === letter.toLowerCase()
    );
    setFilteredItems(filtered);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* SearchSection */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: "20px",
          width: isMaxScreenWidth ? "75%" : "60%",
        }}
      >
        <input
          type="text"
          placeholder="请输入姓名/专业/学科/关键字查询"
          name="keyword"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          style={{
            padding: "20px",
            borderRadius: "0px",
            fontSize: "16px",
            outline: "none",
            border: "1px solid #ccc",
            flex: 1,
          }}
        />
        <button
          type="button"
          onClick={handleSearch}
          style={{
            backgroundColor: "#862617",
            color: "white",
            padding: "20px",
            border: "none",
            borderRadius: "0px",
            cursor: "pointer",
            fontSize: "16px",
            width: "120px",
            letterSpacing: "4px",
          }}
        >
          搜索
        </button>
      </Box>

      {/* Alphabetical Search Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMidScreenWidth ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: isMidScreenWidth ? "75%" : "62%",
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            mb: isMaxScreenWidth ? "10px" : 0,
            pr: isMaxScreenWidth ? 0 : "5px",
            fontSize: "18px",
          }}
        >
          按首字母检索:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: isMidScreenWidth ? "wrap" : "nowrap",
            justifyContent: "center",
            gap: "4px",
          }}
        >
          {[
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z",
          ].map((letter) => (
            <Button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              sx={{
                color: "black",
                padding: "2px 4px",
                border: "none",
                borderRadius: "0px",
                fontSize: "18px",
                minWidth: "20px",
                height: "20px",
                "&:hover": {
                  backgroundColor: "#862617",
                  color: "#fff",
                },
              }}
            >
              {letter}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Carousel Section */}
      <Box
        sx={{
          width: "1360px",
          marginTop: "90px",
        }}
      >
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "180px", height: "240px", margin: "auto" }}
              />
              <Typography sx={{ textAlign: "center", color: "#fff" }}>
                {item.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
