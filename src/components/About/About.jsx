import { Box } from "@mui/system";
import React from "react";
import bg from "./assets/bg.webp";
import about from "./assets/about.png";
import about2 from "./assets/about2.svg";
import { Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  // useEffect(() => {
  //   console.log("Is in view=====>>>>>>", inView);
  // }, [inView]);

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
              backgroundPosition: { sm: "center", xs: "top" },
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              py: { md: "50px", xs: "20px" },
              mt: "-5px",
              overflowX: "hidden",
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                <Grid item md={5} xs={12}>
                  <Box>
                    {/* <Parallax translateX={[-20, 0]}> */}
                    <LazyLoadImage src={about} width="100%" alt="" />
                    {/* </Parallax> */}
                  </Box>
                  <Box component="p">
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { md: "20px", xs: "16px" },
                        textAlign: { md: "justify", xs: "justify" },
                      }}
                    >
                      Global Innovation & Leadership Summit 2023 is two days
                      livewire event in Capital of Pakistan, ISLAMABAD, serving
                      as a meeting point for the world’s most disruptive
                      technology revolution & trends. The agenda of GILS'22
                      includes keynote sessions, expert panels, workshops, and
                      fireside chats all aimed towards providing access and
                      insights into the growing Web3.O space, blockchain and
                      metaverse technology revolution with startup ecosystem
                      penetrations in Pakistan.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                  {/* <Parallax translateX={[20, 0]}> */}
                  <LazyLoadImage src={about2} width="100%" alt="" />{" "}
                  {/* </Parallax> */}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </motion.div>
      ) : (
        <>
          <Box height="500px"> </Box>{" "}
        </>
      )}
    </Box>
  );
};

export default About;
