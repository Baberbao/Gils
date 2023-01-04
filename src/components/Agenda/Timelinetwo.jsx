import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Link } from "react-router-dom";

const Timelinetwo = () => {
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
              9:00 AM to 9:40 AM
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
                9:50 AM to 10:00 AM
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
                Keynote ( Day - 2 )
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
            marginTop: mobile ? "184px" : "178px",
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
            Defi: Global Regulatory Trends in the Decentralised World
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  10:20 AM to 10:30 AM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
             
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
            marginTop: mobile ? "184px" : "178px",
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
            Evolution of Virtual Assets Regulations
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  10:30 AM to 10:45 AM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
           
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
            marginTop: mobile ? "387px" : "310px",
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
            Blockchain: Real-Life Applications for the Public and Private Sector
          </Box>
          <Grid container spacing={5} pt={{ md: "10px", xs: "30px" }}>
            <Grid item xs={12} sm={5}>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <img
                  src={s5}
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
                    Meike Krautscheid
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
                    CEO @ BlockXspace
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
                10:45 AM to 11:00 AM
              </Typography>
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
            marginTop: mobile ? "184px" : "178px",
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
            Digital Identity & Trust
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  11:00 AM to 11:15 AM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
          
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
            marginTop: mobile ? "184px" : "178px",
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
            Moving Towards the Tokenized Future
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  11:15 AM to 11:35 AM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Panel Discussion
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
               
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
            marginTop: mobile ? "184px" : "178px",
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
            Blockchain & Global Civilization
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  11:35 AM to 11:55 AM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Fireside Chat
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
               
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
            marginTop: mobile ? "184px" : "178px",
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
            Unleashing the Importance of Digital Assets Regularizations
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  11:55 AM to 12:10 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
           
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
            marginTop: mobile ? "184px" : "178px",
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
            Cashless Future: Digital Currencies & Payments
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  12:10 PM to 12:30 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Panel Discussion:
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
              
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
                12:30 PM to 02:00 PM
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
            marginTop: mobile ? "184px" : "178px",
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
            How Metaverse Is Shaping Up the Future
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  02:00 PM to 02:15 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
            
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
            marginTop: mobile ? "184px" : "178px",
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
            How Brands Can Unlock the Power of Virtual Products & Experiences
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  02:15 PM to 02:30 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
           
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
            marginTop: mobile ? "184px" : "178px",
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
            Educating Brands on NFTs: Massive Potential for Brand Building
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  02:30 PM to 02:50 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Panel Discussion
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
            
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
            marginTop: mobile ? "184px" : "178px",
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
            The Impact of Blockchain in Gaming Industry
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  02:50 PM to 03:10 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Fireside Chat
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
              
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
            marginTop: mobile ? "184px" : "178px",
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
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  03:10 PM to 03:15 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Activity
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
               
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
            marginTop: mobile ? "184px" : "178px",
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
            Inspiring Fire Talk With
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  03:15 PM to 03:30 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Quick Fire Talk
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
        
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
            marginTop: mobile ? "502px" : "360px",
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
            Women’s in Web3 Space
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3}>
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
                Panel Discussion
              </Box>
            </Grid>

            <Grid item xs={12} sm={9}>
              <Grid item xs={12} sm={3}>
                <Box>
                  <img
                    src={s9}
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
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { md: "15px", xs: "12px" },
                        textAlign: "center  ",
                        mt: "0px",
                      }}
                    >
                      Sinwan Zahid
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
                        Content Marketing Lead @ Metaschool
                      </Typography>{" "}
                    </Box>
                  </Box>
                </Box>
              </Grid>
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
            marginTop: mobile ? "373px" : "352px",
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
            All you need to know about NFT
          </Box>
          <Grid container spacing={5} pt={{ md: "10px", xs: "30px" }}>
            <Grid item xs={12} sm={5}>
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <img
                  src={s7}
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
                    Batool Aamir
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
                    CEO @ Oval NFT
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
                3:50 PM to 4:05 PM
              </Typography>
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
                04:05 PM to 04:10 PM
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
            marginTop: mobile ? "184px" : "178px",
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
            Challenges : Startup Ecosystem in Pakistan
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  04:10 PM to 04:30 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Panel Discussion
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
                
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
            marginTop: mobile ? "184px" : "178px",
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
            Startup: Scaling, Expansion & Growth Strategies
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  04:30 PM to 04:50 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Fireside Chat
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
               
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
            marginTop: mobile ? "184px" : "178px",
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
            The World of Endless Opportunities
          </Box>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={5}>
              <Box>
                <Typography
                  textAlign={{ md: "left", xs: "left" }}
                  sx={{
                    fontWeight: 600,
                    fontSize: { md: "15px", xs: "12px" },

                    mt: "0px",
                  }}
                >
                  04:50 PM to 05:05 PM
                </Typography>
              </Box>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  textAlign: { md: "left", xs: "left" },
                }}
              >
                Speaker Session
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                component={"h5"}
                pt="10px"
                m="0px"
                textAlign={{ md: "right", xs: "center" }}
                sx={{
                  fontWeight: 500,
                  fontSize: { md: "25px", xs: "18px" },
                  // textAlign: { md: "left", xs: "justify" },
                }}
              >
               
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
                05:05 PM to 05:30 PM
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
                Closing Ceremony & Award Activity
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement> */}
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
              View All
            </Box>
          </Link>
        </Box>
      </VerticalTimeline>
    </Box>
  );
};

export default Timelinetwo;
{
  /* <VerticalTimelineElement
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
  marginTop: mobile ? "142px" : "140px",
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
      6:00 PM to 8:00 PM
    </Typography>

    <Box
      component={"h5"}
      pt="10px"
      m="0px"
      sx={{
        fontWeight: 500,
        fontSize: { md: "25px", xs: "18px" },
        textAlign: "left",
      }}
    >
      Tea & Snacks With Networking
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
  marginTop: mobile ? "125px" : "140px",
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
      8:00 PM to 11:00 PM
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
      Sufi Night / Dinner
    </Box>
  </Grid>
</Grid>
</VerticalTimelineElement> */
}
