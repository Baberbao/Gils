import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bg from "./assets/bg.webp";
import { HashLink } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const PreRegister = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <Box ref={ref}>
        {inView ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Box
              sx={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: { sm: "center", xs: "left" },
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // boxShadow: "-2px 1px 10px rgba(2, 193, 197, 0.45)",
              }}
            >
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    py: 5,
                    mt: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", md: "45px" },
                      fontFamily: "'Inter'",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "116.2%",
                    }}
                  >
                    Registrations are live
                  </Typography>
                  {/* <Typography
                    sx={{
                      textAlign: "left",
                      my: 3,
                      fontFamily: "'Inter'",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "20px",
                    }}
                  >
                    Register Your Interest:
                    <br />
                  </Typography> */}
                  <Typography
                    sx={{
                      textAlign: "center",
                      my: 3,
                      fontFamily: "'Inter'",
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: { md: "26px", xs: "16px" },
                      lineHeight: "143.7%",
                    }}
                  >
                    We have limited seats. So be the first to grab your seat in
                    this Global Innovation & Leadership Summit 2022.
                  </Typography>
                  <a
                    href="https://bookme.pk/events/global-innovation-leadership-summit-2022"
                    smooth
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      width={{ md: "300px", xs: "160px" }}
                      height="42px"
                      borderRadius="0px"
                      sx={{
                        cursor: "pointer",
                        background:
                          " linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                        "&:hover": {
                          background:
                            " linear-gradient(180deg, #1064CE 0%, #02C1C5  100%)",
                          color: "black",
                        },
                        transition: "1s ease",
                        boxShadow: " -2px 1px 10px rgba(2, 193, 197, 0.45)",
                      }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="#ffffff"
                      fontWeight="500"
                      fontSize={{ md: "16px", xs: "10px" }}
                      style={{ zIndex: 1 }}
                    >
                      GRAB YOUR PASS
                    </Box>
                  </a>
                </Box>
              </Container>
            </Box>
          </motion.div>
        ) : (
          <>
            {" "}
            <Box height={"400px"}> </Box>{" "}
          </>
        )}
      </Box>
    </>
  );
};

export default PreRegister;
