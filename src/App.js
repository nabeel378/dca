import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import "./assets/css/bootstrap.min.css"
import "./assets/css/template-intro-video.min.css"
import { Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({

  screen1Content: {
    color: "black",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  heading: {
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: ".19px",
    fontSize: "2.375rem",
    margin: 0,
    color: "#3c3c3c",
  },
  marketingPageButton: {
    borderRadius: "1.5rem",
    alignItems: "center",
    padding: "0 1.75rem",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "7px",
    marginLeft: "2px",
    background: "linear-gradient(rgb(2,136,209) 0%,rgb(3,169,244)  100%) 0% 0% no-repeat transparent",
    width: "8vw",
    height: "2.2rem",
    fontSize: "0.6rem",
    textAlign: "center"
  },
  belowHeadingText: {
    marginBottom: "1.5rem",
    lineHeight: "1.5",
    display: "block",
    textAlign: "left",
    fontWeight: "400",
    opacity: ".7",
    letterSpacing: "0",
    color: "#312e35",
    fontSize: "1.375rem",
    maxWidth: "75%"
  }
}))

function App() {
  const { marketingPageButton, belowHeadingText, heading } = useStyles();

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobile(true)
        : setMobile(false)
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div className="App">
      <Header />
    <Main/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />  <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />  <br />  <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />  <br />  <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
