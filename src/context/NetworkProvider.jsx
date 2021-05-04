import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const NetworkContext = createContext({});

const NetworkProvider = ({ currentNearNetwork, nearNetworks, children }) => {
  return (
    <NetworkContext.Provider
      value={{
        currentNearNetwork,
        nearNetworks,
      }}
    >
      {children}
    </NetworkContext.Provider>
  );
};

NetworkProvider.propTypes = {
  currentNearNetwork: PropTypes.object,
  nearNetworks: PropTypes.array,
  children: PropTypes.array,
};

const NetworkConsumer = NetworkContext.Consumer;

export { NetworkConsumer, NetworkContext };

export default NetworkProvider;
