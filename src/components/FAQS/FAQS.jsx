import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import faqsHead from "./assets/faqsHead.svg";
import Heading from "../Heading/Heading";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
let i = 6;
const Faqmap = [
  {
    name: "GILS'22 SUMMIT:What is it?",
    descripton:
      "The goal of the GILS'22 summit is to give attendees access to and insights into web3.o revolution to adopt it at an early stage. With pakistan's expanding startup ecosystem. It will bring together top-notch industry professionals for keynote sessions, expert panels, and fireside talks. Everyone will be able to find something useful here, including students, entrepreneurs, investors, businesses, enthusiasts, and innovators.",
    id: 1,
  },
  {
    name: "Who is able to attend the GILS'22 ?",
    descripton:
      "Everyone is welcome to attend GILS'22, regardless of whether they have their own firm, are aspiring entrepreneurs, or are just curious to learn more about the web3.O revolution, blockchain impact & metaverse development & startup ecosystem in Pakistan. The summit is intended for people who see themselves as initiative & risk-takers, future leaders, or creators.",
    id: 2,
  },
  {
    name: "Where is the GILS'22 summit scheduled to be held?",
    descripton:
      "GILS'22 will happen on  1st Week Of February 2023 at the Capital of Pakistan, 'ISLAMABAD'.  The purpose is to promote and support the work being done by the larger Pakistani start-up ecosystem.",
    id: 3,
  },
  {
    name: "How do people apply to attend the summit?",
    descripton: (
      <a
        style={{ textDecoration: "none", color: "white" }}
        href="https://bookme.pk/events/global-innovation-leadership-summit-2022"
        target="_blank"
      >
        <strong>{"Get your PASS here."}</strong>
      </a>
    ),
    id: 4,
  },
  {
    name: "How much do the PASS cost?	",
    descripton: " Will Be Announced Soon. ",
    id: 5,
  },

  // ......last six faqs .....
  {
    name: "I don't work for a startup. Am I still allowed to join?",
    descripton:
      "Yes! GILS'22 SUMMIT is available to everyone. Attendance is open to everyone, regardless of affiliation with or involvement with a startup.",
    id: 9,
  },
  {
    name: "When will the conference's website provide additional information about it?",
    descripton:
      "We'll be continuously updating the page to reflect new developments as they are confirmed. As a result, the greatest resource for the most up-to-date information about GILS'22 is our website. You can also sign up for our newsletter at the bottom of this page to receive the most recent changes in your inbox.",
    id: 10,
  },
];
const FAQS = ({ pages, gridsize }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [postsPerPage, setPostsPerPage] = useState(pages ? pages : 6);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(Faqmap.length / postsPerPage);
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
          <>
            {" "}
            <Container maxWidth="lg" id="faqs">
              {/* <img src={faqsHead} alt="Our Sponsers" width="100%" /> */}
              <Heading title="FAQs" />
            </Container>
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
                        md={gridsize ? 12 : 6}
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
                              boxShadow:
                                "-2px 1px 10px rgba(2, 193, 197, 0.45)",
                            }}
                          >
                            <AccordionSummary
                              expandIcon={
                                <ExpandMoreIcon sx={{ color: "white" }} />
                              }
                              aria-controls="panelbh-content"
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
          </>
        </motion.div>
      ) : (
        <>
          {" "}
          <Box height={"400px"}> </Box>{" "}
        </>
      )}
    </Box>
  );
};
export default FAQS;
