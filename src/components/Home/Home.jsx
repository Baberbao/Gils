import { Box } from "@mui/material";
import React from "react";

import Mainslider from "./Mainslider";

const Home = () => {
  return (
    <Box>
      {/* {!matches && (
        <Box position="relative">
          <img
            className="bullone"
            src={bollone}
            style={{ position: "absolute", zIndex: "100000" }}
            alt=""
          />{" "}
        </Box>
      )} */}

      {/* <Container maxWidth="lg"> */}

      <Mainslider />
      {/* </Container> */}
    </Box>
  );
};

export default Home;
