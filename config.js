let nearNetworks;

if (process.env.NEAR_NETWORKS) {
  nearNetworks = JSON.parse(process.env.NEAR_NETWORKS);
} else {
  nearNetworks = [
    {
      name: 'testnet',
      explorerLink: 'http://localhost:3000/',
      aliases: ['localhost:3000', 'localhost', '127.0.0.1', '127.0.0.1:3000'],
      nearWalletProfilePrefix: 'https://wallet.testnet.near.org/profile',
    },
  ];
}

const nearNetworkAliases = {};

// eslint-disable-next-line no-restricted-syntax
for (const nearNetwork of nearNetworks) {
  // eslint-disable-next-line no-restricted-syntax
  for (const alias of nearNetwork.aliases) {
    nearNetworkAliases[alias] = nearNetwork;
  }
}

module.exports = {
  publicRuntimeConfig: {
    nearNetworks,
    nearNetworkAliases,
  },
};
