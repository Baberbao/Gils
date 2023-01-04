import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  // Grid,
  Stack,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";

import logo from "../images/logo.png";
import footerBg from "../images/footerBg.webp";
import smallBg from "../images/smallBg.webp";
import footerArrow from "../images/footerArrow.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import Facebook from "../images/Facebook.png";
import linked from "../images/linked.png";
import { HashLink } from "react-router-hash-link";
import NorthIcon from "@mui/icons-material/North";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Footer() {
  const [siteHeight, setHeightstate] = useState("");
  useEffect(() => {
    const site = window.innerHeight;
    setHeightstate(site);
  }, [window.innerHeight]);
  console.log("siteHeight", siteHeight);
  const matches = useMediaQuery("(max-width:700px)");
  return (
    <>
      <Box
        pt={{ xs: 5, sm: 5 }}
        pb={{ xs: 5, sm: 5 }}
        sx={{
          position: "relative",
          backgroundImage: `url(${footerBg})`,
          backgroundPosition: { xs: "left", sm: "left", md: "center center" },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "auto%",
        }}
      >
        <Box
          sx={{ position: "absolute", top: "9%", left: "15%" }}
          display={{ xs: "block", sm: "block", md: "none" }}
        >
          <LazyLoadImage src={smallBg} alt="small" width="100%" />
        </Box>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              justifyContent: "space-between",
              px: { md: 4, sm: 4, xs: 0 },
            }}
          >
            <Box>
              <Box>
                <Box fontSize={{ xs: "18px", sm: "28px" }} fontWeight={700}>
                  When
                </Box>
                <Box fontSize={{ xs: "16px", sm: "25px" }} fontWeight={400}>
                  1st Week Of February 2023
                </Box>
                <Box
                  mt={2}
                  fontSize={{ xs: "18px", sm: "28px" }}
                  fontWeight={700}
                >
                  Where
                </Box>
                <Box fontSize={{ xs: "16px", sm: "25px" }} fontWeight={400}>
                  Jinnah Convention Centre <br /> Islamabad Pakistan
                </Box>
              </Box>
              <Box mt={{ md: 5, xs: 20 }}>
                <LazyLoadImage
                  src={logo}
                  width={matches ? "200px" : "260px"}
                  alt="logo1"
                />
              </Box>

              <Box
                fontSize={{ xs: "14px", md: "20px" }}
                fontWeight={700}
                width="320px"
                height="115px"
                color="#E3ACFF"
                textAlign={"left"}
                mt={3}
              >
                GILS'22 is an exclusive Global summit for IT professionals and
                Web3.O enthusiasts from all over the globe.
              </Box>

              <Box
                sx={{
                  display: { md: "flex", sm: "none", xs: "none" },
                  alignItems: "center",
                }}
                mt={5}
              >
                <Box fontSize={{ xs: "16px", md: "22px" }} fontWeight={900}>
                  Follow us
                </Box>
                <a
                  href="https://www.linkedin.com/company/gils2022"
                  target="_blank"
                >
                  <LazyLoadImage src={linked} alt="" />
                </a>

                <a href="https://twitter.com/gils_22" target="_blank">
                  <LazyLoadImage src={twitter} alt="" />
                </a>
                <a
                  href="
https://www.instagram.com/gils_2022/"
                  target="_blank"
                >
                  <LazyLoadImage src={instagram} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/Global-Innovation-Leadership-Summit-2022-111387975002238"
                  target="_blank"
                >
                  <LazyLoadImage src={Facebook} alt="" />
                </a>
              </Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "14px",
                  display: { md: "block", sm: "none", xs: "none" },
                }}
              >
                Copyright 2022 – gil’s22. All Right Reserved
              </Typography>
            </Box>
            <Box>
              <Box textAlign={{ md: "right", xs: "left" }}>
                <Box fontSize={{ xs: "18px", sm: "22px" }} fontWeight={700}>
                  Become a Digital Age Leader.
                  <br />
                  Grab Your Seat Before It's Too Late.
                </Box>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={{ xs: "flex-start", md: "flex-end" }}
                  mt={2}
                >
                  <Box
                    fontSize={{ xs: "24px", sm: "24px" }}
                    fontWeight={900}
                    // width="100px"
                  >
                    GRAB PASS
                  </Box>
                  <a
                    href="https://bookme.pk/events/global-innovation-leadership-summit-2022"
                    target="_blank"
                  >
                    <LazyLoadImage
                      src={footerArrow}
                      style={{ transform: "rotate(90deg)" }}
                      alt="arrow"
                      height={"45px"}
                    />
                  </a>
                </Stack>
              </Box>
              <Box
                mt={{ md: 13, xs: 5 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  justifyContent: { md: "flex-end", xs: "left" },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { md: "flex-end", xs: "center" },
                    }}
                  >
                    <a
                      href="https://bookme.pk/events/global-innovation-leadership-summit-2022"
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
                        REGISTER TO ATTEND GILS'22
                      </Box>
                    </a>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { md: "flex-end", xs: "center" },
                    }}
                  >
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://docs.google.com/forms/d/e/1FAIpQLScvIp_2hQhvA5j-1B-vrO-O7-i7kDgi3lWzPRb6F-SdHh_NJA/viewform"
                      target={"_blank"}
                    >
                      <Box
                        mt={3}
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
                        BECOME OUR PARTNER
                      </Box>
                    </a>
                  </Box>
                  <Box
                    fontSize={{ xs: "12px", md: "16px" }}
                    fontWeight="600"
                    display={{ md: "block", sm: "none", xs: "none" }}
                    mt={13}
                    textAlign={{ md: "right", xs: "left" }}
                  >
                    <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
                      Partnership Inquiry
                    </Typography>
                    partnership@gils22.com
                  </Box>
                  <Box
                    fontSize={{ xs: "12px", md: "16px" }}
                    fontWeight="600"
                    display={{ md: "block", sm: "none", xs: "none" }}
                    mt={2}
                    textAlign={{ md: "right", xs: "left" }}
                  >
                    <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
                      Registration Inquiry
                    </Typography>
                    info@gils22.com
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            mt={{ md: 0, xs: 2 }}
            sx={{
              width: "100%",
              display: { md: "none", sm: "flex", xs: "flex" },
              flexDirection: "column",
              alignItems: "center",
              ml: { md: 4, xs: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              // mt={2}
            >
              <Box fontSize={{ xs: "16px", md: "22px" }} fontWeight={900}>
                Follow us
              </Box>
              <a
                href="https://www.linkedin.com/company/gils2022"
                target="_blank"
              >
                <LazyLoadImage src={linked} alt="" />
              </a>

              <a href="https://twitter.com/gils_22" target="_blank">
                <LazyLoadImage src={twitter} alt="" />
              </a>
              <a
                href="
https://www.instagram.com/gils_2022/"
                target="_blank"
              >
                <LazyLoadImage src={instagram} alt="" />
              </a>
              <a
                href="https://www.facebook.com/Global-Innovation-Leadership-Summit-2022-111387975002238"
                target="_blank"
              >
                <LazyLoadImage src={Facebook} alt="" />
              </a>
            </Box>
            <Box fontSize={{ xs: "12px", md: "16px" }} fontWeight="600" mt={2}>
              Copyright 2022 – gil’s22. All Right Reserved
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "fixed",
            bottom: "10px",
            right: "10px",
          }}
        >
          {/* <HashLink to="/#header"> */}
          <Button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            sx={{
              width: "25px",
              height: "60px",
              color: "white",
              background: " linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
              cursor: "pointer",
              "&:hover": {
                background:
                  " linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
                opacity: 0.8,
              },
            }}
          >
            <NorthIcon sx={{ fontSize: "30px" }} />
          </Button>
          {/* </HashLink> */}
        </Box>
      </Box>
    </>
  );
}
