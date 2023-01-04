import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import h from "./assets/dg2.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SpeakerHeading = ({ title, name }) => {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <div>
      <Container maxWidth="md">
        <Box position="relative">
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { md: "150px", xs: "50px" },
              color: "#FFFFFF",
              opacity: 0.08,
              paddingTop: "300px",
            }}
            textAlign="center"
            //   variant="h1"
          >
            Speaker
          </Typography>

          {/* <Parallax translateX={[-20, 0]}> */}
          <Typography
            textAlign="left"
            sx={{
              fontWeight: 700,
              fontSize: { md: "30px", xs: "20px" },
              color: "#FFFFFF",
              position: "absolute",
              left: "50%",
              top: matches ? "-35px" : "-100px",
              transform: "translate(-50%, -50%)",
            }}
          >
            {" "}
            {name}
            <Typography
              sx={{
                color: "#FFFFFF",
                fontWeight: 300,
                fontSize: { md: "20px", xs: "15px" },
              }}
            >
              {title}
            </Typography>
          </Typography>

          {/* </Parallax> */}
          {/* <Parallax translateX={[10, 0]}> */}
          <LazyLoadImage
            src={h}
            style={{
              position: "absolute",
              top: matches ? "-55px" : "-100px",
              transform: "translate(0, -50%)",
              right: "0px",
            }}
            alt=""
          />
          {/* </Parallax> */}
        </Box>
      </Container>
    </div>
  );
};

export default SpeakerHeading;
