import React, {FC, useState, useEffect} from 'react'
import {AppBar, Box, Toolbar, IconButton, MenuItem, Typography, Button,Drawer, Link, makeStyles}  from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import {Link as RouterLink} from 'react-router-dom'
import './Header.css'
import {logo} from '../../constants/images'

const headersData = [
  {
    label: "Home",
    href: "/listings",
  },
  {
    label: "Services",
    href: "/mentors",
  },
  {
    label: "Vehicles",
    href: "/account",
  },
  {
    label: "Blog",
    href: "/logout",
  },
  {
    label: "Contact",
    href: "/logout",
  },
  {
    label: "Sign In",
    href: "/logout",
  },
];



const Header:FC = () => {

  const [state, setState] = useState({ mobileView: false, drawerOpen: false})

  const {mobileView, drawerOpen} = state;


  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);



  const displayDesktop = ()=>{
    return (<Toolbar className='toolbar'>
            {appLogo}
            {getMenuButtons()}
            </Toolbar>)
  }

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));


const getDrawerChoices = () => {
  return headersData.map(({ label, href }) => {
    return (
      <Link
        {...{
          component: RouterLink,
          to: href,
          color: "inherit",
          style: { textDecoration: "none" },
          key: label,
        }}
      >
        <MenuItem>{label}</MenuItem>
      </Link>
    );
  });
};

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick:handleDrawerOpen,
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
          <div className='drawerContainer'>{getDrawerChoices()}</div>
        </Drawer>
    <div>{appLogo}</div>
    </Toolbar>
      );
    };
    

  const appLogo = (
    <Typography variant="h6" component="h1" className='logocontainer'>
      <img src={logo} /> <p>Kahaya</p>
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className:'menuButton'
          }}
        >
          {label}
        </Button>
      );
    });
  };


    return (
      <header className='header'>
        <AppBar className='header'>
          {mobileView? displayMobile() : displayDesktop()}
          </AppBar>
      </header>
    )
}

export default Header
