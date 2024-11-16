export const blockscout = {
  baseUrl: "https://explorer.kinto.xyz/api/v2/",
  queries: {
    smartcontractsQuery: "smart-contracts?q=proxy&filter=vyper%20%7C%20solidity%20%7C%20yul",
  }
}


export const paymaster = "0x1842a4EFf3eFd24c50B63c3CF89cECEe245Fc2bd"


export function addressesQuery(address: string) {
  return `https://explorer.kinto.xyz/api/v2/addresses/${address}/transactions?filter=to%20%7C%20from`;
}

