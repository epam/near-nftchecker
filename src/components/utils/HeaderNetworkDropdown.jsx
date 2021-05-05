import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';

import IconNetworkRight from 'url:../../static/images/icon-network-right.svg';
import DownBlueArrow from 'url:../../static/images/down-blue-arrow.svg';

import { NetworkContext } from '../../context/NetworkProvider';

const HeaderDropdownItem = ({ link, title }) => (
  <Dropdown.Item className='header-network-item-dropdown' href={link}>
    <div className={`network-icon network-${title.toLowerCase()}`} />
    {title}
  </Dropdown.Item>
);

HeaderDropdownItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

const HeaderNetworkDropdown = () => {
  const { currentNearNetwork, nearNetworks } = useContext(NetworkContext);

  let networkIconBackground;

  switch (currentNearNetwork.name) {
    case 'mainnet':
      networkIconBackground = '#00C08B';
      break;
    case 'testnet':
      networkIconBackground = '#E9B870';
      break;
    case 'betanet':
      networkIconBackground = '#00C1DE';
      break;
    default:
      networkIconBackground = '#0072CE';
  }

  return (
    <Dropdown>
      <Dropdown.Toggle className='header-network' variant='secondary'>
        <div className='network-icon' />
        {currentNearNetwork.name}
        <img className='icon-right' src={IconNetworkRight} alt='network icon right' />
        <img src={DownBlueArrow} className='dropdown-arrow' alt='dropdown arrow' />
      </Dropdown.Toggle>
      <Dropdown.Menu className='header-network-dropdown-menu'>
        {nearNetworks.map((network) => {
          return <HeaderDropdownItem key={network.name} title={network.name} link={network.explorerLink} />;
        })}
      </Dropdown.Menu>
      <style jsx global>{`
        .chain-header {
          color: #000000;
          background: #ffffff;
          border: none;
          font-weight: 500;
          width: 100%;
        }

        .chain-header:hover,
        .chain-header:focus,
        .chain-header:active,
        .show > .btn-primary.dropdown-toggle {
          background: #ffffff !important;
          color: #000000 !important;
          border: none;
        }

        .dropdown-toggle::after {
          content: none;
        }

        .header-dropdown-menu {
          background: #25272a;
          border-radius: 8px;
          width: 267px;
        }

        .dropdown-arrow {
          margin-left: 9px;
        }

        .show > .dropdown-toggle > .dropdown-arrow {
          transform: rotate(180deg);
        }

        .show > .btn-primary.dropdown-toggle:focus {
          box-shadow: none;
        }

        .btn-primary:focus {
          box-shadow: none;
        }

        .header-network {
          background: #ffffff;
          border: 2px solid #f1f1f1;
          box-sizing: border-box;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          border-radius: 50px;
          color: #000000;
          text-transform: capitalize;
          width: 154px;
          height: 33px;
          padding: 3px 2px;
          font-size: 14px;
          outline: none;
        }

        .header-network:hover,
        .header-network:focus,
        .header-network:active,
        .header-network:focus:active,
        .show > .header-network.dropdown-toggle {
          background: #f7f7f7 !important;
          color: #000000 !important;
          box-shadow: none !important;
          border: 0 solid #f1f1f1 !important;
        }

        .header-network.dropdown-toggle {
          border: 2px solid #f1f1f1;
        }

        .btn-secondary:focus {
          box-shadow: none;
        }

        .header-network-dropdown-menu {
          background: #ffffff;
          padding: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          border: none;
        }

        .dropdown-menu {
          min-width: 154px;
        }

        .header-network-item-dropdown {
          font-size: 14px;
          letter-spacing: 1.8px;
          color: #8d8d8d;
          padding: 6px 40px 6px 6px;
          border-radius: 3px;
          text-transform: capitalize;
        }

        .header-network-item-dropdown:hover,
        .header-network-item-dropdown:active {
          background-color: #e6e6e6;
        }

        .network-icon {
          display: inline-block;
          margin-right: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: ${networkIconBackground};
        }

        .network-icon.network-mainnet {
          background: #00c08b;
        }

        .network-icon.network-testnet {
          background: #e9b870;
        }

        .network-icon.network-betanet {
          background: #00c1de;
        }

        .network-icon.network-guildnet {
          background: #0072ce;
        }

        .icon-right {
          height: 15px;
          width: 15px;
          margin-left: 16px;
          margin-top: -3px;
        }
      `}</style>
    </Dropdown>
  );
};

export default HeaderNetworkDropdown;
