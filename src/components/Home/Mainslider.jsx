import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useEffect } from "react";
import slide1 from "./assets/slide1.webp";
import slide2 from "./assets/slide2.webp";
import slide3 from "./assets/slide3.webp";
import Header from "../Header";
import left from "./assets/left.png";
import right from "./assets/right.png";
import "./text.css";
import Countdown from "react-countdown";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  slider: {
    // margin: "50px",
    zIndex: "100 !important",
    [theme.breakpoints.down("sm")]: {
      // marginRight: "20px",
    },
    "& .slick-list": {
      "& .slick-track": {
        display: "flex",
        "& .slick-slide": {
          // margin: "0px 18px",
          // marginRight: "18px",
          [theme.breakpoints.down("sm")]: {
            marginRight: "0px",
          },
        },
      },
    },
  },
}));
const Mainslider = () => {
  const matches = useMediaQuery("(max-width:700px)");

  const classes = useStyles();

  let countdown = new Date("Fri Feb 03 2023 03:00:00 GMT+0000");
  countdown = countdown.getTime();

  const [slide, setslide] = useState();
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <LazyLoadImage
        src={right}
        style={{
          width: matches ? "45px" : "64px",
          height: matches ? "45px" : "64px",
          zIndex: "10000",
          // marginRight: "25px",
        }}
        className={className}
        onClick={onClick}
        alt=""
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <LazyLoadImage
        src={left}
        style={{
          width: matches ? "45px" : "64px",
          height: matches ? "45px" : "64px",
          zIndex: "10000",
          // marginLeft: "25px",
        }}
        className={className}
        onClick={onClick}
        alt=""
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    // speed: 5000,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {}, [slide]);

  return (
    <Box>
      <Box id="speakers">
        {/* <Container maxWidth="xl"> */}
        <Box sx={{ border: "none" }}>
          <Slider {...settings} className={classes.slider}>
            <Box
              sx={{
                background: `url(${slide2})`,
                backgroundPosition: { sm: "center", xs: "left" },
                backgroundSize: { md: "100% 100%", xs: "cover" },
                backgroundRepeat: "no-repeat",
                pt: { md: "10px", xs: "10px" },
                // pb: { md: "100px", xs: "40px" },
                height: "100%",
              }}
            >
              <Header />

              <Container maxWidth="lg">
                <Box py={{ sm: "170px", xs: "120px" }}>
                  <Grid container mt={{ md: "80px", xs: "50px" }}>
                    <Grid item xs={12} sm={6}>
                      <Box mt={{ sm: "0px", xs: "50px" }}>
                        {/* <Fade top> */}
                        <Typography
                          sx={{
                            fontSize: {
                              md: "35px",
                              xs: "25px",
                            },
                            textAlign: { xs: "center", md: "left" },
                            fontWeight: 700,
                          }}
                        >
                          <Box
                            // component={"h1"}
                            sx={{
                              fontSize: {
                                md: "40px",
                                xs: "30px",
                              },
                            }}
                          >
                            <div>
                              <div class="content">
                                <h2>WEB3.O</h2>
                                <h2>WEB3.O</h2>
                              </div>

                              <span>THE UPCOMING </span>
                              <span>REVOLUTION</span>
                            </div>
                          </Box>
                        </Typography>
                      </Box>

                      {/* <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", md: "flex-start" },
                      }}
                    >
                      <Box
                        mt="10px"
                        width={{ md: "300px", xs: "160px" }}
                        height="42px"
                        borderRadius="0px"
                        sx={{
                          cursor: "pointer",
                          background:
                            " linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                          "&:hover": {
                            background:
                              " linear-gradient(180deg, #1064CE 0%, #02C1C5  100%)",
                            color: "black",
                          },
                          transition: "1s ease",
                          boxShadow: " -2px 1px 10px rgba(2, 193, 197, 0.45)",
                        }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        color="#ffffff"
                        fontWeight="500"
                        fontSize={{ md: "16px", xs: "10px" }}
                        style={{ zIndex: 1, textAlign: "center" }}
                      >
                        #GILS 22
                      </Box>
                    </Box> */}
                    </Grid>
                  </Grid>
                  <Box
                    className="slideAnimation01"
                    mt="50px"
                    sx={{
                      fontSize: { md: "40px", xs: "35px" },
                      color: "white",
                      textShadow:
                        "0 0 7px #b65de9, 0 0 10px #b65de9, 0 0 21px #b65de9,   0 0 42px #b65de9, 0 0 82px #b65de9, 0 0 92px #b65de9, 0 0 102px #b65de9,0 0 151px #b65de9",
                      letterSpacing: { md: "10px", xs: "10px" },
                      fontWeight: "bold",
                      textAlign: { md: "left", xs: "center" },
                      // ml: { md: "0px", xs: "20px" },
                    }}
                  >
                    {" "}
                    <Countdown date={countdown} />{" "}
                  </Box>

                  <Box
                    className="slideAnimation0 "
                    mt={{ md: "-10px", xs: "0px" }}
                    display="flex"
                    sx={{
                      fontSize: { md: "16px", xs: "12px" },
                      color: "white",
                      fontWeight: "bold",
                      justifyContent: { md: "flex-start", xs: "space-evenly" },
                    }}
                  >
                    {" "}
                    <Box
                      pl={{ md: "10px", xs: "0px" }}
                      ml={{ sm: "0px", xs: "5px" }}
                    >
                      Days
                    </Box>{" "}
                    <Box
                      pl={{ md: "52px", xs: "0px" }}
                      ml={{ sm: "0px", xs: "25px" }}
                    >
                      Hours
                    </Box>{" "}
                    <Box pl={{ md: "35px", xs: "15px" }}>Minutes</Box>{" "}
                    <Box pl={{ md: "25px", xs: "5px" }}>Seconds</Box>{" "}
                  </Box>
                  <Box
                    mt="10px"
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "white",
                      textAlign: { md: "left", xs: "center" },
                      textShadow:
                        "0 0 7px #7A2DB7, 0 0 10px #7A2DB7, 0 0 21px #7A2DB7,   0 0 42px #7A2DB7, 0 0 82px #7A2DB7, 0 0 92px #7A2DB7, 0 0 102px #7A2DB7,0 0 151px #7A2DB7",
                    }}
                  >
                    {/* <Box className="slideAnimation">1st WEEK OF DECEMBER</Box>
                    <Box className="slideAnimation1">
                      ISLAMABAD, PAKISTAN
                    </Box>{" "} */}
                    <Box className="slideAnimation">
                      1st Week Of February 2023
                    </Box>
                    <Box className="slideAnimation1">
                      Jinnah Convention Centre
                      <br /> Islamabad Pakistan
                    </Box>{" "}
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box
              sx={{
                background: `url(${slide3})`,
                backgroundPosition: { sm: "center", xs: "left" },
                backgroundSize: { md: "100% 100%", xs: "cover" },
                backgroundRepeat: "no-repeat",
                pt: { md: "10px", xs: "10px" },
                pb: { md: "100px", xs: "40px" },
                height: "100%",
              }}
            >
              <Header />
              <Container maxWidth="lg">
                <Grid container py={{ sm: "153px", xs: "140px" }}>
                  <Grid item xs={12} sm={12}>
                    <Box mt={{ sm: "95px", xs: "70px" }}>
                      <Typography
                        sx={{
                          fontSize: {
                            md: "35px",
                            xs: "25px",
                          },
                          textAlign: { xs: "center", md: "center" },
                          fontWeight: 700,
                        }}
                      >
                        <Box
                          component={"h2"}
                          sx={{
                            fontSize: {
                              md: "54px",
                              xs: "30px",
                            },
                          }}
                        >
                          <div
                            className="textWrapper2"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <div className="title-word title-word-1">
                              CONNECTING{" "}
                            </div>
                            <div className="title-word title-word-2">TO </div>
                            <div className="title-word title-word-3">
                              FUTURE
                            </div>
                          </div>
                        </Box>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>

            <Box
              sx={{
                background: `url(${slide1})`,
                backgroundPosition: { sm: "center", xs: "left" },
                backgroundSize: { md: "100% 100%", xs: "cover" },
                backgroundRepeat: "no-repeat",
                pt: { md: "10px", xs: "10px" },
                pb: { md: "100px", xs: "40px" },
                height: "100%",
              }}
            >
              <Header />
              <Container maxWidth="lg">
                <Grid
                  container
                  py={{ sm: "135px", xs: "120px" }}
                  px={{ sm: "0px", xs: "50px" }}
                >
                  <Grid item xs={12} sm={12}>
                    <Box mt={{ md: "115px", xs: "25px" }}>
                      <Typography
                        sx={{
                          fontSize: {
                            md: "35px",
                            xs: "25px",
                          },
                          textAlign: { xs: "center", md: "center" },
                          fontWeight: 700,
                        }}
                      >
                        <Box
                          component={"h2"}
                          sx={{
                            fontSize: {
                              md: "54px",
                              xs: "30px",
                            },
                          }}
                        >
                          <div
                            className="textWrapper"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <div className="title-word title-word-1">
                              <span style={{ padding: "0px 10px" }}>
                                STARTUP{" "}
                              </span>
                            </div>
                            <div className="title-word title-word-1">
                              <span style={{ padding: "0px 10px" }}>
                                ECOSYSTEM{" "}
                              </span>
                            </div>
                            <div className="title-word title-word-1">
                              <span style={{ padding: "0px 10px" }}>WITH </span>
                            </div>
                            <div className="title-word title-word-1">
                              <span style={{ padding: "0px 10px" }}>
                                LEADERSHIP
                              </span>
                            </div>
                          </div>
                        </Box>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Slider>
        </Box>
        {/* </Container> */}
        {/* <PreRegister /> */}
      </Box>
    </Box>
  );
};

export default Mainslider;
