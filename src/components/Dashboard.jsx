import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Search from './utils/Search';

const Dashboard = () => (
  <Container>
    <h1 style={{ marginTop: '72px', marginLeft: '25px' }}>
      <span style={{ color: '#00C1DE' }}>Explore</span>
      <br />
      NFT contracts.
    </h1>
    <Row className='inner-content' noGutters>
      <Col xs='12' className='d-none d-md-block d-lg-block'>
        <Row noGutters className='search-wrapper'>
          <Search />
        </Row>
      </Col>
    </Row>
    <style jsx global>{`
      .inner-content {
        margin: 71px 185px;
      }

      .search-wrapper {
        margin-bottom: 50px;
      }

      h1 {
        font-size: 38px;
        line-height: 46px;
      }

      @media (max-width: 1200px) {
        .inner-content {
          margin: 32px 100px;
        }
      }

      @media (max-width: 990px) {
        .inner-content {
          margin: 32px auto;
        }
      }

      @media (max-width: 415px) {
        .container {
          padding: 0 1px 0 0;
        }

        .transaction-card {
          box-shadow: none;
        }
      }
    `}</style>
  </Container>
);

export default Dashboard;