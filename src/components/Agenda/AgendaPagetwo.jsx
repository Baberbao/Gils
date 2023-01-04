import React from "react";

import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

import s7 from "./assets/s7.png";
import mike from "./assets/mike.png";
import Stephen from "./assets/Stephen.png";
import Tayyab from "./assets/Tayyab.png";
import RohanAsif from "./assets/RohanAsif.png";
import JohnFernández from "./assets/JohnFernández.png";
import KhurramShaikh from "./assets/KhurramShaikh.png";
import LEOHIlse from "./assets/LEOHIlse.png";
import SyedNadeem from "./assets/SyedNadeem.png";
import Saerdar from "./assets/Saerdar.png";
import Vladimira from "./assets/Vladimira.png";
import alihisham from "./assets/alihisham.png";
import imgone from "./assets/imgone.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

const SimpleTitle = ({ time, text, text2 }) => {
  return (
    <Grid container>
      <Grid item md={3} mt={4} xs={12}>
        <Box
          sx={{
            background: "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",
            py: "30px",
            display: "flex",
            height: "100%",
            flexDirection: "column",
            lineHeight: "34.86px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { md: "30px", xs: "20px" },
              px: { md: "60px", xs: "0px" },
              textAlign: { xs: "center", md: "left" },
              fontWeight: 500,
            }}
          >
            {time}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={9} mt={4} xs={12}>
        <Box
          sx={{
            background: "#27043F",
            px: { md: "30px", xs: "0px" },
            py: { md: "50px", xs: "50px" },
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              fontFamily: "Inter",
              color: "white",

              paddingLeft: { md: "100px", xs: "0px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {text}
          </Typography>
          {text2 && (
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 400,
                fontFamily: "Inter",
                color: "white",

                paddingLeft: { md: "100px", xs: "0px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {text2}
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

const SingleImagePanel = ({ time, type, title, img, name, occupation }) => {
  return (
    <Grid container>
      <Grid item md={3} mt={4} xs={12}>
        <Box
          sx={{
            background: "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",
            py: { md: "110px", xs: "45px" },
            display: "flex",
            flexDirection: "column",
            height: "100%",

            lineHeight: "34.86px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontWeight: 500,
              fontSize: { md: "30px", xs: "20px" },
              px: { md: "60px", xs: "0px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {time}
          </Typography>
        </Box>
      </Grid>
      <Grid item md={9} mt={4} xs={12}>
        <Box
          sx={{
            background: "#27043F",
            px: { md: "30px", xs: "0px" },
            py: "30px",
            height: "100%",
          }}
        >
          <Box textAlign={"center"}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                fontFamily: "Inter",
                color: "white",
                paddingLeft: { md: "100px", xs: "0px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {type}
            </Typography>

            {title && (
              <Typography
                sx={{
                  fontSize: { md: "24px", xs: "24px" },
                  fontWeight: 400,
                  fontFamily: "Inter",
                  color: "white",
                  paddingLeft: { md: "100px", xs: "0px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {title}
              </Typography>
            )}
          </Box>

          <Grid
            container
            sx={{
              textAlign: "center",
              marginTop: { md: "5px", xs: "10px" },
            }}
          >
            <Grid item md={6} xs={11}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    paddingLeft: "20px",
                    mt: "-20px",
                  }}
                >
                  <LazyLoadImage src={imgone} alt="keynote" />
                </Box>

                <Box>
                  <LazyLoadImage
                    src={img}
                    alt=""
                    style={{
                      width: "35%",

                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      fontFamily: "Inter",
                    }}
                  >
                    {name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 300,
                      fontFamily: "Inter",
                    }}
                  >
                    {occupation}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} xs={2}></Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default function AgendaPagetwo() {
  const mobile = useMediaQuery("(max-width:650px)");
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginBottom: "40px",
        }}
      >
        <SimpleTitle time=" 09:00 AM - 09:40 AM" text="Morning Tea" />
        {/* // greeting  */}

        <SimpleTitle time="09:40 AM - 09:50 AM" text=" Greetings" />

        {/* // National Anthem */}

        <SimpleTitle time="  09:50 AM - 10:00 AM" text=" National Anthem" />

        {/* // Keynote  */}
        {/* <SimpleTitle time="10:00 AM - 10:15 AM" text="Keynote (Day-2)" /> */}

        <SingleImagePanel
          time="10:00 AM - 10:15 AM"
          name="Syed Nadeem Hussain"
          img={SyedNadeem}
          occupation="Chairman @ Pakistan Fintch Network"
          type="Keynote (Day-2)"
        />

        {/* // panelDissussion  */}
        <SimpleTitle
          time="10:15 AM - 10:30 AM"
          text="Speaker Session"
          text2="Defi: global Regulation Trends in thr Decentralized World"
        />

        {/* <SingleImagePanel
          time="10:15 AM - 10:30 AM"
          name=" Speaker Session"
          //  img={s1}
          occupation="Chairman @ Pakistan Fintch Network"
          type="Speaker Session"
        /> */}

        {/* // Evloution  */}
        {/* <SimpleTitle
          time="10:30 AM - 10:45 AM"
          text="Speaker Session"
          text2="Evelution of Virtual Assets Regulations"
        /> */}
        <SingleImagePanel
          time="10:30 AM - 10:45 AM"
          name="Sardar Ikram Ullah Niyazi"
          img={Saerdar}
          occupation="Deputy Director @ Special Technology Zones Authority (STZA) -Cabinet Divsion"
          type="Speaker Session"
        />

        <SingleImagePanel
          time="10:45 PM-11:00 PM"
          name="Meike Krautscheid"
          img={mike}
          occupation="CEO @ blockXspace"
          type="Speaker Session"
        />

        {/* // Digital Identity  */}

        <SingleImagePanel
          time="11:00 AM - 11:15 AM"
          name="Leo Hilse"
          img={LEOHIlse}
          occupation="Founder @ STYLE Protocol"
          type="Speaker Session"
        />
        {/* <SimpleTitle
          time="11:00 AM - 11:15 AM"
          text="Speaker Session"
          text2="Digital Identity & Trust"
        /> */}

        {/* //moving towards  */}

        <SimpleTitle
          time="11:15 AM - 11:35 AM"
          text="Penel Discussion"
          text2="Moving Towards the Tokenized Future"
        />

        {/* //global  */}

        <SingleImagePanel
          time="11:35 AM - 11:55 AM"
          name="Stephen Sunday"
          img={Stephen}
          occupation="CEO @ Kusuconsult"
          type="Speaker Session"
        />

        {/* //unleashing  */}

        <SingleImagePanel
          time="11:55 AM - 12:10 PM"
          name="Engr. Muhammad Tayyab HASHMI"
          img={Tayyab}
          occupation="Deputy Director @ NITB, Ministry of IT & Telecommunication."
          type="Speaker Session"
        />

        {/* //currenices  */}

        <SingleImagePanel
          time="12:10 AM - 12:30 AM"
          name="Rohan Asif"
          img={RohanAsif}
          occupation="Community Manager @ Binance"
          type="Speaker Session"
        />

        {/* //lunch  */}

        <SimpleTitle time="12:30 PM - 02:00 PM" text="Lunch Break" />

        {/* //metaverse  */}

        <SingleImagePanel
          time="02:00 PM - 02:15 PM"
          name="John Fernández"
          img={JohnFernández}
          occupation="Metaverse Speaker @ Ready For Metaverse"
          type="Speaker Session"
        />

        <SingleImagePanel
          time="02:15 PM - 02:30 PM"
          name="Khurram Shaikh"
          img={KhurramShaikh}
          occupation="Co Founder & CEO @ Meta League Tech Pvt Ltd."
          type="Speaker Session"
        />

        {/* //Educating  */}

        <SimpleTitle
          time="02:30 PM - 02:50 PM"
          text="Penel Discussion"
          text2="Educating Brands on NFTs: Massive Potential for Brand Building"
        />

        {/* //Gaming  */}

        <SimpleTitle
          time="02:50 PM - 03:10 PM"
          text="Fireside Chat"
          text2="The Impact of Blockchain in Gaming Industry"
        />
        <SimpleTitle time="03:10 PM - 03:20 PM" text="Award Activity" />

        {/* //inspiring Fire Talk  */}

        <SimpleTitle
          time="03:20 PM - 03:35 PM"
          text="Quick Fire Talk"
          text2="Inspiring Fire Talk With"
        />

        {/* women in web3 space  */}

        <SimpleTitle
          time="03:35 PM- 03:55 PM"
          text="Panel Discussion"
          text2="Youth & Startups"
        />

        {/* //batool  */}

        <SingleImagePanel
          time="03:55 PM- 04:10 PM"
          title="All you need to know about NFT"
          name="Batool Aamir"
          img={s7}
          occupation="CEO @ Oval NFT "
          type="Speaker Session"
        />

        <SimpleTitle time="04:10 PM - 04:20 PM" text="Award Activity" />

        {/* <SimpleTitle
          time="04:20 PM - 04:40 PM"
          text="Panel Discussion"
          text2="Challenges : Startup Ecosystem in Pakistan"
        /> */}

        <SingleImagePanel
          time="04:20 PM - 04:40 PM"
          title="Challenges : Startup Ecosystem in Pakistan"
          name="Ali Hisham Malik"
          img={alihisham}
          occupation="CEO @ Arkhitech"
          type="Panel Discussion"
        />

        {/* <SimpleTitle
          time="04:40 PM - 04:55 PM"
          text="Fireside Chat"
          text2="Startup: Scaling, Expansion & Growth Strategies"
        /> */}
        <SingleImagePanel
          time="04:40 PM - 04:55 PM"
          name="Vladimira Briestenska "
          img={Vladimira}
          occupation="Founder @ Neem"
          type="Fireside Chat"
        />

        {/* //the world  */}

        <SimpleTitle
          time="04:55 PM - 05:10 PM"
          text="Speaker Session"
          text2="The World of Endless Opportunities"
        />

        <SimpleTitle
          time="05:10 PM - 05:30 PM"
          text="Closing Ceremony & Award Activity"
        />
      </Container>
    </>
  );
}
