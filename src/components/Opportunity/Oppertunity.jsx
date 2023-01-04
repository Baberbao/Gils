import React from "react";
import bg from "./assests/opp.webp";
import { Box, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Oppertunity() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <Box ref={ref}>
      {inView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              height: "550px",
              background: `url(${bg})`,
              backgroundPosition: { sm: "center", xs: "top" },
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              py: { md: "50px", xs: "20px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              overflowX: "hidden",
            }}
          >
            <Typography
              sx={{
                width: { md: "70%", xs: "95%" },
                fontSize: { md: "40px", xs: "22px" },
                fontWeight: 800,
              }}
            >
              The opportunities are infinite with a host of top-tier speakers,
              mentors, and investors!
              <br />
              Get your PASS right away to avoid missing out!
            </Typography>
          </Box>
        </motion.div>
      ) : (
        <>
          {" "}
          <Box height={"500px"}> </Box>{" "}
        </>
      )}
    </Box>
  );
}

export default Oppertunity;
