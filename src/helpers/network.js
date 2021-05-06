import { publicRuntimeConfig } from '../../runtime-config';

const { nearNetworks, nearNetworkAliases } = publicRuntimeConfig;

export function getNearNetwork(hostname) {
  let nearNetwork = nearNetworkAliases[hostname];

  if (nearNetwork === undefined) {
    [nearNetwork] = nearNetworks;
  }

  return nearNetwork;
}
