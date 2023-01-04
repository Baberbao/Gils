import React from "react";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
// import { ParallaxProvider } from "react-scroll-parallax";
import { hydrate, render } from "react-dom";
import LoadingSuspence from "./LoadingSuspence";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
const renderLoader = () => <LoadingSuspence />;

// ReactDOM.render(
const Wraper = (
  <>
    <ToastContainer
      style={{ zIndex: 100000000000 }}
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Suspense fallback={renderLoader()}>
          {" "}
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(Wraper, rootElement);
} else {
  render(Wraper, rootElement);
}

//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
