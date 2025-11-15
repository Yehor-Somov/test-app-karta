import { NetworkEnum } from '@/enums';

interface IWalletDto {
    defaultNetworkId: NetworkEnum;
    addresses: Record<NetworkEnum, string>;
}

export { type IWalletDto };
