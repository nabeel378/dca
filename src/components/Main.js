import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Grid,
    Link,
    MenuItem,
    Container,
  } from "@material-ui/core";
  import { MenuBook } from "@material-ui/icons";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import bannerImage from '../assets/images/Artificialintelligence-cuate.svg'

  
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
  
  export default function Main() {
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
<Container maxWidth="lg">

<section class="head-area" id="head-area" data-midnight="white">
  <div class="s-shape">
    <br /> <br /> <br /> <br /> <br /> <br /><br /> <br />
    <Grid container>
    <Grid item xs={1}></Grid>

      <Grid item xs={isMobile ? 10 : 6} style={{ color: 'white', fontSize: "30px", textAlign: "left" }}>

        <Typography variant="h1" component="h2" className={heading}>
          Smartest way to invest in crypto
        </Typography>
        <br /> 
        <span className={belowHeadingText}>Instantly invest in the best traders, custom crypto baskets and more. Stop gambling… start investing now!</span>
        <Button
          {...{
            key: 'get',
            color: "inherit",
            to: 'href',
            component: RouterLink,
            className: marketingPageButton + ' ' + 'solid-button',
          }}

        >
          get
        </Button>
      </Grid>


      {
        !isMobile && <Grid item xs={4}  style={{marginTop:"-80px"}}>
          <img src={bannerImage} style={{ width: '400px' }} />        </Grid>
      }
    </Grid>
  </div>

</section>

</Container>
    )
    }