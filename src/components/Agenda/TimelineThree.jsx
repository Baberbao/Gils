import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineThree = () => {
  const mobile = useMediaQuery("(max-width:650px)");

  return (
    <Box>
      <VerticalTimeline
        animate={mobile ? false : true}
        layout={"1-column-left"}
        lineColor={"red"}
      >
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
                5:30 PM to 6:00 PM
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
                HAPPY HOUR (Tea & Snacks With Networking)
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
                08:00 PM to 11:00 PM
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
                Networking Dinner & Sufi Night
              </Box>
            </Grid>
          </Grid>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  );
};

export default TimelineThree;
