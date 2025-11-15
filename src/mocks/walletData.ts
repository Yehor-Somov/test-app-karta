import { IWalletDto } from '@/models';
import { INetworkDto } from '@/models/dto/wallet/network';
import { NetworkEnum } from '@/enums';

const NETWORKS: INetworkDto[] = [
    { id: NetworkEnum.arb1, name: 'Arbitrum One' },
    { id: NetworkEnum.eth,  name: 'Ethereum' },
    { id: NetworkEnum.tron, name: 'TRON' },
];

const WALLET: IWalletDto = {
    defaultNetworkId: NetworkEnum.arb1,
    addresses: {
        [NetworkEnum.arb1]: '0x3B2a1B7C8F9e1234567890abcDEF1234568E9E94',
        [NetworkEnum.eth]:  '0x9C1fA3b7F0aa1234567890FEDcba0987654321AA',
        [NetworkEnum.tron]: 'TV8C3Y3Yt5Hn4WQe3v2r8Qw2vRrHkj1abc',
    },
};

export { WALLET, NETWORKS };
