import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";

// import SpeakerHeroSec from "./SpeakerHeroSec";
// import speakerHead from "./assets/speakerHead.png";
// import FAQS from "../FAQS/FAQS";
// import PreRegister from "../preRegister/PreRegister";

// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import bg from "./assets/background.webp";
// import bg2 from "./assets/bg2.png";
// import dotedside from "./assets/dotedside.png";

// import sp1 from "./assets/sp1.png";
// import sp2 from "./assets/sp2.png";
// import sp3 from "./assets/sp3.png";
// import sp4 from "./assets/sp4.png";
// import sp5 from "./assets/sp5.png";
// import sp6 from "./assets/sp6.png";

import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
import s7 from "./assets/s7.png";
import s9 from "./assets/s9.png";
import s10 from "./assets/s10.png";
import s11 from "./assets/s11.png";
import s12 from "./assets/s12.png";
import s13 from "./assets/s13.png";
import s14 from "./assets/s14.png";
import s15 from "./assets/s15.png";
import s16 from "./assets/s16.png";
import s20 from "./assets/s20.png";
import s21 from "./assets/s21.png";
import s22 from "./assets/s22.png";
import s23 from "./assets/s23.png";
import s24 from "./assets/s24.png";
import s25 from "./assets/s25.png";
import s26 from "./assets/s26.png";
import s27 from "./assets/s27.png";
import leoHelsi from "../Speaker/assest/leoHelsi.png";
import nadeemHussain from "../Speaker/assest/nadeemHussain.png";

import Heading from "../Heading/Heading";
import NewsLetter from "../AboutEvent/NewsLetter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../Header";
import { Helmet } from "react-helmet-async";

// const speakerdata = [
//   {
//     img: sp1,
//     title: "John Doe",
//     heading: "CEO at abc organization",
//     name: "johndoe",
//   },
//   {
//     img: sp2,
//     title: "Betty Doe",
//     heading: "CEO at abc organization",
//     name: "bettydoe",
//   },
//   {
//     img: sp3,
//     title: " Jasmine Doe",
//     heading: "CEO at abc organization",
//     name: " jasminedoe",
//   },
//   {
//     img: sp4,
//     title: "Betty Doe",
//     name: "bettydoe",

//     heading: "CEO at abc organization",
//   },
//   {
//     img: sp5,
//     title: " Jasmine Doe",
//     heading: "CEO at abc organization",
//   },
//   {
//     img: sp6,
//     title: " Jasmine Doe",
//     heading: "CEO at abc organization",
//   },
// ];

const slidedata = [
  {
    img: s11,
    link: "https://www.linkedin.com/in/johnfernandez1992",
    title: "John Fernández",
    place: "Metaverse Speaker @ Ready For Metaverse",
  },
  {
    img: s16,
    link: "https://www.linkedin.com/in/noshad/ ",
    title: "Noshad Minhas",
    place: "Country Head, VP of institutionss @ Fasset ",
  },
  {
    img: s10,
    link: "https://www.linkedin.com/in/stephensundaykusu/",
    title: "Stephen	Sunday",
    place: "CEO @Kusuconsult",
  },
  {
    img: s9,
    link: "https://www.linkedin.com/in/sinwan-zahid",
    name: "sinwanzahid",
    title: "Sinwan Zahid",
    place: "Content Marketing Lead @ Metaschool",
    link2: "https://twitter.com/sinwan_zahid",
  },
  {
    img: s3,
    link: "https://www.linkedin.com/in/ramyaldamati",
    name: "ramyaldamati",
    title: "Ramy ALDamati",
    place: "CEO @ AlBrza Global",
    link2: "https://twitter.com/RamyAlDamati",
  },
  {
    img: s5,
    link: "https://www.linkedin.com/in/meike-krautscheid-3655481a0/",
    name: "meikekrautscheid",
    title: "Meike Krautscheid",
    place: "CEO @ BlockXspace",
    link2: "https://twitter.com/meikeXom",
  },
  {
    img: s2,
    link: "https://www.linkedin.com/in/ahsanimtiaz/",
    name: "ahsanimtiaz",
    title: "Ahsan Imtiaz",
    place: "CEO @ The Cloud City Metaverse",
    link2: "https://twitter.com/AhsanImtiaz",
  },
  {
    img: s1,
    title: "Muhammad Suleman",
    place: "CEO @ BlocTech Solutions",
    link: "https://www.linkedin.com/in/sulemanbloctech/",
    name: "muhammadsuleman",
    link2: "https://www.linkedin.com/in/sulemanbloctech/",
  },
  {
    img: s7,
    link: "https://www.linkedin.com/in/batoolnft",
    name: "batoolaamir",
    title: "Batool Aamir",
    place: "CEO @ Oval NFT",
    link2: "https://twitter.com/BatoolAamir",
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
  // {
  //   img: s6,
  //   link: "https://www.linkedin.com/in/shahbaz-khan-niazi-ba7516139/",
  //   name: "shahbazniazi",
  //   title: "Shahbaz Niazi",
  //   place: "Strategic Advisor  @ Shobi Solutions",
  //   link2: "https://twitter.com/AhsanImtiaz",
  // },

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
    img: s4,
    link: "https://www.linkedin.com/in/jattala/",
    name: "imranjattala",
    title: "Imran Jattala",
    place: "CEO @ Innovators Garage (IG)",
    link2: "https://twitter.com/ImJattala",
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
const Speakers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const matches = useMediaQuery("(max-width:700px)");

  return (
    <>
      <Box sx={{ overflowX: "hidden" }} overflowX="hidden">
        <Helmet>
          <meta
            name="keywords"
            content="Web 3.0 speakers, Blockchain speakers , Innovative and Technical speakers"
          />
          <meta
            name="description"
            content="Speakers of Global innovation & leadership summit 2022 will talk about WEB 3.0 & Blockchain. Also, there will be a detailed discussion on NFTs, Metaverse, DEFI, and Fintech. "
          />
          <link rel="canonical" href={window.location.href} />
          <meta
            name="title"
            content="Speakers | Sessions on WEB 3.0 - Fintech - Startups | GILS22"
          />
          <title>
            Speakers | Sessions on WEB 3.0 - Fintech - Startups | GILS22
          </title>
          {/* <script type="application/ld+json">{structureData()}</script> */}
        </Helmet>
        <Box display="none" component="h1">
          Speakers from the cutting edge web3 technologies
        </Box>
        {/* <SpeakerHeroSec /> */}

        <Box
          sx={{
            background: `url(${bg})`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            // py: { md: "50px", xs: "20px" },
          }}
          pt="40px"
        >
          <Header />
          <Container maxWidth="md">
            {/* <img src={speakerHead} alt="Our Sponsers" width="100%" /> */}
            <Box py={{ md: "0px", xs: "60px" }}>
              <Heading back="Speakers" title="Speakers" />
            </Box>
          </Container>
          <Container maxWidth="lg">
            <Grid container spacing={0} justifyContent="center">
              {slidedata.map(
                ({ img, title, place, link, name, link2 }, index) => (
                  <Grid item md={4} sm={6} xs={12}>
                    <Box
                      width="100%"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          py: "10px",
                          px: "10px",
                          display: "flex",
                          // justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                          position: "relative",
                        }}
                      >
                        {/* <Link to={`/speakers/${name}/`} style={{
                        transition: '0.5s',
                        "&:hover": {
                          transform: 'scale(1.2)',
                        }

                      }}  > */}
                        <LazyLoadImage
                          style={{
                            transition: "0.5s",
                            "&:hover": {
                              transform: "scaleY(1.2)",
                            },
                            marginTop: "16px",
                            // position: "absolute",
                          }}
                          src={img}
                          alt="icons"
                          // style={{ marginTop: "16px" }}
                          width="60%"
                        />
                        {/* </Link> */}
                      </Box>
                      <Box
                        sx={{
                          mt: "10px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Inter'",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "16px",
                            // lineHeight: "116%",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Inter'",
                            fontStyle: "normal",
                            fontWeight: "300",
                            fontSize: "12px",
                            textAlign: "center",
                          }}
                          py={1}
                        >
                          {place}
                        </Typography>
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Box px="5px">
                            <a href={link} target="_blank" rel="noreferrer">
                              <IconButton
                                sx={{
                                  color: "#03A9F4",
                                  border: "white solid 2px",
                                  "&:hover": {
                                    color: "white",
                                  },
                                  transition: "0.5s",
                                  p: "5px",
                                }}
                              >
                                <LinkedInIcon sx={{ fontSize: "15px" }} />
                              </IconButton>
                            </a>
                          </Box>

                          {/* <Box px='5px' >
                          <a href={link2}>
                            <IconButton
                              sx={{
                                color: "#03A9F4",
                                fontSize: "30px",
                                border: "white solid 2px",
                                "&:hover": {
                                  color: 'white'
                                },
                                transition: "0.5s"
                              }}
                            >
                              <TwitterIcon />
                            </IconButton>
                          </a>
                        </Box> */}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                )
              )}
            </Grid>

            <Box py="50px">
              <NewsLetter />
            </Box>
          </Container>
          {/* <PreRegister /> */}
        </Box>
        {/* <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${bg2})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      py: {md: "50px", xs: "20px" },
                      position: "relative",
        }}
      >
                      <Box
                        sx={{
                          position: "absolute",
                          display: { sm: "none", xs: "none", md: "block" },
                        }}
                      >
                        <img src={dotedside} alt="dotedside" />
                      </Box>

                      <Container maxWidth="lg">
                        <FAQS />
                      </Container>
                    </Box> */}
      </Box>
    </>
  );
};

export default Speakers;
