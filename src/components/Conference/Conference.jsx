import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import bgGallery from "../../images/bgGallary.png";
import card from "../../images/card.png";
import stageone from "./assets/stageone.png";
import employee from "./assets/employee.png";
import award from "./assets/award.png";
import stage from "./assets/stage.png";
import NewsLetter from "../AboutEvent/NewsLetter";
import Heading from "../Heading/Heading";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Conferencebox = ({ cardimg, cardText, cardTitle }) => {
  return (
    <>
      <Box sx={{ position: "relative", width: "70%", py: 3 }}>
        <LazyLoadImage src={cardimg} alt="" style={{ position: "relative" }} />
        <Typography
          sx={{
            py: 2,
            fontSize: { lg: "25px", md: "18px", xs: "25px" },
            fontWeight: "700",
          }}
        >
          {cardTitle}
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: "16px", md: "13px", xs: "12px" },
            fontWeight: "400",
            position: "relative",
          }}
          paragraph={true}
        >
          {cardText}
        </Typography>
      </Box>
    </>
  );
};

// ........conferance box styling.........
const conferencebox = {
  width: "100%",
  height: "490px",
  // py: 5,
  background: `url(${card})`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  textAlign: "center",
  color: " #FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Conference() {
  return (
    <>
      <Box
        sx={{
          py: { md: "50px", xs: "20px" },
          background: `url(${bgGallery})`,
          backgroundPosition: { sm: "center", xs: "top" },
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Container maxWidth="lg">
            <Box
              sx={{
                // position: "relative",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                py: 8,
              }}
            >
              {/* <img
                src={conference}
                alt="conference"
                style={{ width: "100%" }}
              /> */}
              <Heading title="Why Attend GILS'22" back="GILS'22" font={true} />
            </Box>
          </Container>

          <Grid container spacing={2}>
            {/* first Box start */}
            <Grid
              item
              md={4}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box style={conferencebox}>
                <Conferencebox
                  cardimg={employee}
                  cardTitle="Networking and Communication"
                  cardText="Social media can’t replace face-to-face communication. Therefore, Gils’22  offers best networking and communication experience."
                />
              </Box>
            </Grid>
            {/* .....second gird start......... */}
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box style={conferencebox}>
                  <Conferencebox
                    cardimg={stageone}
                    cardTitle="Stay updated with Web3.O Revolution"
                    cardText="Stay updated with the latest trends that prepare you to stay ahead of your competitors in business and make your business model more sustainable."
                  />
                </Box>
                <Box style={conferencebox}>
                  <Conferencebox
                    cardimg={award}
                    cardTitle=" Become a Thought Leader"
                    cardText="When you learn so much from different people’s experiences, you return as a thought leader."
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box style={conferencebox}>
                <Conferencebox
                  cardimg={stage}
                  cardTitle=" Meet with Investors"
                  cardText="Besides growing business connections, you get to meet investors who can help you scale your business with required fundings."
                />
              </Box>
            </Grid>
          </Grid>
          <Box>
            <NewsLetter />
          </Box>
          {/* <Container maxWidth="md">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                py: 10,
              }}
            >
              <img src={gallary} alt="conference" style={{ width: "100%" }} />
            </Box>
          </Container>
          <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: { md: "column", xs: "row" },
                }}
              >
                <Box style={{ width: "100%" }}>
                  <img
                    src={gallaryone}
                    alt="gallary one"
                    style={{ width: "100%", height: "196px" }}
                  />
                </Box>
                <Box style={{ width: "100%" }}>
                  <img
                    src={gallarytwo}
                    alt="gallary two"
                    style={{ width: "100%", height: "196px" }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={gallarythree}
                alt="gallary three"
                style={{ width: "100%", height: "392px" }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={gallaryfour}
                alt="gallary four"
                style={{ width: "100%", height: "392px" }}
              />
            </Grid>
          </Grid> */}
        </Container>
      </Box>
    </>
  );
}

export default Conference;
