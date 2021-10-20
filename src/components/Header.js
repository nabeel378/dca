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
} from "@material-ui/core";
import { MenuBook } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import logoImage from '../assets/images/logo.png'


const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "transparent",
    backdropFilter: "blur(10px)",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#1F86FF",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    // fontWeight: 700,
    // color: "#3F3F3F",
     float:"left",
    marginLeft: "28px",
    fontWeight: 500,
    color: "#1e1e1e",
    fontSize: "0.9rem",
    cursor: "pointer",
  },
  toolbar: {
    height: "80px !important",
    display: "flex",
    justifyContent: "space-between",
    background: "transparent",
    boxShadow: 'none'
  },
  drawerContainer: {
    padding: "20px 30px",
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
    width:"8vw",
    height: "2.2rem",
    fontSize: "0.6rem",
    textAlign: "center"
  },
  marketingPageSiginButton: {
    border:"1px solid rgb(2,136,209)",
    color:"rgb(2,136,209)",
    borderRadius: "1.5rem",
    alignItems: "center",
    padding: "0 1.75rem",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "7px",
    marginLeft: "2px",
    // background: "linear-gradient(rgb(2,136,209) 0%,rgb(3,169,244)  100%) 0% 0% no-repeat transparent",
    width:"8vw",
    height: "2.2rem",
    fontSize: "0.6rem",
    textAlign: "center"
  }
}));

export default function Header() {
  const { marketingPageSiginButton,marketingPageButton, header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const headersData = [
    {
      label: "Listings",
      href: "/listings",
    },
    {
      label: "Mentors",
      href: "/mentors",
    },
    {
      label: "My Account",
      href: "/account",
    },
    {
      label: "Log Out",
      href: "/logout",
    }, {
      label: "Get started",
      href: "/logout",
      type: "button",
      _class:marketingPageButton
  
    },
    {
      label: "Sign in",
      href: "/logout",
      type: "button",
      _class:marketingPageSiginButton
    },
  ];
  const [state, setState] = useState({
    mobileView: false,
    tableView: false,
    drawerOpen: false,
  });

  const { mobileView, tableView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      if (window.innerWidth < 994) {
        setState((prevState) => ({ ...prevState, tableView: false, mobileView: true }))
      } else if (window.innerWidth < 1200) {
        setState((prevState) => ({ ...prevState, tableView: true, mobileView: true }))
      } else {
        setState((prevState) => ({ ...prevState, tableView: false, mobileView: false }));
      }
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        <Grid container>
          <Grid item xs={1} style={{border:"0px solid red"}}></Grid>
          <Grid item xs={1} style={{border:"0px solid green"}}>
            <img src={logoImage}/>
          </Grid>

          <Grid item xs={6}style={{border:"0px solid blue",marginTop:"10px"}} >
            <div>{getLeftMenuButtons()}</div>
          </Grid>

          <Grid item xs={3} style={{border:"0px solid purple"}}>
            <div >{getMenuButtons()}
            </div>
          </Grid>
          <Grid item xs={1}style={{border:"0px solid red"}}></Grid>

        </Grid>


      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "#1F86FF",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>            <img src={logoImage}/>
</div>
        <div style={{ width: "30%" }}></div>
        <Toolbar className={toolbar}  >
          {
            tableView && <div style={{border:"0px solid red",marginLeft:"200px"}}>{getMenuButtons()}        </div>

          }



        </Toolbar>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "#3F3F3F",
            style: { textDecoration: "none", color: "#3F3F3F" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Femmec
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, _class ,type = 'anchor' }) => {
      if (type == 'anchor') {

      } else {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: _class + ' ' + 'solid-button',
            }}

          >
            {label}
          </Button>
        );
       
      }
    });
  };



  const getLeftMenuButtons = () => {
    return headersData.map(({ label, href, type = 'anchor' }) => {
      if (type == 'anchor') {

        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: RouterLink,
              className: menuButton,

            }}
            style={{fontWeight:"bold"}}
          >
            {label}
          </Button>
        );
      }
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
