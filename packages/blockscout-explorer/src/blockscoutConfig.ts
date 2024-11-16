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

export interface Transaction {
  priority_fee: string;
  tx_burnt_fee: string;
  raw_input: string;
  result: string;
  hash: string;
  max_fee_per_gas: string;
  revert_reason: null;
  confirmation_duration: number[];
  type: number;
  token_transfers_overflow: null;
  confirmations: number;
  position: number;
  max_priority_fee_per_gas: string;
  transaction_tag: null;
  created_contract: null;
  value: string;
  tx_types: string[];
  from: {
    ens_domain_name: null;
    hash: string;
    implementations: [];
    is_contract: boolean;
    is_scam: boolean;
    is_verified: boolean;
    metadata: null;
    name: null;
    private_tags: [];
    proxy_type: null;
    public_tags: [];
    watchlist_names: [];
  };
  gas_used: string;
  status: string;
  to: {
    ens_domain_name: null;
    hash: string;
    implementations: {
      address: string;
      name: string;
    }[];
    is_contract: boolean;
    is_scam: boolean;
    is_verified: boolean;
    metadata: null;
    name: string;
    private_tags: [];
    proxy_type: string;
    public_tags: [];
    watchlist_names: [];
  };
  authorization_list: [];
  method: string;
  fee: {
    type: string;
    value: string;
  };
  tx_tag: null;
  actions: [];
  gas_limit: string;
  gas_price: string;
  decoded_input: {
    method_call: string;
    method_id: string;
    parameters: {
      name: string;
      type: string;
      value: string;
    }[];
  };
  has_error_in_internal_txs: boolean;
  token_transfers: null;
  base_fee_per_gas: string;
  timestamp: string;
  nonce: number;
  block: number;
  transaction_types: string[];
  exchange_rate: number;
  block_number: number;
  has_error_in_internal_transactions: boolean;
}