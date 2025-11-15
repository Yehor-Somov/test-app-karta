import { FC, useCallback, useRef, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { QrCodeModule } from '@/modules';
import { styles } from './styles'
import { ActionCard, AppText, IconSymbol } from '@/ui';
import { Colors } from '@/styles';
import { AppBottomSheet, BaseButton } from '@/components';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { WALLET, NETWORKS } from '@/mocks';
import { NetworkEnum } from '@/enums';
import { formatAddress, getQrValue } from './helpers';

type DepositScreenLayoutProps = {}

const DepositScreenLayout: FC<DepositScreenLayoutProps> = () => {

    const [network, setNetwork] = useState<NetworkEnum>(WALLET.defaultNetworkId);

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const qrValue = getQrValue(network, WALLET);

    return (
        <View style={styles.main}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.mainScrollable}>
                    <View style={styles.address}>
                        <AppText size={24} fontWeight={'medium'}>Your Address</AppText>

                        <View style={styles.qrCode}>
                            <QrCodeModule value={qrValue}
                                          size={200}/>
                            <AppText size={14} fontWeight={'medium'}>{formatAddress(qrValue)}</AppText>
                        </View>
                    </View>

                    <View style={styles.operationInfo}>
                        <ActionCard>
                            <View style={styles.cardInfo}>
                                <AppText size={14} style={styles.cardOption}>Receive token</AppText>
                                <AppText size={16} fontWeight={'semibold'}>USDT or USDC</AppText>
                            </View>
                        </ActionCard>
                        <ActionCard onPress={handlePresentModalPress}>
                            <View style={styles.cardInfo}>
                                <AppText size={14} style={styles.cardOption}>Network</AppText>
                                <AppText size={16} fontWeight={'semibold'}>
                                    {
                                        NETWORKS.find(searchableNetwork =>
                                            searchableNetwork.id === network)?.name || 'undefined'
                                    }
                                </AppText>
                            </View>
                        </ActionCard>
                        <ActionCard>
                            <View style={styles.fewInfos}>
                                <View style={styles.cardInfo}>
                                    <AppText size={14} style={styles.cardOption}>Top up fee</AppText>
                                    <AppText size={16} fontWeight={'semibold'}>Free</AppText>
                                </View>
                                <View style={styles.cardInfo}>
                                    <AppText size={14} style={styles.cardOption}>Minimum amount</AppText>
                                    <AppText size={16} fontWeight={'semibold'}>1.00 USDT</AppText>
                                </View>
                            </View>

                        </ActionCard>
                        <ActionCard>
                            <View style={styles.alertInfo}>
                                <IconSymbol size={16} name={'message'} color={Colors.darkGrey}/>
                                <AppText size={14} style={styles.alertText}>Use this address only for USDT or USDC deposit to avoid losing funds</AppText>
                            </View>
                        </ActionCard>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttons}>
                <BaseButton text={'Copy'} style={styles.button} icon={'content-copy'}/>
                <BaseButton text={'Share'} style={styles.button} icon={'share'}/>
            </View>

            <AppBottomSheet ref={bottomSheetModalRef}>
                <View style={styles.bottomSheetContent}>
                    {
                        NETWORKS.map((mappedNetwork, index) => (
                            <ActionCard key={`network-${mappedNetwork}-${index}`}
                                        variant={'grey'}
                                        contentStyle={styles.selectorItem}
                                        onPress={() => {
                                            setNetwork(mappedNetwork.id);
                                            bottomSheetModalRef.current?.dismiss();
                                        }}
                            >
                                <View style={styles.selectorItemInfo}>
                                    <IconSymbol name={'currency-bitcoin'} color={Colors.black} size={24}/>
                                    <AppText size={16} fontWeight={'medium'}>{mappedNetwork.name}</AppText>
                                </View>

                                {
                                    mappedNetwork.id === network &&
                                    <IconSymbol name={'done'} color={Colors.black}/>
                                }
                            </ActionCard>
                        ))
                    }
                </View>

            </AppBottomSheet>
        </View>
    );
};

export { DepositScreenLayout };
