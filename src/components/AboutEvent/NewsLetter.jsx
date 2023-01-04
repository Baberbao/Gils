import {
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import text from "./assets/newsletter.png";
import input from "./assets/input.png";
import Heading from "../Heading/Heading";
import { useState } from "react";
import { ToastNotify } from "../../toast";
import axios from "axios";
import { url } from "../../url";
import { LazyLoadImage } from "react-lazy-load-image-component";

const inputStyle = {
  // maxWidth: check ? "100%" : "100%",
  width: "100%",
  fontSize: "30px",
  fontWeight: "400",
  color: "white",
  height: { md: "80px", xs: "80px" },
  fontFamily: "Roboto",
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3E0479",
    color: "white",
    height: { md: "80px", xs: "80px" },
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3E0479",
      color: "white",
      height: { md: "80px", xs: "80px" },
    },
    "&:hover fieldset": {
      borderColor: "#3E0479",
      height: { md: "80px", xs: "80px" },
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3E0479",
      height: { md: "80px", xs: "80px" },
      color: "white",
    },
  },
  input: {
    pt: { md: "20px", xs: "30px" },
    color: "white",
    fontSize: { md: "27px", xs: "16px" },
    fontWeight: "400",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "white",
    },
  },

  background: "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",
  boxShadow: "-2px 1px 10px rgba(2, 193, 197, 0.45)",
};

const NewsLetter = () => {
  const check = useMediaQuery("(max-width:700px)");

  const [email, setemail] = useState("");
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  const clickHandler = async () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      setAlertState({
        open: true,
        message: "Invalid email address",
        severity: "error",
      });
    } else {
      try {
        let response = await axios.post(`${url}newsletterRouter/newsletter`, {
          email,
        });
        // console.log(response);
        setAlertState({
          open: true,
          message: `Successfully Subscribed`,
          severity: "success",
        });
      } catch (error) {
        console.log(error);
        setAlertState({
          open: true,
          message: "Subscrition failed",
          severity: "error",
        });
      }
    }
  };

  return (
    <div>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Container maxWidth="lg">
        <Box py="40px">
          {/* <img src={text} width="100%" alt="NewsLetter" /> */}
          <Heading title="NewsLetter" back="NewsLetter" />
        </Box>
      </Container>
      <Box pt="20px">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 400,
            fontSize: { md: "35px", xs: "20px", textAlign: "center" },
          }}
        >
          Subscribe to GILS'22 newsletter, To Stay Connected.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Box pt="60px">
          <TextField
            onChange={(e) => setemail(e.target.value)}
            autoComplete="off"
            sx={inputStyle}
            id="standard-name"
            placeholder="Enter your email address"
            InputProps={{
              endAdornment: (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  pt={{ md: "10px", xs: "15px" }}
                >
                  <IconButton onClick={clickHandler}>
                    <LazyLoadImage
                      src={input}
                      width={check ? "40px" : "70px"}
                      alt="input"
                    />
                  </IconButton>
                </Stack>
              ),
            }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default NewsLetter;
