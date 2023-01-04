import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

import s1 from "./assets/s1.png";

const TimeLine = () => {
  const mobile = useMediaQuery("(max-width:650px)");

  return (
    <Box>
      <VerticalTimeline
        animate={mobile ? false : true}
        layout={"1-column-left"}
        lineColor={"red"}
      >
        {/* .....Element one .... */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "60px" : "80px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Grid item xs={12} sm={9}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { md: "15px", xs: "12px" },
                textAlign: "left",
                mt: "0px",
              }}
            >
              9:00 AM to 9:30 AM
            </Typography>

            <Box
              component={"h5"}
              pt="10px"
              m="0px"
              sx={{
                fontWeight: 500,
                fontSize: { md: "25px", xs: "18px" },
                textAlign: { md: "left", xs: "justify" },
              }}
            >
              Morning Tea
            </Box>
          </Grid>
        </VerticalTimelineElement>

        {/* ===============element 2 ================= */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "120px" : "140px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                9:30 AM to 9:40 AM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Greetings
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
        {/* ...3 element ... */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "120px" : "140px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                9:40 AM to 9:50 AM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                National Anthem
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>

        {/* .....Four element Opning note.... */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "334px" : "310px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            // pt="10px"
            m="0px"
            textAlign={{ md: "right", xs: "center" }}
            sx={{
              fontWeight: 500,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: "center",
            }}
          >
            Opening Note
          </Box>
          <Grid container spacing={5} pt={{ md: "10px", xs: "30px" }}>
            <Grid item xs={12} sm={5}>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <LazyLoadImage
                  src={s1}
                  alt=""
                  style={{
                    position: "relative",
                    width: "50%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />

                <Box px="10px">
                  {" "}
                  <Typography
                    pt={{ md: "40px", xs: "0" }}
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: { md: "15px", xs: "12px" },
                      textAlign: "left",
                      mt: "0px",
                    }}
                  >
                    M.Suleman
                  </Typography>{" "}
                  <Typography
                    variant="P"
                    sx={{
                      fontWeight: 400,
                      fontSize: { md: "15px", xs: "12px" },
                      textAlign: "left",
                      mt: "0px",
                    }}
                  >
                    CEO @ Bloctech Solutions , Founder Gils'22
                  </Typography>{" "}
                </Box>
              </Box>
              <Box
                component={"h5"}
                pt={{ md: "10px", xs: "30px" }}
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                Opening Note
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography
                pt={{ md: "90px", xs: "0" }}
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },

                  mt: "0px",
                }}
              >
                9:50 AM to 10:00 AM
              </Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "120px" : "140px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                10:00 AM to 10:20 AM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Keynote ( Day - 1 )
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "137px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Blockchain a Game Changer for Effective Transformation
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                10:15 AM to 10:30 AM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "137px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Blockchain in Pakistan
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                10:30 AM to 10:45 AM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Government Representatives: Ministerial Address
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                10:45 AM to 11:00 AM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            How Web3 Will Disrupt the Future
          </Box>
          <Grid container spacing={5}>
            <Grid></Grid>

            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                11:00 AM to 11:20 AM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Panel Discussion
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "334px" : "310px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            // pt="10px"
            m="0px"
            textAlign={{ md: "right", xs: "center" }}
            sx={{
              fontWeight: 500,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: "center",
            }}
          >
            Design Thinking
          </Box>
          <Grid container spacing={5} pt={{ md: "10px", xs: "30px" }}>
            <Grid item xs={12} sm={5}>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <img
                  src={s4}
                  alt=""
                  style={{
                    position: "relative",
                    width: "50%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />

                <Box px="10px">
                  {" "}
                  <Typography
                    pt={{ md: "40px", xs: "0" }}
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: { md: "15px", xs: "12px" },
                      textAlign: "left",
                      mt: "0px",
                    }}
                  >
                    Imran Jattala
                  </Typography>{" "}
                  <Typography
                    variant="P"
                    sx={{
                      fontWeight: 400,
                      fontSize: { md: "15px", xs: "12px" },
                      textAlign: "left",
                      mt: "0px",
                    }}
                  >
                    CEO @ Innovators Garage (IG)
                  </Typography>{" "}
                </Box>
              </Box>
              <Box
                component={"h5"}
                pt={{ md: "10px", xs: "30px" }}
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography
                pt={{ md: "90px", xs: "0" }}
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },

                  mt: "0px",
                }}
              >
                11:20 AM to 11:35 AM
              </Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* 
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            The Role of Startups in the Global Movement
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                11:35 AM to 12:00 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Fireside Chat
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Fintech : Mapping the Future Mobility
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                12:00 PM to 12:20 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Panel Discussion
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Culture of Startup & Innovation
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                12:20 PM to 12:35 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Lunch
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                12:35 PM to 02:00 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Break
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Infotainment Activity
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                02:00 PM to 02:30 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Activity
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Connecting the Unconnected Path to Digital World
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                02:30 PM to 02:45 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "334px" : "310px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            // pt="10px"
            m="0px"
            textAlign={{ md: "right", xs: "center" }}
            sx={{
              fontWeight: 500,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: "center",
            }}
          >
            Demystifying the Metaverse
          </Box>
          <Grid container spacing={5} pt={{ md: "10px", xs: "30px" }}>
            <Grid item xs={12} sm={5}>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <img
                  src={s3}
                  alt=""
                  style={{
                    position: "relative",
                    width: "50%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />

                <Box px="10px">
                  {" "}
                  <Typography
                    pt={{ md: "40px", xs: "0" }}
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      fontSize: { md: "15px", xs: "12px" },
                      textAlign: "left",
                      mt: "0px",
                    }}
                  >
                    Ramy ALDamati
                  </Typography>{" "}
                  <Typography
                    variant="P"
                    sx={{
                      fontWeight: 400,
                      fontSize: { md: "15px", xs: "12px" },
                      textAlign: "left",
                      mt: "0px",
                    }}
                  >
                    CEO @ AlBrza Global
                  </Typography>{" "}
                </Box>
              </Box>
              <Box
                component={"h5"}
                pt={{ md: "10px", xs: "30px" }}
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography
                pt={{ md: "90px", xs: "0" }}
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },

                  mt: "0px",
                }}
              >
                02:45 PM to 03:00 PM
              </Typography>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "876px" : "307px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            The Future of Metaverse
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
              <Typography
                pt={{ md: "40px", xs: "0" }}
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                03:00 PM to 03:20 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Panel Discussion
              </Box>
            </Grid>

            <Grid container xs={12} sm={9} spacing={3}>
         

              <Grid item xs={12} sm={3}>
                <Box
                // display="flex"
                // alignItems={"center"}
                // justifyContent="space-between"
                >
                  <img
                    src={s2}
                    alt=""
                    style={{
                      position: "relative",
                      width: "100%",
                      borderRadius: "50%",
                    }}
                  />

                  <Box>
                    {" "}
                    <Typography
                      // pt={{ md: "40px", xs: "0" }}
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { md: "15px", xs: "12px" },
                        textAlign: "center  ",
                        mt: "0px",
                      }}
                    >
                      Ahsan Imtiaz
                    </Typography>{" "}
                    <Box textAlign="center">
                      <Typography
                        variant="P"
                        textAlign="center !important"
                        sx={{
                          fontWeight: 400,
                          fontSize: { md: "15px", xs: "12px" },
                          textAlign: "center",
                        }}
                      >
                        CEO @ The Cloud City Metaverse
                      </Typography>{" "}
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box
                // display="flex"
                // alignItems={"center"}
                // justifyContent="space-between"
                >
                  <img
                    src={s6}
                    alt=""
                    style={{
                      position: "relative",
                      width: "100%",
                      borderRadius: "50%",
                    }}
                  />

                  <Box>
                    {" "}
                    <Typography
                      // pt={{ md: "40px", xs: "0" }}
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { md: "15px", xs: "12px" },
                        textAlign: "center  ",
                        mt: "0px",
                      }}
                    >
                      Shahbaz Niazi
                    </Typography>{" "}
                    <Box textAlign="center">
                      <Typography
                        variant="P"
                        textAlign="center !important"
                        sx={{
                          fontWeight: 400,
                          fontSize: { md: "15px", xs: "12px" },
                          textAlign: "center",
                        }}
                      >
                        Strategic Advisor @ Shobi Solutions
                      </Typography>{" "}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Award Activity
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                03:20 PM to 03:30 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Activity
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Startup: Is the Pool of Cash for Startups Drying Up
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                03:30 PM to 03:50 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Panel Discussion : Venture Capitalist’s
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Inspiring Quick Fire Talk
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                03:50 PM to 04:05 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Fire Talk
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "165px" : "178px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Box
            component={"h5"}
            mt="40px"
            sx={{
              fontWeight: 700,
              fontSize: { md: "25px", xs: "18px" },
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Infrastructure That Builds Investor's Confidence
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                04:05 PM to 04:20 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "transparent",
            color: "#fff",
            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            borderBottom: "1px dashed #E2E0E0",
          }}
          contentArrowStyle={{
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "24px",
            width: "24px",
            borderRadius: "50px",
            outline: "none",
            marginLeft: mobile ? "-16px" : "-32px",
            marginTop: mobile ? "120px" : "140px",
            boxShadow: "none",
            border: "3px solid #8923BD",
            filter: "drop-shadow(-2px 1px 10px rgba(2, 193, 197, 0.45))",
          }}
          icon={
            <>
              <Box p="10px" bgColor="red"></Box>
            </>
          }
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={9}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: "15px", xs: "12px" },
                  textAlign: "left",
                  mt: "0px",
                }}
              >
                04:20 PM to 5:00 PM
              </Typography>

              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "justify" },
                }}
              >
                Closing Note
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}
      </VerticalTimeline>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Link to="/agenda/" style={{ textDecoration: "none" }}>
          <Box
            width={{ md: "300px", xs: "160px" }}
            height="42px"
            borderRadius="0px"
            sx={{
              cursor: "pointer",
              background: " linear-gradient(180deg, #02C1C5 0%, #1064CE 100%)",
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
            View All
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default TimeLine;

// Design thinking panale
