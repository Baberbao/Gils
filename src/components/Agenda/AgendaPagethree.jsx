import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SimpleTitle = ({ time, text }) => {
  return (
    <Grid container>
      <Grid item md={3} mt={4} xs={12}>
        <Box
          sx={{
            background: "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",
            py: "30px",
            display: "flex",
            height: "100%",
            flexDirection: "column",
            lineHeight: "34.86px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { md: "30px", xs: "20px" },
              px: { md: "60px", xs: "0px" },
              textAlign: { xs: "center", md: "left" },
              fontWeight: 500,
            }}
          >
            {time}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={9} mt={4} xs={12}>
        <Box
          sx={{
            background: "#27043F",
            px: { md: "30px", xs: "0px" },
            py: { md: "50px", xs: "50px" },
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              fontFamily: "Inter",
              color: "white",

              paddingLeft: { md: "100px", xs: "0px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {text}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default function AgendaPagethree() {
  return (
    <>
      {/* //hour  */}

      <Container
        maxWidth="lg"
        sx={{
          marginBottom: "40px",
        }}
      >
        <SimpleTitle
          time="05:30 PM - 06:00 PM"
          text="HAPPY HOUR (Tea & Snacks With Networking)"
        />
        <SimpleTitle
          time="08:00 PM - 11:00 PM"
          text="Natworking Dinner & Sufi Nightsss"
        />

        {/* dinner  */}
        {/* <Grid container>
          <Grid item md={3} mt={4} xs={12}>
            <Box
              sx={{
                background: "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",

                py: "45px",
                width: "100%",
                display: "flex",
                flexDirection: "column",

                height: "100%",
                lineHeight: "34.86px",

                // justifyContent: "center",
                // alignContent: "center",
                // alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "28px",
                  fontWeight: 500,

                  fontSize: { md: "30px", xs: "20px" },
                  px: { md: "80px", xs: "60px" },
                }}
              >
                8:00 PM - 11:00 PM
              </Typography>
            </Box>
          </Grid>
          <Grid item md={9} mt={4} xs={12}>
            <Box
              sx={{
                background: "#27043F",
                px: { md: "30px", xs: "0px" },
                py: { md: "70px", xs: "50px" },

                height: "100%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: "Inter",
                  color: "white",
                  paddingLeft: { md: "100px", xs: "80px" },
                }}
              >
                Gala Dinner
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
        {/* //sufi night  */}
      </Container>
    </>
  );
}
