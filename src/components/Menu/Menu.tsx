import React, { ReactElement, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Collapse } from "./collapse";
import { joinClass } from "./joinClass";

interface IMenu {
  name: string;
  icon?: ReactElement;
  path?: string;
  subMenu?: IMenu[];
}

interface IMenuProps extends RouteComponentProps<any> {
  menu: IMenu;
}

const Menu = withRouter(({ menu, location: { pathname } }: IMenuProps) => {
  const [open, setOpen] = useState(false);

  const isActive = (path?: string) => {
    return path && pathname.startsWith(path);
  };

  const toggleSubMenu = () => {
    if (!menu.subMenu || menu.subMenu.length < 1) {
      return;
    }

    setOpen(!open);
  };

  useEffect(() => {
    try {
      if (isActive(menu.path)/*  || menu.subMenu!.find(sm => isActive(sm.path)) */) {
        setOpen(true);
      }
    } catch (e) {
      setOpen(false);
    }
  }, [menu, pathname]);

  const SList = styled(List)`
  .MuiListItemText-root {
    margin-top: auto;
    margin-bottom: 0;
    color: lightgray;
    font-size: 12px;
    text-align: left;
  }

  .MuiListItemIcon-root {
    min-width: 30px;
    margin-bottom: 4px;
  }

  .fa {
    color: ${props => props.theme.menu.color};
  }
`;

const NestedListItem = styled(ListItem)`
  && {
    padding-left: 3rem;
  }

  &.active {
    background-color: ${props => props.theme.sideBar.highlight.bg};
    color: ${props => props.theme.sideBar.highlight.color};
  }
`;

const SLink = styled(Link)`
  &, &:hover {
    text-decoration: none;
  }
  color: ${props => props.theme.sideBar.highlight.color};
`;

  return (
    <SList data-testid={menu.name}>
      <ListItem button className={joinClass(isActive && "active")} onClick={toggleSubMenu}>
        {menu.icon && (
          <ListItemIcon>
            {menu.icon}
          </ListItemIcon>
        )}

        {menu.path ? (
          <SLink to={menu.path}>
            <ListItemText primary={menu.name}/>
          </SLink>
        ) : (
          <ListItemText primary={menu.name}/>
        )}

        <div className="ml-auto"/>
        {menu.subMenu && (open ? <Remove fontSize={"small"}/> : <Add fontSize={"small"}/>)}
      </ListItem>

      {menu.subMenu && (
        <Collapse isOpen={open}>
          <List disablePadding>
            {menu.subMenu.map((sm, smi) => (
              <NestedListItem button key={smi} className={joinClass(isActive(sm.path) && "active")} data-testid={sm.name}>
                {sm.icon && (<ListItemIcon>{sm.icon}</ListItemIcon>)}
                <SLink to={sm.path || ""}>
                  <ListItemText primary={sm.name}/>
                </SLink>
              </NestedListItem>
            ))}
          </List>
        </Collapse>
      )}
    </SList>
  );
});

export default Menu;