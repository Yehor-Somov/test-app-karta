import { NetworkEnum } from '@/enums';
import { IWalletDto } from '@/models';

const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-6)}`
}

const getQrValue = (networkId: NetworkEnum, wallet: IWalletDto): string => {
    return wallet.addresses[networkId] ?? wallet.addresses[wallet.defaultNetworkId] ?? '';
}

export { formatAddress, getQrValue };
