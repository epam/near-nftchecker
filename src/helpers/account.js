import { connect, KeyPair, keyStores } from 'near-api-js';
import { parseSeedPhrase } from 'near-seed-phrase';

import { getConfig } from '../config';
import { memoize } from './function';

export const getMainAccount = memoize(async (networkName) => {
  let mainAccountId;
  let mainAccountSeedPhrase;

  switch (networkName) {
    case 'mainnet':
      mainAccountId = process.env.MAINNET_MASTER_ACCOUNT;
      mainAccountSeedPhrase = process.env.MAINNET_SEED_PHRASE;
      break;
    case 'betanet':
      mainAccountId = process.env.BETANET_MASTER_ACCOUNT;
      mainAccountSeedPhrase = process.env.BETANET_SEED_PHRASE;
      break;
    case 'guildnet':
      mainAccountId = process.env.GUILDNET_MASTER_ACCOUNT;
      mainAccountSeedPhrase = process.env.GUILDNET_SEED_PHRASE;
      break;
    case 'testnet':
    default:
      mainAccountId = process.env.TESTNET_MASTER_ACCOUNT;
      mainAccountSeedPhrase = process.env.TESTNET_SEED_PHRASE;
  }

  const seedPhraseKeyPair = parseSeedPhrase(mainAccountSeedPhrase);

  const keyStore = new keyStores.InMemoryKeyStore();

  const config = getConfig(networkName, keyStore);

  await keyStore.setKey(networkName, mainAccountId, KeyPair.fromString(seedPhraseKeyPair.secretKey));

  const near = await connect(config);

  return near.account(mainAccountId);
});
