import { Box, Container } from "@mui/material";
import React from "react";
import ticketbg from "./assets/ticketbg.png";
// import ticket from "./assets/ticket.png";
import bg4 from "./assets/bg4.webp";
import team from "../../images/team.png";
import bts from "../../images/bts.svg";
// import ticketHead from "./assets/ticketpageheading.png";
import { useLocation, Link } from "react-router-dom";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import FAQS from "../FAQS/FAQS";
import Heading from "../Heading/Heading";
import pass from "./assets/pass.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Tickets() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const location = useLocation();
  const matches = useMediaQuery("(max-width:700px)");

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
              width: "100%",
              backgroundImage: `url(${bg4})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              py: { md: "50px", xs: "20px" },
              position: "relative",
              overflowX: "hidden",
            }}
            id="ticket"
          >
            <Container maxWidth="lg" id="ticket">
              {location.pathname == "/" ? (
                <>
                  <Container maxWidth="lg">
                    {/* <img src={ticketHead} alt="Our Sponsers" width="100%" /> */}
                    <Heading back="Pass" title="Grab Your Pass" />
                  </Container>
                  <Grid container spacing={3} py={10}>
                    <Grid
                      item
                      md={6}
                      sm={12}
                      xs={12}
                      display="flex"
                      justifyContent={"center"}
                    >
                      <Box
                        sx={{
                          background: `url(${ticketbg})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100% 100%",
                        }}
                        pb={10}
                      >
                        <Box
                          pb={{ xs: 1, md: 0 }}
                          px={{ xs: "30px", md: " 60px" }}
                          pt={{ xs: 3, sm: 3 }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Inter'",
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: { xs: "26px", md: "40px" },
                              lineHeight: "116.2%",
                              background:
                                "linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                              webkitBackgroundClip: "text",
                              webkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              textFillColor: "transparent",
                              textAlign: "center",
                            }}
                          >
                            STANDARD PASS
                          </Typography>
                        </Box>
                        <Box
                          width="100%"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box mt={7} mb={4}>
                            <LazyLoadImage src={pass} width="100%" alt="" />
                          </Box>

                          {/* <Box
                      mx={{ xs: 0, sm: 10 }}
                    
                      sx={{
                        background: `url(${ticket})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",
                        width: { sm: "346px", xs: "70%" },
                        height: { xs: "120px", sm: "143px" },
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box pl={2} width="240px">
                        <Typography
                          sx={{
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: "103.7%",
                          }}
                        >
                          Global Innovation & Leadership
                        </Typography>
                        <Typography
                          sx={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "103.7%",
                          }}
                          py={1}
                        >
                          SUMMIT 2022
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Inter'",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "12px",
                            lineHeight: "116.2%",
                          }}
                        >
                          Tuesday 6th December 2022
                        </Typography>
                      </Box>
                    </Box> */}
                        </Box>
                        <Box mx={10}>
                          <Typography
                            sx={{
                              fontFamily: "'Inter'",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: { md: "20px", xs: "18px" },
                              lineHeight: "127.7%",
                              color: "#FFFFFF",
                              textShadow:
                                "-2px 1px 10px rgba(2, 193, 197, 0.45)",
                            }}
                          >
                            Summit Access. <br />
                            Speakers Sessions. <br />
                            Panel Discussions. <br />
                            Fireside Chat <br />
                            Live Workshops
                            <br />
                            Lunch & Networking
                            <br />
                            Happy Hours <br />
                            Tea & Snacks <br />
                            GILS'22 Goodies Swag.
                            <br />
                          </Typography>
                          <Box
                            sx={{
                              fontFamily: "'Inter'",
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: "25px",
                              lineHeight: "116.2%",
                              background:
                                "linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                              webkitBackgroundClip: "text",
                              webkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              textFillColor: "transparent",
                            }}
                            py={3}
                          >
                            <strong>Price </strong>{" "}
                            <span
                              color="#BD49E8"
                              style={{
                                color: "#BD49E8",
                                fontSize: "20px",
                                webkitTextFillColor: "#fff",
                              }}
                            >
                              <s>3000</s> 2500
                            </span>
                          </Box>
                          <Button
                            sx={{
                              background:
                                "linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                              color: "#fff",
                              width: "114px",
                              height: "44px",
                              fontWeight: "700",
                              fontSize: "15px",
                              lineHeight: "120%",
                            }}
                          >
                            <a
                              href="https://bookme.pk/events/global-innovation-leadership-summit-2022"
                              style={{ color: "white", textDecoration: "none" }}
                              target="_blank"
                            >
                              {" "}
                              BUY NOW
                            </a>
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      md={6}
                      sm={12}
                      xs={12}
                      display="flex"
                      justifyContent={"center"}
                    >
                      <Box
                        sx={{
                          background: `url(${ticketbg})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "100% 100%",
                        }}
                        pb={10}
                      >
                        <Box
                          px={{ xs: "30px", md: " 60px" }}
                          pt={{ xs: 3, sm: 3 }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Inter'",
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: { xs: "26px", md: "40px" },
                              lineHeight: "116.2%",
                              background:
                                "linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                              webkitBackgroundClip: "text",
                              webkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              textFillColor: "transparent",
                              textAlign: "center",
                            }}
                          >
                            EXECUTIVE PASS
                          </Typography>
                        </Box>
                        <Box
                          width="100%"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box mt={7} mb={4}>
                            <LazyLoadImage src={pass} width="100%" alt="" />
                          </Box>
                          {/* <Box
                      mx={{ xs: 0, sm: 10 }}
                      mt={7}
                      mb={4}
                      sx={{
                        background: `url(${ticket})`,
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat",

                        width: { sm: "346px", xs: "70%" },
                        height: { xs: "120px", sm: "143px" },
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box pl={2} width="240px">
                        <Typography
                          sx={{
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "18px",
                            lineHeight: "103.7%",
                          }}
                        >
                          Global Innovation & Leadership
                        </Typography>
                        <Typography
                          sx={{
                            fontStyle: "normal",
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "103.7%",
                          }}
                          py={1}
                        >
                          SUMMIT 2022
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "'Inter'",
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "12px",
                            lineHeight: "116.2%",
                          }}
                        >
                          Tuesday 6th December 2022
                        </Typography>
                      </Box>
                    </Box> */}
                        </Box>
                        <Box mx={10}>
                          <Typography
                            sx={{
                              fontFamily: "'Inter'",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: { md: "20px", xs: "18px" },
                              lineHeight: "127.7%",
                              color: "#FFFFFF",
                              textShadow:
                                "-2px 1px 10px rgba(2, 193, 197, 0.45)",
                            }}
                          >
                            Full Summit Access. <br />
                            Speakers Sessions. <br />
                            Panel Discussions. <br />
                            Fireside Chat <br />
                            Live Workshops
                            <br />
                            Lunch & Networking <br />
                            Tea & Snacks <br />
                            GILS'22 Goodies Swag.
                            <br />
                            GILS'22 After Party
                            <br />
                            Cultural Night
                            <br />
                            Networking Dinner
                            <br />
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "'Inter'",
                              fontStyle: "normal",
                              fontWeight: "700",
                              fontSize: "25px",
                              lineHeight: "116.2%",
                              background:
                                "linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                              webkitBackgroundClip: "text",
                              webkitTextFillColor: "transparent",
                              backgroundClip: "text",
                              textFillColor: "transparent",
                            }}
                            py={3}
                          >
                            Price{" "}
                            <span
                              color="#BD49E8"
                              style={{
                                color: "#BD49E8",
                                fontSize: "20px",
                                webkitTextFillColor: "#fff",
                              }}
                            >
                              <s> 20,000</s> 17,500
                            </span>
                          </Typography>
                          <Button
                            sx={{
                              background:
                                "linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                              color: "#fff",
                              width: "114px",
                              height: "44px",
                              fontWeight: "700",
                              fontSize: "15px",
                              lineHeight: "120%",
                            }}
                          >
                            <a
                              href="https://bookme.pk/events/global-innovation-leadership-summit-2022"
                              style={{ color: "white", textDecoration: "none" }}
                              target="_blank"
                            >
                              {" "}
                              BUY NOW
                            </a>
                          </Button>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Box width="100%">
                  <Container maxWidth="md">
                    <LazyLoadImage src={bts} alt="" width="100%" />
                  </Container>
                  <Box display="flex" justifyContent="center">
                    <LazyLoadImage
                      width={matches ? "100%" : "60%"}
                      src={team}
                      alt=""
                    />
                  </Box>
                </Box>
              )}

              <FAQS />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  to="/faqs/"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      p: 2,

                      background:
                        " linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                      cursor: "pointer",
                      "&:hover": {
                        background:
                          " linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                        opacity: 0.8,
                      },
                    }}
                  >
                    View more
                  </Button>
                </Link>
              </Box>
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
