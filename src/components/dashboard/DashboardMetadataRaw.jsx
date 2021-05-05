import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import IconDContract from 'url:../../static/images/icon-d-contract.svg';

import DashboardCard from '../utils/DashboardCard';
import CodePreview from '../utils/CodePreview';

const COLLAPSE_ARGS_OPTIONS = {
  collapseText: 'Show more',
  expandText: 'Show less',
  minHeight: 200,
  maxHeight: 600,
};

const DashboardMetadataRaw = ({ className, metadataRaw, isLoading }) => {
  return (
    <DashboardCard className={`block-card ${className || ''}`} icon={IconDContract} title='Raw' isLoading={isLoading}>
      <Row noGutters>
        <Col xs='6' md='12'>
          <CodePreview collapseOptions={COLLAPSE_ARGS_OPTIONS} value={metadataRaw} />
        </Col>
      </Row>
    </DashboardCard>
  );
};

DashboardMetadataRaw.propTypes = {
  className: PropTypes.string,
  metadataRaw: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default DashboardMetadataRaw;
