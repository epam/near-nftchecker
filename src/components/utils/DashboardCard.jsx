import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DashboardCard = ({ className, icon, title, headerRight, children, isLoading }) => (
  <Row noGutters className={`dashboard-card ${className || ''}`}>
    <Col xs='12'>
      <Row className='dashboard-card-header'>
        <Col>
          <img src={icon} className='dashboard-icon' alt='dashboard icon' />
          {title}
        </Col>
        <Col xs='auto' className='dashboard-card-header-right'>
          {headerRight}
        </Col>
      </Row>
    </Col>
    {isLoading ? (
      <Col xs='12' md='12' className='ml-auto my-4 card-cell-text text-center'>
        <Spinner animation='border' variant='secondary' />
      </Col>
    ) : (
      <Col xs='12'>{children}</Col>
    )}
    <style jsx global>{`
      .dashboard-card {
        background: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        padding: 3px 14px;
      }

      .dashboard-card-header {
        font-weight: 900;
        font-size: 20px;
        line-height: 22px;
        padding: 24px 10px;
        border-bottom: 2px solid #f1f1f1;
      }

      .dashboard-card-header-right {
        font-weight: 500;
        font-size: 14px;
      }

      .dashboard-icon {
        width: 24px !important;
        margin-right: 8px;
      }

      @media (max-width: 415px) {
        .dashboard-card {
          box-shadow: none;
          border-radius: 0;
          width: 100%;
        }

        .dashboard-card-header {
          padding: 17px 8px;
        }
      }
    `}</style>
  </Row>
);

DashboardCard.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  headerRight: PropTypes.element,
  children: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default DashboardCard;
