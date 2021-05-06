export const nftContractMethodsStandard = {
  viewMethods: ['nft_metadata'],
  changeMethods: [],
};

export const nftContractMetadataStandard = {
  spec: {
    required: true,
    specsDef:
      'A string that MUST be formatted `nft-1.0.0` to indicate that a Non-Fungible Token contract adheres to the current versions of this Metadata spec. This will allow consumers of the Non-Fungible Token to know if they support the features of a given contract.',
  },
  name: {
    required: true,
    specsDef: 'A human-readable name of the contract.',
  },
  symbol: {
    required: true,
    specsDef: 'An abbreviated symbol of the contract, like MOCHI or MV3.',
  },
  // todo: is required?
  // https://nomicon.io/Standards/NonFungibleToken/Metadata.html?highlight=nft_metadata - on interface it's `base_uri:
  // string|null`, but it's also included in the following fields  that an implementing contract MUST include on-chain
  base_uri: {
    required: true,
    isUri: true,
    specsDef:
      'Centralized gateway known to have reliable access to decentralized storage assets referenced by `reference` or `media` URLs. Can be used by other frontends for initial retrieval of assets, even if these frontends then replicate the data to their own decentralized nodes, which they are encouraged to do.',
  },
  icon: {
    specsDef:
      'A small image associated with this contract. Encouraged to be a data URL, to help consumers display it quickly while protecting user data. Recommendation: use optimized SVG, which can result in high-resolution images with only 100s of bytes of storage cost. (Note that these storage costs are incurred to the contract deployer, but that querying these icons is a very cheap & cacheable read operation for all consumers of the contract and the RPC nodes that serve the data.) Recommendation: create icons that will work well with both light-mode and dark-mode websites by either using middle-tone color schemes, or by embedding media queries in the SVG.',
  },
  reference: {
    isUri: true,
    specsDef:
      'A link to a valid JSON file containing various keys offering supplementary details on the token. Example: "/ipfs/QmdmQXB2mzChmMeKY47C43LxUdg1NDJ5MWcKMKxDu7RgQm", "https://example.com/token.json", etc. If the information given in this document conflicts with the on-chain attributes, the values in `reference` shall be considered the source of truth.',
  },
  reference_hash: {
    specsDef:
      'The base64-encoded sha256 hash of the JSON file contained in the reference field. This is to guard against off-chain tampering.',
  },
};
