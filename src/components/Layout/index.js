import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

import { NavLinks } from 'constants/nav-links';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 20px;
  box-shadow: 1px 1px 5px rgba(187, 187, 187, 0.32);
`;

const NavLinkItem = styled(NavLink)`
  color: black;
  padding: 10px 10px;
  text-decoration: none;

  &.active {
    color: mediumvioletred;
  }

  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const Body = styled.div`
  padding-top: 40px;
`;

const Layout = () => {
  return (
    <div>
      <NavBar>
        {NavLinks.map(({ href, name }) => (
          <NavLinkItem key={name} to={href} end={href === '/'}>
            {name}
          </NavLinkItem>
        ))}
      </NavBar>

      <Body>
        <Outlet />
      </Body>
    </div>
  );
};

Layout.propTypes = {};

export default Layout;
