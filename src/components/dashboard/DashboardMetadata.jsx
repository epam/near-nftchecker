import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import IconContract from 'url:../../static/images/icon-contract.svg';

import DashboardCard from '../utils/DashboardCard';
import LongCardCell from '../utils/LongCardCell';
import Term from '../utils/Term';

const DashboardMetadata = ({ isLoading, metadata = {} }) => (
  <DashboardCard icon={IconContract} title='Nodes' className='node-card' isLoading={isLoading}>
    <Row noGutters>
      {Object.entries(metadata || {}).map(([key, value], index) => {
        return (
          <Col xs='6' md='12' key={index}>
            <LongCardCell
              title={
                <Term
                  title={key}
                  text={'Total number of online nodes. '}
                  // href={'https://docs.near.org/docs/validator/staking#run-the-node'}
                />
              }
              text={value}
              // href={'/nodes/online-nodes'}
            />
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

DashboardMetadata.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  metadata: PropTypes.object,
};

export default DashboardMetadata;
