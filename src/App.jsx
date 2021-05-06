import 'regenerator-runtime/runtime';

import React from 'react';
import PropTypes from 'prop-types';

import ExplorerBG from 'url:./static/images/explorer-bg.svg';

import { getNearNetwork } from './helpers/network';
import { publicRuntimeConfig } from '../runtime-config';

import NetworkProvider from './context/NetworkProvider';

import Header from './components/utils/Header';
import Footer from './components/utils/Footer';
import Dashboard from './components/Dashboard';

import 'bootstrap/dist/css/bootstrap.min.css';

const { nearNetworks } = publicRuntimeConfig;
const currentNearNetwork = getNearNetwork(window.location.host);

const App = () => (
  <>
    <NetworkProvider currentNearNetwork={currentNearNetwork} nearNetworks={nearNetworks}>
      <div className='app-wrapper'>
        <Header />
        <Dashboard />
        <img src={ExplorerBG} className='background-img' alt='background' />
      </div>
      <Footer />
    </NetworkProvider>
    {/* todo: remove unused styles everywhere */}
    <style jsx global>{`
      body {
        background-color: #f9f9f9;
        height: 100%;
        margin: 0;
        font-family: 'Inter', sans-serif;
      }

      .background-img {
        position: absolute;
        right: 0;
        top: 72px;
        z-index: -1;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: none;
      }

      h1 {
        font-weight: 900;
        word-wrap: break-word;
        color: #24272a;
        font-size: 32px;
      }

      @media (max-width: 300px) {
        h1 {
          font-size: 28px;
        }
      }

      @media (min-width: 1600px) {
        h1 {
          font-size: 48px;
        }
      }

      h2 {
        font-size: 24px;
      }

      .app-wrapper {
        position: relative;
        min-height: calc(100vh - 120px);
      }
    `}</style>
  </>
);

App.propTypes = {
  currentNearNetwork: PropTypes.object,
};

export default App;
