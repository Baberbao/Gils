import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import bg from "./assest/bg.webp";
// import logo from "./assest/logo.png";
import bts from "./assest/bts.png";
import orbit from "./assest/orbit.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Organizer() {
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
              background: `url(${bg})`,
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              py: { md: "80px", xs: "20px" },
            }}
            id="agenda"
          >
            <Container maxWidth="lg">
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "bold",
                  py: 2,
                  textAlign: { xs: "center" },
                }}
              >
                ORGANIZER
              </Typography>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      textAlign: { md: "center", xs: "center" },
                      width: "100%",
                      border: "2px solid white",
                      borderRadius: "5px",
                    }}
                  >
                    {/* <a href="https://www.bloctechsolutions.com/" target="_blank">
                <img src={bts} alt="" style={{ position: "relative" }} />
              </a> */}
                    <Box className="container">
                      <Box className="contentnew">
                        <a
                          href="https://www.bloctechsolutions.com/"
                          target="_blank"
                        >
                          <Box className="content-overlay" />
                          <LazyLoadImage className="content-image" src={bts} />
                          <Box className="content-details fadeIn-bottom">
                            <Typography
                              sx={{
                                fontSize: { md: "20px", xs: "18px" },
                                fontWeight: 700,
                                width: { md: "100%", xs: "100%" },
                                // textAlign: { md: "center", xs: "center" },
                                color: "white",
                              }}
                            >
                              Bloctech Solutions is a software development
                              company that specializes in providing blockchain
                              development services globally.
                            </Typography>
                          </Box>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      textAlign: { md: "center", xs: "center" },
                      width: "100%",
                      border: "2px solid white",
                      borderRadius: "5px",
                    }}
                  >
                    {/* <a href="https://orbitadv.com/" target="_blank">
                <img src={orbit} alt="" style={{ position: "relative" }} />
              </a> */}
                    <Box className="container">
                      <Box className="contentnew">
                        <a href="https://orbitadv.com/" target="_blank">
                          <Box className="content-overlay" />
                          <LazyLoadImage
                            className="content-image"
                            src={orbit}
                          />
                          <Box className="content-details fadeIn-bottom">
                            <Typography
                              sx={{
                                fontSize: { md: "20px", xs: "18px" },
                                fontWeight: 700,
                                width: { md: "100%", xs: "100%" },
                                // textAlign: { md: "center", xs: "center" },
                                color: "white",
                              }}
                            >
                              Orbit Advertising specializes in providing a
                              360-degree solution of branding, marketing & event
                              management services worldwide.
                            </Typography>
                          </Box>
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
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

export default Organizer;
