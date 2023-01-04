import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import h from "./assets/heading.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Heading = ({ title, back, font }) => {
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <div>
      <Box position="relative">
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { md: "150px", xs: "50px" },
            color: "#FFFFFF",
            opacity: 0.08,
          }}
          textAlign="center"
          //   variant="h1"
        >
          {back ? back : title}
        </Typography>

        {/* <Parallax translateX={[-20, 0]}> */}
        <Typography
          textAlign="center"
          sx={{
            fontWeight: 700,
            fontSize: { md: "45px", xs: "30px" },
            color: "#FFFFFF",
            position: "absolute",
            left: "50%",
            marginTop: matches ? "-35px" : "-100px",
            transform: "translate(-50%, -50%)",
          }}
        >
          {" "}
          {title}
        </Typography>
        {/* </Parallax> */}
        {/* <Parallax translateX={[10, 0]}> */}
        <LazyLoadImage
          src={h}
          style={{
            position: "absolute",
            marginTop: matches ? "-35px" : "-100px",
            transform: "translate(0, -50%)",
            right: "0px",
          }}
          alt=""
        />
        {/* </Parallax> */}
      </Box>
    </div>
  );
};

export default Heading;
