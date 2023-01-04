import { Container, Grid, Box } from "@mui/material";
import React from "react";
import bg from "./assets/bg.webp";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Details = () => {
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
              backgroundPosition: { sm: "center", xs: "top" },
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              py: { md: "50px", xs: "20px" },
              overflowX: "hidden",
            }}
            mt={-2}
          >
            <Container maxWidth="xl">
              <Grid container spacing={5}>
                <Grid item md={3} xs={3}>
                  <Box
                    component="h1"
                    sx={{
                      fontWeight: "400",
                      fontSize: { md: "30px", xs: "8px" },
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Participants 1K+
                  </Box>{" "}
                </Grid>
                <Grid item md={3} xs={3}>
                  <Box
                    component="h1"
                    sx={{
                      fontWeight: "400",
                      fontSize: { md: "30px", xs: "8px" },
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Global Speakers
                  </Box>{" "}
                </Grid>
                <Grid item md={3} xs={3}>
                  <Box
                    component="h1"
                    sx={{
                      fontWeight: "400",
                      fontSize: { md: "30px", xs: "8px" },
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Web3.O Enthusiast
                  </Box>{" "}
                </Grid>

                <Grid item md={3} xs={3}>
                  <Box
                    component="h1"
                    sx={{
                      fontWeight: "400",
                      fontSize: { md: "30px", xs: "8px" },
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Networking
                  </Box>{" "}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </motion.div>
      ) : (
        <>
          <Box height="100px"> </Box>{" "}
        </>
      )}
    </Box>
  );
};

export default Details;
