import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import DOMPurify from 'dompurify';

import IconContract from 'url:../../static/images/icon-contract.svg';
import IconCrossRed from 'url:../../static/images/icon-cross-red.svg';
import IconCrossYellow from 'url:../../static/images/icon-cross-yellow.svg';

import DashboardCard from '../utils/DashboardCard';
import LongCardCell from '../utils/LongCardCell';
import Term from '../utils/Term';

import { difference, intersection } from '../../helpers/array';

import { nftContractMetadataStandard } from '../../constants/nftContract';

const DashboardMetadata = ({ isLoading, metadata = {} }) => {
  if (isLoading) {
    return <DashboardCard icon={IconContract} title='Contract Metadata' className='node-card' isLoading={isLoading} />;
  }

  const standardPresentKeys = intersection(Object.keys(metadata), Object.keys(nftContractMetadataStandard));
  const standardRequiredAbsentKeys = difference(Object.keys(nftContractMetadataStandard), Object.keys(metadata)).filter(
    (key) => nftContractMetadataStandard[key].isRequired
  );
  const nonStandardPresentKeys = difference(Object.keys(metadata), standardPresentKeys);

  return (
    <DashboardCard icon={IconContract} title='Contract Metadata' className='node-card' isLoading={isLoading}>
      <Row noGutters>
        {standardPresentKeys
          .map((key) => [DOMPurify.sanitize(key), DOMPurify.sanitize(metadata[key])])
          .map(([key, value], index) => {
            return (
              <Col xs='6' md='12' key={index}>
                <LongCardCell
                  title={<Term title={key} text={nftContractMetadataStandard[key].specsDef} />}
                  text={
                    key === 'icon' ? (
                      <div className='card-cell-contract-icon-container text-center p-3'>
                        <img className='card-cell-contract-icon' src={value} alt='contract icon' />
                      </div>
                    ) : (
                      value
                    )
                  }
                  href={nftContractMetadataStandard[key]?.isUri && value}
                />
              </Col>
            );
          })}
        {nonStandardPresentKeys
          .map((key) => [DOMPurify.sanitize(key), DOMPurify.sanitize(metadata[key])])
          .map(([key, value], index) => {
            return (
              <Col xs='6' md='12' key={index}>
                <LongCardCell
                  title={<Term title={key} text={nftContractMetadataStandard[key].specsDef} />}
                  text={
                    <>
                      <img src={IconCrossYellow} alt='icon cross' />
                      {'Field not described in specification'}
                      {value}
                    </>
                  }
                />
              </Col>
            );
          })}
        {standardRequiredAbsentKeys.map((key, index) => {
          return (
            <Col xs='6' md='12' key={index}>
              <LongCardCell
                title={<Term title={key} text={nftContractMetadataStandard[key].specsDef} />}
                text={
                  <>
                    <img src={IconCrossRed} alt='icon cross' />
                    {'Required field missing'}
                  </>
                }
              />
            </Col>
          );
        })}
      </Row>
      <style jsx global>{`
        .dashboard-validating-nodes-count .card-cell-text {
          color: #00c08b;
        }

        .card-cell-contract-icon {
          max-width: 100px;
          max-height: 100px;
        }

        .card-cell-contract-icon-container {
          background-color: #424957;
        }
      `}</style>
    </DashboardCard>
  );
};

DashboardMetadata.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  metadata: PropTypes.object,
};

export default DashboardMetadata;
