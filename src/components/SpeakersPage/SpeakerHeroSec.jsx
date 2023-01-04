import { Box, Container, Grid } from "@mui/material";
import React from "react";
import bg from "./assets/herobg.png";
import Header from "../Header";

export default function SpeakerHeroSec() {
  return (
    <Box
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="Home"
      // height={{ xs: "100%", md: "70vh" }}
      pt={{ xs: 1, md: 5 }}
    >
      <Container maxWidth="xl">
        {/* <Header /> */}

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
  );
}
