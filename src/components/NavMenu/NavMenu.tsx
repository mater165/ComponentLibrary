import React, { ReactElement } from "react";
import { HashRouter } from "react-router-dom";
import styled, {StyledComponent} from "styled-components";
import { Apps, Lock } from "@material-ui/icons";
import Menu from "../Menu/Menu";

interface IMenu {
  name: string;
  icon?: ReactElement;
  path?: string;
  protected?: boolean;
  subMenu?: IMenu[];
}

interface Props  {
  isAuthenticated: boolean,
  userName: string,
  logo: StyledComponent<"img", any, {}, never>,
  menuItems: IMenu[]
};

const LeftContainer = styled.div`
    background-color: ${props => props.theme.sideBar.initial.bg};
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    .MuiListItemIcon-root, .MuiListItemText-root, .MuiSvgIcon-root {
      color: ${props => props.theme.sideBar.initial.color};
    }

    .privacy {
      min-height: 250px;
      margin-top: auto;
      margin-bottom: 1rem;
      display: flex;

      a {
        margin-top: auto;
        color: lightgray;
        font-size: small;
        .MuiSvgIcon-root {
          font-size: small;
        }
      }
      align-self: center;
    }
  `;

  const NavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1rem;
  `;

const NavMenu: React.SFC<Props> = ({ isAuthenticated, userName, logo, menuItems }) => {
  let authMenu = null;
  if (isAuthenticated) {
    authMenu = (
      <Menu
          menu={({
            name: userName,
            subMenu: [
              {
                name: "Sign out",
                path: "/sign-out"
              }
            ]
          })}
        />
    );
  } else {
    authMenu = (
      <>
        <Menu
          menu={({
            name: "Login",
            path: "/login"
          })}
        />
        <Menu
          menu={({
            name: "Sign Up",
            path: "/signup"
          })}
        />
      </>
    );
  }

  const pageMenu = menuItems.map((menuItem, index) => {
    return (<Menu menu={menuItem} key={index}/>);
  });

  return (
    <LeftContainer className="do-not-print">
      <HashRouter>
        <NavHeader>
          {logo}
          <Apps fontSize="large" />
        </NavHeader>
        {authMenu}
        {pageMenu}
      </HashRouter>
      <div className="privacy">
        <a target="_blank" rel="noopener noreferrer" href="https://www.ericsson.com/en/legal/privacy" data-testid="privacyLink">
          <Lock/>
          Privacy
        </a>
      </div>
    </LeftContainer>
  );
};

export default NavMenu;