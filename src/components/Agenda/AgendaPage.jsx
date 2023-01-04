import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import s1 from "./assets/s1.png";
import s3 from "./assets/s3.png";
import s2 from "./assets/s2.png";
import s4 from "./assets/s4.png";
import s10 from "./assets/s10.png";
import s11 from "./assets/s11.png";
import s12 from "./assets/s12.png";
import s13 from "./assets/s13.png";
import s14 from "./assets/s14.png";
import s15 from "./assets/s15.png";
import s16 from "./assets/s16.png";
import s17 from "./assets/s17.png";

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
                fontWeight: 700,
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

const PanelDissussion = ({
  title,
  type,
  time,
  img1,
  name1,
  occupation1,
  img2,
  name2,
  occupation2,
}) => {
  return (
    <Grid container>
      <Grid item md={3} mt={4} xs={12}>
        <Box
          sx={{
            background: "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",

            py: { md: "100px", xs: "45px" },
            width: "100%",
            display: "flex",
            flexDirection: "column",

            height: "100%",
            lineHeight: "34.86px",

            // justifyContent: "center",
            // alignContent: "center",
            // alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",

              fontWeight: 500,
              //   px: "20px",
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
          <Box
            sx={{
              marginBottom: { md: "0px", xs: "30px" },
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
              {title}
            </Typography>
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
              {type}
            </Typography>
          </Box>
          {/* //imgae  */}
          <Grid container>
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                mx: "50px",
              }}
            >
              <Stack direction="row" alignItems="center">
                <Box
                  sx={{
                    paddingRight: { md: "10px", xs: "10px" },
                    mt: "-70px",
                  }}
                >
                  <LazyLoadImage src={imgone} />
                </Box>
                <Box>
                  <LazyLoadImage src={img1} width="80%" />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      fontFamily: "inter",
                      textAlign: "center",
                    }}
                  >
                    {name1}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 300,
                      fontFamily: "Inter",
                      textAlign: "center",
                    }}
                  >
                    {occupation1}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginLeft: { md: "20px", xs: "10px" },
                  }}
                ></Box>
              </Stack>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                mx: "50px",
              }}
            >
              <Stack direction="row" alignItems="center">
                <Box
                  sx={{
                    paddingRight: { md: "10px", xs: "10px" },
                    mt: "-70px",
                  }}
                >
                  <LazyLoadImage src={imgone} />
                </Box>
                <Box>
                  <LazyLoadImage src={img2} width="80%" />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 700,
                      fontFamily: "inter",
                      textAlign: "center",
                    }}
                  >
                    {name2}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: 300,
                      fontFamily: "Inter",
                      textAlign: "center",
                    }}
                  >
                    {occupation2}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginLeft: { md: "20px", xs: "10px" },
                  }}
                ></Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
const SpeakerSession = ({ time, title, occupation }) => {
  return (
    <Grid container>
      <Grid item md={3} mt={4} xs={12}>
        <Box
          sx={{
            background: "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",

            padding: "30px 0px",
            width: "100%",
            display: "flex",
            flexDirection: "column",

            height: "100%",
            lineHeight: "34.86px",

            // justifyContent: "center",
            // alignContent: "center",
            // alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "28px",
              fontWeight: 500,
              //   px: "20px",

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
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: { md: "28px", xs: "20px" },
              fontWeight: 400,
              fontFamily: "Inter",
              color: "white",

              paddingLeft: { md: "100px", xs: "0px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {occupation}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default function AgendaPage() {
  return (
    <>
      <Box pb="50px">
        {" "}
        <Container maxWidth="lg">
          <SimpleTitle time="09:00 AM - 09:30 AM" text="Morning Tea" />
          {/* // greeting  */}

          <SimpleTitle time="09:30 AM - 09:40 AM" text="Greetings" />
          {/* // National Anthem */}

          <SimpleTitle time="09:40 AM - 09:50 AM" text="National Anthem" />
          {/* // Keynote 1 */}

          <SingleImagePanel
            time="09:50 AM- 10:00 AM"
            name="M.Suleman"
            img={s1}
            occupation="Founder Gils 22"
            type="Opening Keynote"
          />

          {/* //key note 2 */}

          <SimpleTitle time="10:00 AM - 10:15 AM" text="Keynote Day 1" />
          {/* // panelDissussion  */}

          <SpeakerSession
            time="10:15 AM - 10:30 AM"
            title="Speaker Session"
            occupation="Blockchain a Game Changer for Effective Transformation"
          />

          {/* // Blockchain in pk  */}
          <SingleImagePanel
            time="10:30 AM - 10:45 AM"
            name="Ahmed Manzoor"
            img={s13}
            occupation="Blockchain in Pakistan"
            type="Speaker Session"
          />

          {/* speaker session  */}
          <SpeakerSession
            time="10:45 AM - 11:00 AM"
            title="Speaker Session"
            occupation="Government Representatives:Ministerial Address"
          />

          {/* //fireside  */}

          <SpeakerSession
            time="11:00 AM - 11:20 PM"
            title="Panel Discussion"
            occupation="How Web3 Will Disrupt the Future"
          />
          {/* //worshop  */}

          <SingleImagePanel
            time="11:20 AM- 11:35 AM"
            name="Imran Jatala"
            title="Design Thinking"
            img={s4}
            occupation="CEO @ Innovators Garage (IG)"
            type=" Speaker Session"
          />

          {/* //Role of startup */}

          <SpeakerSession
            time="11:35 AM - 12:00 PM"
            title="Fireside Chat"
            occupation=" The Role of Startups in the Global Movement"
          />
          {/* mapping  */}
          {/* <SpeakerSession
            time="12:00 PM - 12:20 PM"
            title="Panel Dissussion"
            occupation="Fintech:Mapping the Future Mobility"
          /> */}

          <PanelDissussion
            title="Panel Dissussion"
            type="Fintech:Mapping the Future Mobility"
            time="12:00 PM - 12:20 PM"
            img2={s17}
            name2="Hassan Mumel"
            occupation2="Head of Marketing @Abhi (Pvt) Ltd"
            name1="Nadeem Shaikh"
            img1={s16}
            occupation1="Founder @ Neem"
          />
          {/* // culture of startup  */}
          <SingleImagePanel
            time="12:20 PM - 12:35 PM"
            name="Saba Kalsoom"
            img={s10}
            occupation="Culture of Startup & Innovation"
            type="Speaker Session"
          />
          {/* //Lunch break  */}
          <SimpleTitle time="12:35 PM - 02:00 PM" text="Lunch Break" />
          {/* //inforainment  */}
          <SimpleTitle
            time="02:00 PM - 02:30 PM"
            text="Infotainment Activity"
          />

          {/* //speaker session and leadership  */}
          {/* <Grid container>
            <Grid item md={3} mt={4} xs={12}>
              <Box
                sx={{
                  background:
                    "linear-gradient(180deg, #8923BD 0%, #3E0479 100%)",

                  py: "30px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",

                  height: "100%",
                  lineHeight: "34.86px",

                  // justifyContent: "center",
                  // alignContent: "center",
                  // alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "white",

                    fontWeight: 500,
                    //   px: "20px",
                    fontSize: { md: "30px", xs: "20px" },
                    px: { md: "60px", xs: "0px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  02:30 PM - 02:45 PM
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
                  Speaker Session
                </Typography>
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
                  Connecting the Unconnected Path to Digital World
                </Typography>
              </Box>
            </Grid>
          </Grid> */}
          <SingleImagePanel
            time="02:30 PM - 02:45 PM"
            name="Shayan mahmuud"
            img={s11}
            occupation="Connecting the Unconnected Path to Digital World"
            type="Speaker Session"
          />
          {/* ramy  */}

          <SingleImagePanel
            time="02:45 PM - 03:00 PM"
            type="Speaker Session"
            name="Ramy AlDamati"
            occupation="CEO @ ALBRZA Global"
            img={s3}
          />
          {/* panel discussion   */}

          <PanelDissussion
            title="Panel Dissussion"
            type="The Future of Metaverse"
            time="03:00 PM- 03:20 PM"
            name1="Ahsan Imtiaz"
            img1={s2}
            occupation1="CEO @ The Cloud City Metaverse"
          />

          {/* //award  */}

          <SimpleTitle time="03:20 PM - 03:30 PM" text="Award Activity" />

          {/* design and thinking  */}

          {/* //about Nft  */}

          <PanelDissussion
            title="Panel Dissussion:Venture Capitalist's"
            type="Startup:Is the Pool of Cash for Startups Drying Up"
            time="03:30 PM - 03:50 PM"
            name1="Shoaib Akmal"
            img1={s14}
            occupation1="CEO @ Tekrowe Digital"
            img2={s15}
            name2="Imran Jatala"
            occupation2="CEO @ Innovators Garage (IG)"
          />
          {/* //award Activity  */}

          <SpeakerSession
            time="3:50 PM - 04:05 PM"
            title="Fire Talk"
            occupation=" Inspiring Quick Fire Talk"
          />
          {/* panel discussion women  */}

          <SingleImagePanel
            time="04:05 PM - 04:20 PM"
            name="Zeeshan Qedwae"
            img={s12}
            occupation="Infrastructure That Builds Investor's Confidence"
            type="Speaker Session"
          />
          {/* //spa session  */}

          {/* //note  */}
          <SimpleTitle time="04:20 PM - 05:00 PM" text="Closing Note" />
        </Container>
      </Box>
    </>
  );
}
