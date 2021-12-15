import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import {Button} from '@material-ui/core'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const heading1 = {
  color: '#fff',
  marginLeft: '2rem',
  marginRight: '70rem',
  fontSize: '2rem',
  height: '80px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const heading2 = {
    color: '#fff',
    marginLeft: '.5rem',
    fontSize: '2rem',
    height: '80px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

const SidebarWrap = styled.div`
  width: 100%;
`;

const logOut = () => {
  localStorage.removeItem("authToken");
}


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1 style={heading1}>CP-Wars</h1>
          <Button variant="contained" onClick={logOut}>
            <a href="/" >
            Log Out
            </a>
          </Button>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
              <h1 style={heading2}>CP-Wars</h1>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;