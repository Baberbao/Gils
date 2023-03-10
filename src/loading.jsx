// import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import Loader from "./components/Loader/Loader";
// import { InfinitySpin } from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Loading({ loading }) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading}>
        <Loader />
        {/* <InfinitySpin width="200" color="#0EB8CB" /> */}
      </Backdrop>
    </div>
  );
}
