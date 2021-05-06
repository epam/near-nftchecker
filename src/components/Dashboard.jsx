import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Contract } from 'near-api-js';

import { getMainAccount } from '../helpers/account';
import { nftContractMethodsStandard } from '../constants/nftContract';

import DashboardMetadataRaw from './dashboard/DashboardMetadataRaw';
import DashboardMetadata from './dashboard/DashboardMetadata';
import Search from './utils/Search';

import { NetworkContext } from '../context/NetworkProvider';

const Dashboard = () => {
  const { currentNearNetwork } = useContext(NetworkContext);
  const [isContractMetadataLoading, setIsContractMetadataLoading] = useState(false);
  const [contractMetadata, setContractMetadata] = useState(null);
  const [errorObject, setErrorObject] = useState(null);

  const onCheckStart = () => {
    setContractMetadata(null);
    setErrorObject(null);
    setIsContractMetadataLoading(true);
  };

  const check = async (contractId) => {
    onCheckStart();

    const mainAccount = await getMainAccount(currentNearNetwork.name);

    const contract = new Contract(mainAccount, contractId, {
      ...nftContractMethodsStandard,
      sender: mainAccount,
    });

    try {
      const contractMetadataNew = await contract.nft_metadata();
      setContractMetadata(contractMetadataNew);
    } catch (e) {
      setErrorObject(e);
    }

    setIsContractMetadataLoading(false);
  };

  return (
    <Container>
      <h1 style={{ marginTop: '72px', marginLeft: '25px' }}>
        <span style={{ color: '#00C1DE' }}>Explore</span>
        <br />
        NFT contracts.
      </h1>
      <Row className='inner-content' noGutters>
        <Col xs='12' className='d-none d-md-block d-lg-block'>
          <Row noGutters className='search-wrapper'>
            <Search check={check} />
          </Row>
        </Col>
        {(isContractMetadataLoading || contractMetadata || errorObject) && (
          <Col xs='12'>
            <Row className='card-area' noGutters>
              <Col xs='12' md='6' className='mt-4'>
                <DashboardMetadata metadata={contractMetadata || errorObject} isLoading={isContractMetadataLoading} />
              </Col>
              <Col xs='12' md='6' className='mt-4'>
                <DashboardMetadataRaw
                  className='ml-md-4'
                  metadataRaw={JSON.stringify(contractMetadata || errorObject, null, 2)}
                  isLoading={isContractMetadataLoading}
                />
              </Col>
            </Row>
          </Col>
        )}
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
};

export default Dashboard;
