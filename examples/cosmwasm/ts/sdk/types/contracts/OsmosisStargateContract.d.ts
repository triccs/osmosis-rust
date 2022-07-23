/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export declare type ExecuteMsg = {
    create_denom: {
        initial_mint?: string | null;
        initial_pool?: InitPoolCfg | null;
        subdenom: string;
        [k: string]: unknown;
    };
};
export interface InitPoolCfg {
    exit_fee: string;
    pairing_denom: string;
    pool_assets: PoolAssests;
    swap_fee: string;
    [k: string]: unknown;
}
export interface PoolAssests {
    new_token_amount: string;
    new_token_weight: string;
    pairing_token_amount: string;
    pairing_token_weight: string;
    [k: string]: unknown;
}
export interface InstantiateMsg {
    [k: string]: unknown;
}
export declare type QueryMsg = string;
export interface OsmosisStargateReadOnlyInterface {
    contractAddress: string;
}
export declare class OsmosisStargateQueryClient implements OsmosisStargateReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
}
export interface OsmosisStargateInterface extends OsmosisStargateReadOnlyInterface {
    contractAddress: string;
    sender: string;
    createDenom: ({ initialMint, initialPool, subdenom }: {
        initialMint?: string;
        initialPool?: InitPoolCfg;
        subdenom: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
export declare class OsmosisStargateClient extends OsmosisStargateQueryClient implements OsmosisStargateInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    createDenom: ({ initialMint, initialPool, subdenom }: {
        initialMint?: string;
        initialPool?: InitPoolCfg;
        subdenom: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: readonly Coin[]) => Promise<ExecuteResult>;
}
//# sourceMappingURL=OsmosisStargateContract.d.ts.map