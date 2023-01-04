import { Box } from "@mui/material";
import React from "react";
import Agenda from "../Agenda/Agenda";
import Speaker from "../Speaker/Speaker";
import bg from "./assets/bg.webp";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import { SignalCellularNullTwoTone } from "@mui/icons-material";

const AgendAndSpeakers = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
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
              background: `url(${bg})`,
              backgroundPosition: "top center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflowX: "hidden",
            }}
          >
            <Speaker />
            <Agenda />
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

export default AgendAndSpeakers;
