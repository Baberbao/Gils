import React from "react";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Paper } from "@mui/material";
import logo from "../images/logo.png";
import Hamburger from "hamburger-react";
import { HashLink } from "react-router-hash-link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: " linear-gradient(180deg, #02C1C5 0%, #1064CE 100%) !important",
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});

export default function Header() {
  const [isOpen, setOpen] = React.useState(false);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setOpen(open);
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-20} display="flex" justifyContent="center">
        <LazyLoadImage width="100px" src="/logo.png" alt="" />
      </Box>
      <List>
        {[
          { title: "About ", path: "/about-event/" },
          { title: "Agenda", path: "/agenda/" },
          { title: "Speakers", path: "/#speaker" },
          { title: "Sponsers", path: "#" },
          { title: "FAQs", path: "/faqs/" },
        ].map((data, index) => (
          <HashLink to={data.path} style={{ textDecoration: "none" }}>
            <ListItem
              button
              style={{
                justifyContent: "center",
                borderBottom: "1px solid #bbb8b8",
              }}
              key={index}
            >
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                primary={data.title}
              />
            </ListItem>
          </HashLink>
        ))}
      </List>
      <a
        href="https://bookme.pk/events/global-innovation-leadership-summit-2022"
        smooth
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <Box mb={1} display="flex" justifyContent="center">
          <Box
            width="130px"
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
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#ffffff"
            fontWeight="500"
            fontSize="16px"
            style={{ zIndex: 1 }}
          >
            GET YOUR PASS
          </Box>
        </Box>
      </a>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: "transparent",
          zIndex: "100px",
        }}
        width="100%"
        // pt={3}
      >
        <Container maxWidth="xl" id="header">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pl={matches ? 0 : 5}
            pr={matches ? 0 : 5}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // flexBasis="20%"
            >
              <HashLink
                to="/"
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#000000",
                  fontSize: "20px",
                }}
              >
                <LazyLoadImage
                  src={logo}
                  width={matches1 ? "150px" : "273px"}
                  alt=""
                />
              </HashLink>
            </Box>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Hidden mdDown>
                  <HashLink
                    to="/about-event/"
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={6}
                      component={"h4"}
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      About
                    </Box>
                  </HashLink>
                  <HashLink
                    to="/agenda/"
                    smooth
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={6}
                      component={"h4"}
                      zIndex="1"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      Agenda
                    </Box>
                  </HashLink>

                  <HashLink
                    to="/speakers/"
                    smooth
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={6}
                      component={"h4"}
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      Speakers
                    </Box>
                  </HashLink>
                  <HashLink to="#" smooth style={{ textDecoration: "none" }}>
                    <Box
                      mr={6}
                      component={"h4"}
                      zIndex="1"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      Sponsors
                    </Box>
                  </HashLink>

                  <HashLink
                    to="/faqs/"
                    smooth
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      mr={6}
                      component={"h4"}
                      zIndex="1"
                      style={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      FAQs
                    </Box>
                  </HashLink>
                  <a
                    href="https://bookme.pk/events/global-innovation-leadership-summit-2022"
                    target="_blank"
                    smooth
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      width="150px"
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
                        // px: "10px",
                      }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="#ffffff"
                      fontWeight="500"
                      fontSize="16px"
                      style={{ zIndex: 1 }}
                    >
                      GET YOUR PASS
                    </Box>
                  </a>
                </Hidden>
              </Box>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                      fontSize={"16px"}
                    >
                      <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        color="white"
                      />
                    </Button>
                    <Paper style={{ background: "#1C0D38" }}>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
