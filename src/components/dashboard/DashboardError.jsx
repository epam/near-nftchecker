import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import DOMPurify from 'dompurify';

import IconContract from 'url:../../static/images/icon-contract.svg';

import DashboardCard from '../utils/DashboardCard';
import LongCardCell from '../utils/LongCardCell';

const DashboardError = ({ errorObject }) => {
  return (
    <DashboardCard icon={IconContract} title='Error' className='node-card'>
      <Row noGutters>
        {Object.entries(errorObject)
          .map(([key, value]) => [DOMPurify.sanitize(key), DOMPurify.sanitize(value)])
          .map(([key, value], index) => {
            return (
              <Col xs='6' md='12' key={index}>
                <LongCardCell title={key} text={value || ''} />
              </Col>
            );
          })}
      </Row>
      <style jsx global>{`
        .dashboard-validating-nodes-count .card-cell-text {
          color: #00c08b;
        }
      `}</style>
    </DashboardCard>
  );
};

DashboardError.propTypes = {
  errorObject: PropTypes.object.isRequired,
};

export default DashboardError;
