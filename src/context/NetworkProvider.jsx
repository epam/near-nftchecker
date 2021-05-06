import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { ReactChildrenType } from '../../types/ReactChildrenTypes';

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
  children: ReactChildrenType,
};

export { NetworkContext };

export default NetworkProvider;
