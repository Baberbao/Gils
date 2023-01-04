import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bg from "./assets/bg.webp";

//tabs
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TimeLine from "./TimeLine";
import Timelinetwo from "./Timelinetwo";
import Heading from "../Heading/Heading";
import TimelineThree from "./TimelineThree";
// import { Helmet } from "react-helmet-async";

const tabsStyles = {
  "& .Mui-selected": {
    background: "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",
    boxShadow: "-2px 1px 10px rgba(2, 193, 197, 0.45)",
    color: "white !important ",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  backgroundColor: "transparent",
};

const tabStyles = {
  color: "white !important ",
  backgroundColor: "transparent",
  textTransform: "none !important ",
  p: "30px",
  fontWeight: 500,
  fontSize: { md: "20px", xs: "16px" },
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Agenda = () => {
  //tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          background: `url(${bg})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          py: { md: "50px", xs: "20px" },
          overflowX: "hidden",
        }}
        id="agenda"
      >
        <Container maxWidth="lg">
          <Box py="20px">
            <Container maxWidth="md">
              {/* <img src={agenda} width="100%" alt="" />{" "} */}
              {/* <Box py="100px"> */}
              <Heading title="Agenda" />
              {/* </Box> */}
            </Container>
          </Box>
          <Box mt={"30px"}>
            <Box
              sx={{
                background: "rgba(35, 33, 33, 0.4)",
                boxShadow: "6px -1px 12px rgba(137, 35, 189, 0.5)",
              }}
            >
              <Tabs
                value={value}
                sx={tabsStyles}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant={"scrollable"}
                scrollButtons={"on"}
              >
                <Tab
                  style={{ color: "white" }}
                  sx={tabStyles}
                  label={"DAY 1"}
                  {...a11yProps(0)}
                />
                <Tab
                  style={{ color: "white" }}
                  sx={tabStyles}
                  label={"DAY 2"}
                  {...a11yProps(1)}
                />
                <Tab
                  style={{ color: "white" }}
                  sx={tabStyles}
                  label={"Gils’22 After Party"}
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <Box>
              <TabPanel value={value} index={0}>
                {" "}
                <TimeLine />{" "}
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Timelinetwo />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <TimelineThree />
              </TabPanel>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Agenda;
