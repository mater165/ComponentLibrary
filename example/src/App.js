import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lighten } from "polished";
import Grid from "@material-ui/core/Grid";
import { Home, LiveTv, DateRange, Settings } from "@material-ui/icons";
import { NavMenu, MyComponent, YourComponent } from "materi-components";

const THEME = {
  menu: {
    darkest: "#282B3B",
    darker: "rgb(45, 50, 68)",
    dark: lighten(0.05, "rgb(45, 50, 68)"),
    color: "white",
    shadow: "0 1px 5px rgba(0, 0, 0, 0.15)",
    height: "50px"
  },
  sideBar: {
    initial: {
      bg: "#3B4F5A",
      color: "#FFFFFF"
    },
    highlight: {
      bg: "#DC281E",
      color: "#F7D3D2"
    }
  }
};

const MENUS = [
  {
    name: "MENU-ITEM 1",
    protected: false,
    path: "/",
    icon: (<Home />)
  },
  {
    name: "MENU-ITEM 2",
    protected: false,
    path: "/menu2",
    icon: (<DateRange />)
  },
  {
    name: "MENU-ITEM 3",
    protected: false,
    path: "/menu3",
    icon: (<LiveTv />)
  },
  {
    name: "MENU-ITEM 4",
    protected: false,
    icon: (<Settings />),
    subMenu: [
      {
        name: "SUB-MENU-ITEM 1",
        path: "/submenu1"
      },
      {
        name: "SUB-MENU-ITEM 2",
        path: "/submenu2"
      }
    ]
  }
];

const Container = styled.div`
  margin: 1rem;
`;

const Logo = styled.img`
  max-width: 50px;
  height: auto;
  margin: 0.25rem;
`;

export default class App extends Component {
  render () {
    return (
      <ThemeProvider theme={THEME}>
        <Grid container wrap={"nowrap"}>
          <Grid item sm={2}>
            <NavMenu 
              isAuthenticated 
              userName="mattias" 
              logo={<Logo src={require("./images/redbee.logo.png")} />} 
              menuItems={MENUS} />
          </Grid>
          <Grid item sm={10}>
            <Container>
              <div>MyComponent:</div>
              <MyComponent text="Cool text" />
            </Container>
            <Container>
              <div>YourComponent:</div>
              <YourComponent />
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  }
}
