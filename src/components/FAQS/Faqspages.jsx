import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Header from "../Header";
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqsHead from "./assets/faqsHead.svg";
import FAQS from "./FAQS";
var i = 6;
const Faqmap = [
  {
    name: " What is the price of the PASS?",
    descripton: "All the information for PASS is here.",
    id: 11,
  },
  {
    name: "What kinds of PASS are offered for the GILS'22 summit? ",
    descripton:
      "We have several gils'22 PASS categories. Details will be announced soon on our website ticket section.",
    id: 12,
  },
  {
    name: "Can someone else use my ticket if I transfer it?",
    descripton: "No, Once bought, a ticket cannot be transferred.",
    id: 13,
  },
  {
    name: "Can I obtain a refund if I can't attend the conference?",
    descripton: "After purchasing your PASS, you cannot request a refund.",
    id: 14,
  },
  {
    name: "How can I contact someone on your team because my concerns were not satisfactorily addressed?    ",
    descripton: (
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="mailto:info@gils22.com"
        target={"_blank"}
      >
        outreach@gils22.com
      </a>
    ),
    id: 15,
  },
];
const FAQSpage = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // ......next full page view.....
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(Faqmap.length / postsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Box sx={{ py: { md: "40px", xs: "20px" } }} id="morefaq">
        <Header />
      </Box>
      <Container maxWidth="lg" id="faqs">
        <FAQS pages={10} gridsize={12} />
      </Container>
      <Container maxWidth="md" id="faqs">
        <Box
          sx={{
            py: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Typography
            sx={{ fontSize: { md: "40px", xs: "30px" }, fontWeight: "bold" }}
          >
            PASS FAQs
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" id="faqs">
        <Grid container py={10} spacing={5}>
          {Faqmap.length > 0 &&
            Faqmap.slice(
              currentPage * postsPerPage - postsPerPage,
              currentPage * postsPerPage
            ).map(({ name, descripton, id }) => {
              i++;
              return (
                <>
                  <Grid
                    item
                    sm={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box width="100%">
                      <Accordion
                        expanded={expanded === `panel${id}`}
                        onChange={handleChange(`panel${id}`)}
                        sx={{
                          background:
                            "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",
                          boxShadow: "-2px 1px 10px rgba(2, 193, 197, 0.45)",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMoreIcon sx={{ color: "white" }} />
                          }
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography
                            sx={{
                              fontFamily: "'Inter'",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "22px",
                              lineHeight: "140.2%",
                            }}
                            py={2}
                          >
                            {name}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                            sx={{
                              fontFamily: "'Inter'",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "20px",
                              lineHeight: "140%",
                            }}
                          >
                            {descripton}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};
export default FAQSpage;
