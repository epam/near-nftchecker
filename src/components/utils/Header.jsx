import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import NearLogo from 'url:../../static/images/near_logo.svg';
import NearLogoIcon from 'url:../../static/images/near_logo_icon.svg';

import HeaderNetworkDropdown from './HeaderNetworkDropdown';

const Header = () => {
  return (
    <Container fluid className='header-container'>
      <Row noGutters>
        <Col xs='12' md='auto' className='align-self-center'>
          <Row noGutters className='header-main-bar'>
            <Col md='6' className='d-none d-md-block d-lg-block'>
              <a href='/'>
                <img className='near-main-logo' src={NearLogo} alt='' />
              </a>
            </Col>

            <Col xs='2' className='d-md-none text-left'>
              <a href='/'>
                <img className='near-main-logo' src={NearLogoIcon} alt='' />
              </a>
            </Col>

            <Col xs='8' md='2' className='align-self-center text-center'>
              <HeaderNetworkDropdown />
            </Col>
          </Row>
        </Col>
      </Row>
      <style jsx global>{`
        .header-container {
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .near-main-logo {
          width: 120px;
          height: 72px;
          padding: 6px;
        }

        .near-main-mobile-logo {
          width: 48px;
        }

        .header-main-bar {
          padding: 3px 16px 4px 6px;
        }

        .header-container .mobile-nav-bar .mobile {
          margin: 8px 0 0 0;
        }

        .search-box-column > .search-box {
          padding: 0 16px;
        }

        .header-home,
        .header-home:hover {
          font-weight: 500;
          color: #000000;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 0 14px 0;
          }
        }
      `}</style>
    </Container>
  );
};

export default Header;
