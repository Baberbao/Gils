import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import sponserSide from "./assets/sponserSide.png";
import bg1 from "./assets/bg1.webp";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";
import p7 from "./assets/p7.png";
import p8 from "./assets/p8.png";
import p10 from "./assets/p10.png";
import p11 from "./assets/p11.png";
import p12 from "./assets/p12.png";
import ar from "./assets/ar.png";
import contentArcade from "./assets/contentArcade.png";
import craftToo from "./assets/craftToo.png";
import daftarkhwan from "./assets/daftarkhwan.png";
import eba from "./assets/eba.png";
import optimizationCouch from "./assets/optimizationCouch.png";
import fastIsb from "./assets/fastIsb.png";
import nust from "./assets/nust.png";

import Heading from "../Heading/Heading";

const Section = ({ heading, array, back }) => {
  return (
    <>
      <Box py="20px">
        {heading === "Sponsors" ? (
          <Heading title={"Sponsor & Partners"} back={"Sponsors"} />
        ) : (
          <Typography
            textAlign="center"
            sx={{
              fontWeight: 700,
              fontSize: { md: "45px", xs: "30px" },
              color: "#FFFFFF",
            }}
          >
            {heading}
          </Typography>
        )}
      </Box>

      <Grid container justifyContent={"center"} spacing={5}>
        {array.map((items, i) => {
          return (
            <Grid key={i} item md={3} sm={4} xs={12}>
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <LazyLoadImage src={items.logo} alt="logo" width="90%" />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

const Sponcer = [
  {
    logo: craftToo,
    text: "Community Partner",
  },
  {
    logo: contentArcade,
    text: "Community Partner",
  },
];
const acadmicPartner = [
  {
    logo: fastIsb,
    text: "Academic Partner",
  },
  {
    logo: nust,
    text: "Academic Partner",
  },
  {
    logo: optimizationCouch,
    text: "Community Partner",
  },
];

const ticktingPartner = [
  {
    logo: p12,
    text: "Ticketing Partner",
  },
];

const mediaPartners = [
  {
    logo: p2,
    text: "Media Partner",
  },

  {
    logo: p10,
    text: "Media Partner",
  },
];

const successPartner = [
  {
    logo: p1,
    text: "Success Partner",
  },
  {
    logo: ar,
    text: "Community Partner",
  },
];
const communityPartner = [
  {
    logo: p3,
    text: "Community Partner",
  },
  {
    logo: p4,
    text: "Community Partner",
  },
  {
    logo: p7,
    text: "Community Partner",
  },
  {
    logo: p8,
    text: "Community Partner",
  },
  {
    logo: p11,
    text: "Community Partner",
  },
  {
    logo: p5,
    text: "Community Partner",
  },

  {
    logo: daftarkhwan,
    text: "Community Partner",
  },
  {
    logo: eba,
    text: "Community Partner",
  },
];

const Sponser = () => {
  // const matches = useMediaQuery("(max-width:700px)");

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  // function SampleNextArrow(props) {
  //   const { className, onClick } = props;
  //   return (
  //     <LazyLoadImage
  //       src={right}
  //       style={{
  //         width: matches ? "45px" : "64px",
  //         height: matches ? "45px" : "64px",
  //         zIndex: "10000",
  //         marginRight: "-25px",
  //       }}
  //       className={className}
  //       onClick={onClick}
  //       alt=""
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, onClick } = props;
  //   return (
  //     <LazyLoadImage
  //       src={left}
  //       style={{
  //         width: matches ? "45px" : "64px",
  //         height: matches ? "45px" : "64px",
  //         zIndex: "10000",
  //         marginLeft: "-25px",
  //       }}
  //       className={className}
  //       onClick={onClick}
  //       alt=""
  //     />
  //   );
  // }

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   autoplay: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,

  //   initialSlide: 0,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   // fade: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 0,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  // let companies = (logo) => (
  //   <Grid
  //     item
  //     md={3}
  //     sm={6}
  //     xs={12}
  //     sx={{ display: "flex", justifyContent: "center" }}
  //   >
  //     <Box
  //       sx={{
  //         //   backgroundColor: "#fff",
  //         width: "244px",
  //         height: "250px",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         color: "white",
  //         fontWeight: "bold",
  //         fontSize: { md: "70px", xs: "50px" },
  //         textAlign: "center",
  //         border: "1px solid white",
  //       }}
  //     >
  //       {/* <img src={logo} alt="logo" style={{width:'100%',height:'100%'}} /> */}
  //       TBA
  //     </Box>
  //   </Grid>
  // );

  // let companiesPartners = (logo, text) => (
  //   <Box
  //     sx={{
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       textAlign: "center",
  //       pl: "20px",
  //       ml: { sm: "25px", xs: "35px" },
  //     }}
  //   >
  //     <img src={logo} alt="logo" style={{ width: matches ? "70%" : "80%" }} />
  //     <Typography
  //       sx={{ mr: { sm: "70px", xs: "90px" }, mt: "20px", fontWeight: 700 }}
  //       fontSize="20px"
  //     >
  //       {text}
  //     </Typography>
  //   </Box>
  // );

  return (
    <Box ref={ref}>
      {inView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundImage: `url(${bg1})`,
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat, no-repeat",
              backgroundSize: "cover",
              py: { md: "50px", xs: "20px" },
              position: "relative",
              overflowX: "hidden",
            }}
            id="sponser"
          >
            <LazyLoadImage
              src={sponserSide}
              alt="Our Sponsers"
              style={{ position: "absolute", zIndex: "-2" }}
            />

            <Container maxWidth="lg">
              <Section heading={"Sponsors"} array={Sponcer} back={"Sponsors"} />
              <Section
                heading={"Success Partners "}
                array={successPartner}
                back={"Success"}
              />
              <Section
                heading={"Ticketing Partners "}
                array={ticktingPartner}
                back={"Ticketing"}
              />
              <Section
                heading={"Academic Partners "}
                array={acadmicPartner}
                back={"Academic"}
              />
              <Section
                heading={"Media Partners "}
                array={mediaPartners}
                back={"Media"}
              />
              <Section
                heading={"Community Partners "}
                array={communityPartner}
                back={"Community"}
              />
            </Container>
          </Box>
        </motion.div>
      ) : (
        <>
          {" "}
          <Box height={"500px"}> </Box>{" "}
        </>
      )}
    </Box>
  );
};

export default Sponser;
