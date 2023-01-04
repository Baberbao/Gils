import React from "react";
import { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import LoadingSuspence from "./LoadingSuspence";
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";

const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Details = lazy(() => import("./components/Details/Details"));
const Sponser = lazy(() => import("./components/sponsers/Sponser"));
const Footer = lazy(() => import("./components/Footer"));
const AgendAndSpeakers = lazy(() =>
  import("./components/AgendaAndSpeakers/AgendAndSpeakers")
);
const Conference = lazy(() => import("./components/Conference/Conference"));
const HeroSection = lazy(() => import("./components/AboutEvent/HeroSection"));
const COnferenceForYou = lazy(() =>
  import("./components/AboutEvent/COnferenceForYou")
);
const Tickets = lazy(() => import("./components/sponsers/Tickets"));
const Speakers = lazy(() => import("./components/SpeakersPage/Speakers"));
const FAQSpage = lazy(() => import("./components/FAQS/Faqspages"));
const Organizer = lazy(() => import("./components/Organizer/Organizer"));
const Oppertunity = lazy(() => import("./components/Opportunity/Oppertunity"));
const PreRegister = lazy(() => import("./components/preRegister/PreRegister"));
const Speakerbio = lazy(() => import("./components/SpeakersPage/Speakerbio"));
const AgendaPanel = lazy(() => import("./components/Agenda/AgendaPanel"));
const structureData = () => {
  let data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Global Innovation and Leadership Summit 2022",
    description:
      "Global Innovation & Leadership Summit 2022 is two days livewire event in Capital of Pakistan, ISLAMABAD, serving as a meeting point for the world’s most disruptive technology revolution & trends. The agenda of GILS'22 includes keynote sessions, expert panels, workshops, and fireside chats all aimed towards providing access and insights into the growing Web3.O space, blockchain and metaverse technology revolution with startup ecosystem penetrations in Pakistan.",
    startDate: "2022-12-03",
    endDate: "2022-12-04",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    location: [
      {
        "@type": "VirtualLocation",
        url: "https://www.gils22.com/",
      },
      {
        "@type": "Place",
        name: "Jinnah Convention Center",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Islamabd",
          postalCode: "44030",
          addressCountry: "PK",
        },
      },
    ],
    performer: {
      "@type": "PerformingGroup",
      name: "Muhammad Suleman",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Standard Pass",
        price: "",
        priceCurrency: "PKR",
        validFrom: "",
        url: "https://bookme.pk/events/global-innovation-leadership-summit-2022",
        availability: "",
      },
      {
        "@type": "Offer",
        name: "Executive Pass",
        price: "",
        priceCurrency: "PKR",
        validFrom: "",
        url: "https://bookme.pk/events/global-innovation-leadership-summit-2022",
        availability: "",
      },
    ],
  };
  return JSON.stringify(data);
};

const renderLoader = () => (
  <Box
    sx={{
      width: "100vh",
      height: "100vh",
    }}
  >
    <LoadingSuspence />
  </Box>
);

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <meta
                  name="keywords"
                  content="Web 3 summit, Blockchain Summit, leadership summit , Innovative Summit"
                />

                <meta
                  name="description"
                  content="Innovating the Digital World through WEB 3.0 & Blockchain. BlocTech Solution is hosting the global innovation and leadership summit 2022 1st week of December 2022 in Islamabad, Pakistan."
                />
                <link rel="canonical" href="https://www.gils22.com/" />
                <meta
                  name="title"
                  content="Global Innovation & Leadership Summit 2022 | Web3.0 | Islamabad, Pakistan"
                />
                <title>
                  Global Innovation & Leadership Summit 2022 | Web3.0 |
                  Islamabad, Pakistan
                </title>
                <script type="application/ld+json">{structureData()}</script>
              </Helmet>
              <Box display="none" component="h1">
                The Upcoming Revolution of Web3 & Decentralization
              </Box>
              <Suspense fallback={renderLoader()}>
                <Home />
                {/* <Suspense fallback={renderLoader()}> */}
                <About />
                {/* </Suspense> */}

                <Details />
                <AgendAndSpeakers />
                <PreRegister />
                <Sponser />
                <Oppertunity />
                <Tickets />
                <Organizer />
              </Suspense>
              {/* <Footer /> */}
            </>
          }
        />
        <Route
          path="/speakers/"
          element={
            <>
              <Suspense fallback={renderLoader()}>
                <Speakers />
              </Suspense>
            </>
          }
        />
        <Route
          path="/about-event/"
          element={
            <>
              <Helmet>
                <meta
                  name="keywords"
                  content="web 3.0, metaverse, innovations summit, Blockchain summit"
                />
                <meta
                  name="description"
                  content="GILS'22 is all about bringing WEB3.0 Ecosystem. Raising awareness of decentralized networks of Blockchains including DEFI, NFTs and how it makes data secured and open to public."
                />
                <link rel="canonical" href={window.location.href} />
                <meta
                  name="title"
                  content="About Summit | Global Innovation & Leadership Summit 2022"
                />
                <title>
                  About Summit | Global Innovation & Leadership Summit 2022
                </title>
                {/* <script type="application/ld+json">{structureData()}</script> */}
              </Helmet>
              <Box display="none" component="h1">
                About Summit
              </Box>
              <Suspense fallback={renderLoader()}>
                <HeroSection />
                <COnferenceForYou />
                <Details />
                <Conference />
              </Suspense>
              {/* <Sponser />
							<Tickets />
							<Organizer/> */}
            </>
          }
        />
        <Route
          path="/faqs/"
          element={
            <>
              <Helmet>
                <meta name="keywords" content="GILS22 FAQs" />
                <meta
                  name="description"
                  content="Free to ask any queries related to GILS22. Just visit the website. Either you have questions related to Blockchain or WEB 3.0 or Global Summit, Feel free to drop us an email."
                />
                <link rel="canonical" href={window.location.href} />
                <meta
                  name="title"
                  content="Frequently Asked Questions | GILS22"
                />
                <title>Frequently Asked Questions | GILS22</title>
                {/* <script type="application/ld+json">{structureData()}</script> */}
              </Helmet>
              <Box display="none" component="h1">
                FAQs
              </Box>
              <Suspense fallback={renderLoader()}>
                <FAQSpage />
              </Suspense>
            </>
          }
        />

        <Route
          path="/agenda/"
          element={
            <>
              <Helmet>
                <meta
                  name="keywords"
                  content="Blockchain Summit, Innovate Future, Disruption of Blockchain, WEB 3.0"
                />
                <meta
                  name="description"
                  content=" GILS'22 - Main agenda is to Raise Awareness of Blockchain, WEB 3, NFTs, and Fintech. BlocTech Solutions is conducting this summit for Youth and Businesses Startups."
                />
                <link rel="canonical" href={window.location.href} />
                <meta
                  name="title"
                  content="Agenda | WEB 3.0 - Blockchain - Fintech - Startups | GILS22  "
                />
                <title>
                  Agenda | WEB 3.0 - Blockchain - Fintech - Startups | GILS22{" "}
                </title>
                {/* <script type="application/ld+json">{structureData()}</script> */}
              </Helmet>
              <Box display="none" component="h1">
                Agenda - Connecting To Future Revolution of Web3.0
              </Box>
              <Suspense fallback={renderLoader()}>
                <AgendaPanel />
              </Suspense>
            </>
          }
        />

        <Route
          path="/speakers/:name/"
          element={
            <>
              <Suspense fallback={renderLoader()}>
                <Speakerbio />
              </Suspense>
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
