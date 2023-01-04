import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import Header from "../Header";
import AgendaPage from "./AgendaPage";
import AgendaPagethree from "./AgendaPagethree";
import AgendaPagetwo from "./AgendaPagetwo";

import bg from "./assets/agendapagebg.webp";

export default function AgendaPanel() {
  const [pageShow, setPageShow] = React.useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        // id="Home"import Header from "../Header";
        // height={{ xs: "100%", md: "70vh" }}
        pt={{ xs: 1, md: 5 }}
      >
        <Header />
        <Container maxWidth="lg">
          <Box
            // mt={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            pt={15}
            pb={35}
          >
            <Box
              sx={{
                fontSize: { xs: "40px", md: "65px" },
                fontFamily: "Inter",
                fontWeight: "700",
              }}
              textAlign="center"
              justifyContent="center"
            >
              Agenda
            </Box>
          </Box>
        </Container>

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            <Box
              sx={{
                cursor: "pointer",

                borderBottom: pageShow == 0 ? "3px solid #4287F5" : "none",
              }}
              onClick={() => {
                setPageShow(0);
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "24px", xs: "20px" },
                  fontWeight: 400,
                  fontFamily: "Inter",
                  color: "white",
                }}
              >
                ISB DAY 1
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "48px", xs: "28px" },
                  fontWeight: 700,
                  fontFamily: "Inter",
                  color: "white",
                }}
              >
                Feb 2023
              </Typography>
            </Box>
            <Box
              onClick={() => {
                setPageShow(1);
              }}
              sx={{
                marginLeft: { md: "130px", xs: "0px" },
                cursor: "pointer",
                borderBottom: pageShow == 1 ? "3px solid #4287F5" : "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "24px", xs: "20px" },
                  fontWeight: 400,
                  fontFamily: "Inter",
                  color: "white",
                }}
              >
                ISB DAY 2
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "48px", xs: "28px" },
                  fontWeight: 700,
                  fontFamily: "Inter",
                  color: "white",
                }}
              >
                Feb 2023
              </Typography>
            </Box>
            <Box
              onClick={() => {
                setPageShow(2);
              }}
              sx={{
                marginLeft: { md: "130px", xs: "00px" },
                cursor: "pointer",
                borderBottom: pageShow == 2 ? "3px solid #4287F5" : "none",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "24px", xs: "20px" },
                  fontWeight: 400,
                  fontFamily: "Inter",
                  color: "white",
                }}
              >
                Gils'22
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "48px", xs: "28px" },
                  fontWeight: 700,
                  fontFamily: "Inter",

                  color: "white",
                }}
              >
                After Party
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {pageShow == 0 ? <AgendaPage /> : null}
      {pageShow == 1 ? <AgendaPagetwo /> : null}
      {pageShow == 2 ? <AgendaPagethree /> : null}
    </>
  );
}
