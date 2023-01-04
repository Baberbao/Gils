import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import s1 from "./assest/s1.png";
import Header from "../Header";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SpeakerHeading from "./SpeakerHeading";

import bg from "./assets/speakerbioback.png";
import bgtwo from "./assets/speakerback.png";
import i1 from "./assets/i1.png";
import i2 from "./assets/i2.png";
import i3 from "./assets/i3.png";
import i4 from "./assets/i4.png";
import i5 from "./assets/i5.png";
import i6 from "./assets/i6.png";
import i7 from "./assets/i7.png";
import i8 from "./assets/i8.png";
// import s10 from "./assets/s10.png";
// import TwitterIcon from "@mui/icons-material/Twitter";
import { LazyLoadImage } from "react-lazy-load-image-component";

import NewsLetter from "../AboutEvent/NewsLetter";
import { useState } from "react";
import Loading from "../../loading";
const speakerdata = [
  {
    img: i1,
    names: "Ramy AlDamati",
    title: "Co-Founder/CEO of ALBRZA Global",
    link: "https://www.linkedin.com/in/ramyaldamati",
    link2: "https://twitter.com/RamyAlDamati",
    name: "ramyaldamati",
    content: (
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: "1.2rem",

          lineHeight: "30px",
        }}
      >
        Ramy AlDamati is the Co-Founder/CEO of ALBRZA Global "Social Network for
        Business" Platform the “Social Network for Business” He is an
        Entrepreneur & EmTech expert with professional experience in the
        Cybersecurity and finance industry since 2002 and he has been recognized
        among the top leaders to guide the future of EmTech technologies in the
        METAP Regions.
        <br /> He is a leading expert in Cybersecurity, Blockchain, Web3,
        FinTech, and EmTech competency building, with over 22-year experience in
        organizational Cybersecurity Consulting in multiple Governments
        agencies, public and private sectors, Financial, Oil/Gas, and
        international bodies, and get engaged in multiple International
        forensics investigations. <br />
        As a Co-Founder/CEO of ALBRZA Global "Social Network for Business"
        Platform the “Social Network for Business” Platform first of its kind in
        the world, which brings together future initiatives, Engagements, and
        Communities within the multiple domains of Emerging Technologies &
        Startups Entrepreneurship.
      </Typography>
    ),
  },
  {
    img: i2,
    names: "Muhammad Suleman",
    title: "CEO @ Bloctech Solutions",
    content: (
      <Typography
        sx={{ fontSize: "80px", textAlign: "center", marginTop: "100px" }}
      >
        Coming Soon
      </Typography>
    ),
    link: "https://www.linkedin.com/in/sulemanbloctech/",
    link2: "https://www.linkedin.com/in/sulemanbloctech/",
    name: "muhammadsuleman",
  },
  // {
  //   img: s10,
  //   names: "Stephen	Sunday",
  //   title: "CEO @Kusuconsult",
  //   content: (
  //     <Typography
  //       sx={{ fontSize: "80px", textAlign: "center", marginTop: "100px" }}
  //     >
  //       Coming Soon
  //     </Typography>
  //   ),
  //   link: "https://www.linkedin.com/in/stephensundaykusu/",
  //   link2: 'https://www.linkedin.com/in/sulemanbloctech/',
  //   name: "stephensunday",
  // },

  {
    img: i3,
    names: "Imran Jattala",
    title: " founder & CEO of Innovators Garage (IG)",
    link: "https://www.linkedin.com/in/jattala/",
    link2: "https://twitter.com/ImJattala",
    name: "imranjattala",
    content: (
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: "1.2rem",

          lineHeight: "30px",
        }}
      >
        Imran Jattala is the founder & CEO of Innovators Garage (IG). He is also
        famous as a Startup & Innovation Ecosystem Builder. He led various
        Innovation Programs to coach 25,000+ University students and Aspiring
        Entrepreneurs, mentored 600+ Startup Teams, help raise $5M+ Investment,
        across 100+ Universities & Incubators in Pakistan. His Big Dream is to
        make Pakistan Top-50 Innovative Nation with a $500B Innovation Economy
        by 2030! Imran is Changing World 100 Startups per Year.
        <br />
        Imran is the youngest University Director in Pakistan, serving at Lahore
        Garrison University from 2020-21. Imran is an Adjunct Professor of
        Innovation & Entrepreneurship at Air University, Islamabad.
      </Typography>
    ),
  },
  {
    img: i4,
    names: "Meike Krautscheid ",
    title: "CEO & Founder of blockXspace ",
    link: "https://www.linkedin.com/in/meike-krautscheid-3655481a0/",
    link2: "https://twitter.com/meikeXom",
    name: "meikekrautscheid",
    content: (
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: "1.2rem",

          lineHeight: "30px",
        }}
      >
        Meike Krautscheid is the CEO & Founder of blockXspace. She specializes
        in company transformation and blockchain-based use cases.
        <br />
        Her expertise includes identifying the trouble spots in various sectors
        and businesses and demonstrating how blockchain technology and Smart /
        Ricardian contracts can effectively address these issues and
        significantly boost a company. She has a group of specialists on staff
        that can offer several customized blockchain solutions, project
        management, and assistance with integrating and modifying the
        technology.
        <br />
        Meike Krautscheid also inspires her audience as a speaker at corporate
        events and runs mind-blowing on this incredible technology.
      </Typography>
    ),
  },
  // {
  //   img: i5,
  //   names: "Shahbaz Niazi",
  //   title: "Strategic Advisor  @ Shobi Solutions",
  //   link: "https://www.linkedin.com/in/shahbaz-khan-niazi-ba7516139/",
  //   link2: "https://twitter.com/meikeXom",
  //   name: "shahbazniazi",
  //   content: (
  //     <Typography
  //       sx={{ fontSize: "80px", textAlign: "center", marginTop: "100px" }}
  //     >
  //       Coming Soon
  //     </Typography>
  //   ),
  // },
  {
    img: i6,
    names: "Batool Aamir",
    title: " founder & CEO of Oval NFT",
    link: "https://www.linkedin.com/in/batoolnft",
    link2: "https://twitter.com/BatoolAamir",
    name: "batoolaamir",
    content: (
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: "1.2rem",

          lineHeight: "30px",
        }}
      >
        Batool Aamir is the founder & CEO of Oval NFT which is a Web3.0
        blockchain startup that works with brands, creators, and businesses to
        assist them to navigate the pool of NFTs and the uncharted territory of
        the Metaverse and blockchain.
        <br />
        She has participated in panels and has spoken at Web3 events hosted by
        the US Consulate, Figma, Google Developers Group, Binance, and several
        institutions. She has been recognized by Entrepreneur’s Organization and
        Unilever for her contribution and entrepreneurship in the Web3
        technology space, and she has been profiled in International Trade
        Centre and Express Tribune as a blockchain technology specialist.
      </Typography>
    ),
  },

  {
    img: i7,
    names: "Sinwan Zahid",
    title: " Content Marketing Lead @ Metaschool",
    link: "https://www.linkedin.com/in/sinwan-zahid",
    link2: "https://twitter.com/sinwan_zahid",
    name: "sinwanzahid",
    content: (
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: "1.2rem",

          lineHeight: "30px",
        }}
      >
        Sinwan Zahid is the Founding member of Metaschool, where she is
        currently contributing as the Content Marketing Lead. She is a renown
        Content Strategist and has served at various platforms.
        <br />
        Her interests are talking about Web3, growth marketing and product
        innovation. She has attended various conferences and talks regarding
        upcoming trends of NFT, digital media influencing and branding at public
        places. Her grasp on content marketing adds to the diverse aspects in
        technology transformation and builds a key to framework of interpersonal
        skills building. She loves contributing to success and growth while
        embedding digitized frameworks to traditional approaches.
      </Typography>
    ),
  },
  {
    img: i8,
    names: "Ahsan Imtiaz",
    link: "https://www.linkedin.com/in/ahsanimtiaz/",
    link2: "https://twitter.com/AhsanImtiaz",
    name: "ahsanimtiaz",
    title: "",
    content: (
      <Typography
        variant="body1"
        sx={{
          color: "#fff",
          fontSize: "1.2rem",

          lineHeight: "30px",
        }}
      >
        Ahsan Imtiaz is CEO of The Cloud City Metaverse and managing director of
        Narsun Studios. He has 7 years of experience in making traditional games
        and over 2 years of experience in building P2E games and crypto projects
        over various blockchains. Now, he is working on the next-gen metaverse
        called 'The Cloud City Metaverse'.
        <br /> His vision is to give users the power to generate content as well
        as enjoy engaging content provided by the metaverse. He has also
        contributed to major sports leagues in the US i.e NBA, MLS, NFL, NHL,
        and MLS, and worked with brands like Coca-Cola, Pepsi, Dunkin Donuts,
        Ford, Carnival Cruise, and many more for interactive brand engagement.
        <br />
        - Developed crypto games that crossed 250M+ market cap.
        <br />
        -Blockchain & Tech Development Partner ProjectStarter.io
      </Typography>
    ),
  },
];

export default function Speakerbio() {
  const [index, setindex] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    let i = speakerdata.findIndex((item) => item.name === name);
    setindex(i);
  }, [name]);

  return (
    <>
      {index != null ? (
        <>
          {" "}
          <Box
            style={{
              backgroundImage: `url(${bg})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            // id="Home"import Header from "../Header";
            // height={{ xs: "100%", md: "70vh" }}
            pt={{ xs: 1, md: 5 }}
          >
            <Container maxWidth="xl">
              <Header />

              <Box
                // mt={5}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                pt={15}
                pb={35}
              >
                <Box
                  sx={{
                    fontSize: { xs: "40px", md: "65px" },
                    fontFamily: "Inter",
                    fontWeight: "700",
                  }}
                  textAlign="center"
                  justifyContent="center"
                >
                  Speakers
                </Box>
              </Box>
            </Container>
          </Box>
          <Box>
            <Box
              style={{
                backgroundImage: `url(${bgtwo})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <Container maxWidth="lg">
                <Grid container spacing={5} pb="80px">
                  <>
                    <Grid item xs={12} md={6}>
                      <Box>
                        <SpeakerHeading
                          name={speakerdata[index].names}
                          title={speakerdata[index].title}
                        ></SpeakerHeading>
                      </Box>
                    </Grid>
                    <Grid item xs={0} md={6}></Grid>
                    <Grid item md={6}>
                      <Box>
                        <LazyLoadImage
                          src={speakerdata[index].img}
                          alt="i1"
                          width="100%"
                        />
                      </Box>
                      <Box
                        sx={{
                          marginTop: { md: "-80px", xs: "-30px" },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Box px="5px">
                          <a href={speakerdata[index].link}>
                            <IconButton
                              sx={{
                                color: "#03A9F4",
                                fontSize: "30px",
                                border: "white solid 2px",
                                "&:hover": {
                                  color: "white",
                                },
                                transition: "0.5s",
                              }}
                            >
                              <LinkedInIcon />
                            </IconButton>
                          </a>
                        </Box>
                        {/* <Box px="5px" >
                          <a href={speakerdata[index].link2}>
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
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <Box
                        sx={{
                          marginTop: "60px",
                          lineHeight: "30.74px",
                          textAlign: { md: "left", xs: "center" },
                        }}
                      >
                        {speakerdata[index].content}
                      </Box>
                    </Grid>
                  </>
                </Grid>
                <Box pb="50px">
                  {" "}
                  <NewsLetter />{" "}
                </Box>
              </Container>
            </Box>
          </Box>
        </>
      ) : (
        <Loading loading={true} />
      )}
    </>
  );
}
