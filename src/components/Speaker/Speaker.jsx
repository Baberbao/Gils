import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@mui/styles";
import s1 from "./assest/s1.png";
import s2 from "./assest/s2.png";
import s3 from "./assest/s3.png";
import s4 from "./assest/s4.png";
import s5 from "./assest/s5.png";
import s6 from "./assest/s6.png";
import s7 from "./assest/s7.png";
import s8 from "./assest/s8.png";
import s9 from "./assest/s9.png";
import s10 from "./assest/s10.png";
import s11 from "./assest/s11.png";
import s12 from "./assest/s12.png";
import s13 from "./assest/s13.png";
import s14 from "./assest/s14.png";
import s15 from "./assest/s15.png";
import s16 from "./assest/s16.png";
import s17 from "./assest/s17.png";
import s18 from "./assest/s18.png";
import s19 from "./assest/s19.png";
import s20 from "./assest/s20.png";
import s21 from "./assest/s21.png";
import s22 from "./assest/s22.png";
import s23 from "./assest/s23.png";
import s24 from "./assest/s24.png";
import s25 from "./assest/s25.png";
import s26 from "./assest/s26.png";
import s27 from "./assest/s27.png";
import leoHelsi from "./assest/leoHelsi.png";
import nadeemHussain from "./assest/nadeemHussain.png";

import icon from "./assest/icon.png";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const slidedata = [
  {
    img: s1,
    link: "https://www.linkedin.com/in/sulemanbloctech/",
    title: "Muhammad Suleman",
    place: "CEO @ BlocTech Solutions",
  },
  {
    img: s2,
    link: "https://www.linkedin.com/in/ahsanimtiaz/",
    title: "Ahsan Imtiaz",
    place: "CEO @ The Cloud City Metaverse",
  },
  {
    img: s3,
    link: "https://www.linkedin.com/in/ramyaldamati",
    title: "Ramy ALDamati",
    place: "CEO @ AlBrza Global",
  },
  {
    img: s4,
    link: "https://www.linkedin.com/in/jattala/",
    title: "Imran Jattala",
    place: "CEO @ Innovators Garage (IG)",
  },
  {
    img: s5,
    link: "https://www.linkedin.com/in/meike-krautscheid-3655481a0/",
    title: "Meike Krautscheid",
    place: "CEO @ BlockXspace",
  },
  // {
  //   img: s6,
  //   link: "https://www.linkedin.com/in/shahbaz-khan-niazi-ba7516139/",
  //   title: "Shahbaz Niazi",
  //   place: "Strategic Advisor  @ Shobi Solutions",
  // },
  {
    img: s7,
    link: "https://www.linkedin.com/in/batoolnft",
    title: "Batool Aamir",
    place: "CEO @ Oval NFT",
  },
  {
    img: s9,
    link: "https://www.linkedin.com/in/sinwan-zahid",
    title: "Sinwan Zahid",
    place: "Content Marketing Lead @ Metaschool",
  },
  {
    img: s10,
    link: "https://www.linkedin.com/in/stephensundaykusu/",
    title: "Stephen	Sunday",
    place: "CEO @Kusuconsult",
  },
  {
    img: s11,
    link: "https://www.linkedin.com/in/johnfernandez1992",
    title: "John Fernández",
    place: "Metaverse Speaker @ Ready For Metaverse",
  },
  {
    img: s12,
    link: "https://www.linkedin.com/in/zeeshanqedwaee ",
    title: "Zeeshan Qedwaee ",
    place: "Head of Growth @ VentureDive ",
  },
  {
    img: s13,
    link: "https://www.linkedin.com/in/sabakalsoom/ ",
    title: "Saba Kalsoom",
    place: "Director Ecosystem & Partnerships  @ Fasset ",
  },
  {
    img: s14,
    link: "https://www.linkedin.com/in/khurram-shaikh-88524513 ",
    title: "Khurram Shaikh ",
    place: "Co Founder & CEO @ Meta League Tech Pvt Ltd. ",
  },
  {
    img: s15,
    link: "https://www.linkedin.com/in/sakmal08",
    title: "Shoaib Akmal ",
    place: "CEO @ Tekrowe Digital ",
  },
  {
    img: s16,
    link: "https://www.linkedin.com/in/noshad/ ",
    title: "Noshad Minhas",
    place: "Country Head, VP of institutionss @ Fasset ",
  },
  {
    img: s17,
    link: "https://www.linkedin.com/in/areebkhanpakistan/ ",
    title: "Areeb Khan",
    place: "CEO @ Areeb Innovations",
  },
  {
    img: s18,
    link: "https://www.linkedin.com/in/manahil-shahid-150561183 ",
    title: "Manahil Shahid",
    place: "Founder of MANDMA NFTs @ MANDMA NFTs ",
  },
  {
    img: s19,
    link: "https://www.linkedin.com/in/nabeel-khayal-745459171",
    title: "Nabeel Khayal",
    place: "Founder/CEO @ Gameotivity  ",
  },
  {
    img: s20,
    link: "http://www.linkedin.com/in/ahmadmanzoorahmad",
    title: "Ahmad Manzoor",
    place: "Founder & CEO @ Pakistan Blockchain Institute",
  },
  {
    img: s21,
    link: "https://www.linkedin.com/in/rohanasif/",
    title: "Rohan Asif",
    place: "Community Manager @ Binance",
  },
  {
    img: s22,
    link: "https://www.linkedin.com/in/sardarikramullahkhan/",
    title: "Sardar Ikram Ullah Niyazi",
    place:
      "Deputy Director @ Special Technology Zones Authority (STZA) -Cabinet Divsion",
  },
  {
    img: s23,
    link: "https://www.linkedin.com/in/engr-hafiz-tayyab-hashmi-ab4549b3/",
    title: "Engr. Muhammad Tayyab HASHMI",
    place:
      "Deputy Director (Standards and Policies) NITB, Ministry of IT & Telecommunication, Government of Pakistan.",
  },
  {
    img: s24,
    link: "http://www.linkedin.com/in/imran-ahmad-8623391b",
    title: "Imran Ahmad",
    place:
      "Deputy Director @ NITB, Ministry of IT & Telecommunication, Government of Pakistan.",
  },
  {
    img: s25,
    link: "https://www.linkedin.com/in/humzaukhan/",
    title: "Humza Khan",
    place: "Growth Manager @ Binance",
  },
  {
    img: s26,
    link: "https://www.linkedin.com/in/tahamemon/",
    title: "Taha Memon",
    place: "CEO @ Dunia ",
  },
  {
    img: s27,
    link: "https://www.linkedin.com/in/shayan-mahmud/",
    title: "Shayan Mahmud ",
    place:
      "Managing Partner Eikon7, Chairman Trademor, CBO ProPakistani @ Eikon7, ProPakistani, Trademor ",
  },
  {
    img: leoHelsi,
    link: "https://www.linkedin.com/in/leo-hilse/",
    title: "Leo Hilse ",
    place: "Founder STYLE Protocol",
  },
  {
    img: nadeemHussain,
    link: "https://www.linkedin.com/in/nadeem-hussain-43798923/",
    title: "Syed Nadeem Hussain",
    place: "Chairman @ Pakistan Fintch Network",
  },
];

const useStyles = makeStyles((theme) => ({
  slider: {
    // padding: "50px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {},
    "& .slick-list": {
      "& .slick-track": {
        display: "flex",
        width: "100%",

        "& .slick-slide": {
          [theme.breakpoints.down("sm")]: {
            marginRight: "20px",
            height: "100%",
          },
        },
      },
    },
  },
}));

const settings = {
  arrows: false,
  // dots: true,
  infinite: true,
  speed: 100,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
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

const Speaker = () => {
  const matches = useMediaQuery("(max-width:700px)");
  const classes = useStyles();

  return (
    <Box
      sx={{
        py: "0px",
        overflowX: "hidden",
      }}
      id="speakers"
    >
      <Container maxWidth="lg" id="speaker">
        <Box
          mt={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 5,

            // pb: { md: 20, xs: 6 },
          }}
        >
          <Container maxWidth="md">
            {/* <img src={speaker} alt="" width="100%" height="100%" /> */}
            <Box>
              <Heading title="Speakers" />
            </Box>
          </Container>
        </Box>

        <Box>
          {/* <Box
            sx={{ width: "95%", display: "flex", justifyContent: "flex-end" }}
          >
            <HashLink
              to=""
              style={{
                display: "flex",
                textDecoration: "none",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              View All &nbsp;
              <ReadMoreIcon />
            </HashLink>
          </Box> */}
          <Grid container spacing={3} justifyContent="center">
            {slidedata.map(({ img, title, place, link }, index) => (
              <Grid item md={3} xs={12}>
                <Box sx={{ px: "15px" }}>
                  <Box
                    sx={{
                      py: "20px",
                      px: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      // position: "relative",
                      // overflow: "hidden",
                    }}
                  >
                    <img
                      src={img}
                      alt="icons"
                      style={{ marginTop: "16px" }}
                      width="100%"
                      // height={matches ? "300px" : "353px"}
                    />
                    <Box pt="15px">
                      <Typography
                        variant="h6"
                        fontSize={{ md: "16px", xs: "12px" }}
                        fontWeight="bold"
                        textAlign={"center"}
                      >
                        {title}
                      </Typography>
                    </Box>
                    <Box textAlign="center">
                      <Typography
                        variant="p"
                        fontSize={{ md: "14px", xs: "10px" }}
                        fontWeight="300"
                        textAlign="center"
                      >
                        {place}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <a href={link} target="_blank">
                        <LazyLoadImage src={icon} alt="" />
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/speakers/" style={{ textDecoration: "none" }}>
              <Box
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
                style={{ zIndex: 1 }}
              >
                View All
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
      {/* <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: { md: 6, xs: 4 },
            mt: 2,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { md: "30px", xs: "18px" },
              fontWeight: 700,
            }}
          >
            Coming soon
          </Typography>
        </Box>
      </Container> */}
    </Box>
  );
};

export default Speaker;
