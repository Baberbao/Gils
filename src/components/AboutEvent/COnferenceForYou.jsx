import { Box, Container, Grid } from "@mui/material";
import React from "react";
import bg from "../../images/confBg.png";
import img from "../../images/imgCon.webp";
import conf from "../../images/con1.svg";
import aboutImage from "./assets/about.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function COnferenceForYou() {
  return (
    <Box
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
      id="Home"
      py={{ xs: 5, md: 10 }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box display="flex" flexDirection="column">
              <Box width="100%">
                <LazyLoadImage src={aboutImage} alt="" width="100%" />
              </Box>
              <Box
                sx={{
                  fontSize: { xs: "13px", md: "20px" },
                  fontFamily: "Inter",
                  fontWeight: { xs: "400", md: "600" },
                  lineHeight: { xs: "25px", md: "31px" },
                }}
                textAlign="justify"
              >
                We are governing the revolution of the digital age through
                leadership and inspiring technologies. Global Innovation &
                Leadership Summit 2023 is a two-days livewire event in Capital
                of Pakistan, ISLAMABAD, serving as a meeting point for the
                world’s most disruptive technology revolution & trends. The
                agenda of GILS'22 includes keynote sessions, expert panels,
                workshops, and fireside chats all aimed at providing access and
                insights into the growing Web3.O space, blockchain, and
                metaverse technology revolution with startup ecosystem
                penetrations in Pakistan. The opportunities are infinite with a
                host of top-tier speakers, mentors, and investors. We are
                connecting you to the future at Global Innovation & Leadership
                Summit 2022. It's going to happen on{" "}
                <strong> 1st Week Of February 2023</strong>, in Jinnah
                Convention Centre Islamabad Pakistan.
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box display="flex" alignItems="center">
              <LazyLoadImage width="100%" src={img} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
