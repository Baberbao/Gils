import { Box, Container } from "@mui/material";
import React from "react";
import Header from "../Header";
import bg1 from "./assets/bg.webp";

export default function HeroSection() {
  return (
    <Box
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      id="Home"
      pt={{ xs: 1, md: 5 }}
    >
      <Container maxWidth="xl">
        <Header />
        <Box
          pt={15}
          pb={25}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            sx={{
              fontSize: { xs: "40px", md: "65px" },
              fontFamily: "Inter",
              fontWeight: "700",
            }}
            textAlign="center"
          >
            About Event
          </Box>
          <Box py={2} display="flex" alignItems="center">
            <Box
              mr={1}
              zIndex={1}
              style={{
                cursor: "pointer",
                background: "linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
              }}
              fontFamily="Josefin Sans"
              width="270px"
              height="52px"
              fontWeight="500"
              borderRadius="0px"
              fontSize="16px"
              color="#ffffff"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              Home / About Event
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
