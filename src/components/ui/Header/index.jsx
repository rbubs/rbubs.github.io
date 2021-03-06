import React from 'react';
import './Header.styles.css';
import NavMenu from '../NavMenu';
import logo from '../../../assets/img/logo.svg';

const Header = ({ handler, isBottomContent, handleIsShowBottomContent, isLandscape, address, connect }) => {
  const rootUrl = window.location.href;
  return (
    <div className="header">
      <div id="logo-wrapper">
        <a href={rootUrl} id="home-logo">
          <img className="mainLogo" src={logo} alt="logo"></img>
        </a>
      </div>
      <div id="nav-menu-wrapper">
        <NavMenu connect={connect} address={address} isLandscape={isLandscape} isBottomContent={isBottomContent} handleIsShowBottomContent={handleIsShowBottomContent}  handler={handler} />
      </div>
    </div>
  );
};

export default Header;
