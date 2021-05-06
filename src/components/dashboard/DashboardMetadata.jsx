import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import IconContract from 'url:../../static/images/icon-contract.svg';

import DashboardCard from '../utils/DashboardCard';
import LongCardCell from '../utils/LongCardCell';
import Term from '../utils/Term';

import { nftContractMetadataStandard } from '../../constants/nftContract';

const DashboardMetadata = ({ isLoading, metadata = {} }) => (
  <DashboardCard icon={IconContract} title='Contract Metadata' className='node-card' isLoading={isLoading}>
    <Row noGutters>
      {Object.entries(metadata || {}).map(([key, value], index) => {
        return (
          <Col xs='6' md='12' key={index}>
            <LongCardCell
              title={<Term title={key} text={nftContractMetadataStandard[key].specsDef} />}
              text={value}
              href={nftContractMetadataStandard[key]?.isUri && value}
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
