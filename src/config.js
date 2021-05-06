export const getConfig = (networkName, keyStore) => {
  switch (networkName) {
    case 'mainnet':
      return {
        networkId: 'mainnet',
        keyStore,
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.mainnet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
      };
    case 'betanet':
      return {
        networkId: 'betanet',
        keyStore,
        nodeUrl: 'https://rpc.betanet.near.org',
        walletUrl: 'https://wallet.betanet.near.org',
        helperUrl: 'https://helper.betanet.near.org',
      };
    case 'testnet':
      return {
        networkId: 'default',
        keyStore,
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
      };
    case 'local':
      return {
        networkId: 'local',
        keyStore,
        nodeUrl: 'http://localhost:3030',
        keyPath: `${process.env.HOME}/.near/validator_key.json`,
        walletUrl: 'http://localhost:4000/wallet',
      };
    default:
      throw Error(`Unconfigured environment '${networkName}'. Can be configured in src/config.js.`);
  }
};
