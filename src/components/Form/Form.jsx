import React, { useState } from "react";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import futurefest from "./assests/futurefest2023.webp";
import { ToastNotify } from "../../toast";
import axios from "axios";
import { url } from "../../url";
import Loading from "../../loading";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const inputstyled = {
  padding: "10px",
  fontSize: "12px",
  width: "80%",
  margin: "5px",
  border: "1px solid black",
};
function Form() {
  const matches = useMediaQuery("(max-width:700px)");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [loading, setloading] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });

  const handlePreRegister = async () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.length < 3) {
      setAlertState({
        open: true,
        message: "Name should be at least 3 characters long",
        severity: "error",
      });
    } else if (!email.match(mailformat)) {
      setAlertState({
        open: true,
        message: "Invalid email address",
        severity: "error",
      });
    } else if (phone.length < 11) {
      setAlertState({
        open: true,
        message: "Phone should be at least 11 characters",
        severity: "error",
      });
    } else {
      try {
        setloading(true);
        let response = await axios.post(`${url}preregisterRouter/preregister`, {
          name,
          email,
          phone,
        });
        console.log(response);
        setAlertState({
          open: true,
          message: `Successfully registered`,
          severity: "success",
        });
        setloading(false);
      } catch (error) {
        console.log(error);
        setAlertState({
          open: true,
          message: "Resgistartion failed",
          severity: "error",
        });
        setloading(false);
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Loading loading={loading} />
      <Box sx={{ py: 8 }}>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box width="90%">
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                py: 1,
                lineHieght: "30px",
              }}
            >
              Global Innovation & Leadership Summit 2022
            </Typography>
            <Box sx={{ py: 2 }}>
              <LazyLoadImage
                src={futurefest}
                alt="Gills"
                style={{
                  width: "100%",
                  maxWidth: "1000px",
                  position: "relative",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                py: 3,
                lineHieght: "30px",
              }}
            >
              Pre-Registration GILS'22
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                py: 1,
                lineHieght: "28px",
              }}
            >
              We have limited seats. So be the first to grab your seat in this
              Global Innovation & Leadership Summit 2022.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                py: 4,
              }}
            >
              <input
                type="text"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                placeholder="Name*"
                style={inputstyled}
              />

              <input
                type="text"
                placeholder="Email address*"
                onChange={(e) => setemail(e.target.value)}
                style={inputstyled}
              />
              <input
                type="text"
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                placeholder="Phone number*"
                style={inputstyled}
              />

              {/* <CustomPhoneInput number={phone} setnumber={setphone} /> */}

              <Box
                onClick={handlePreRegister}
                width={{ md: "300px", xs: "160px" }}
                height="42px"
                borderRadius="0px"
                sx={{
                  mt: 2,
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
                style={{ zIndex: 1, textAlign: "center" }}
              >
                <span style={{ marginTop: matches ? "-2px" : null }}>
                  Pre-Register GILS"2022
                </span>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Form;
