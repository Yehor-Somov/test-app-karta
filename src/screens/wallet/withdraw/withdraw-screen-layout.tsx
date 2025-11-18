import { FC, useRef, useState } from 'react';
import { Alert, Pressable, ScrollView, View } from 'react-native';
import { styles } from './styles'
import { AppText, IconSymbol } from '@/ui';
import { Colors } from '@/styles';
import { BaseButton, BaseInput } from '@/components';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { NetworkBottomSheet, TokenBottomSheet } from '@/screens/wallet/withdraw/components';
import { NETWORKS } from '@/mocks';

type DepositScreenLayoutProps = {}

const WithdrawScreenLayout: FC<DepositScreenLayoutProps> = () => {


    const tokenBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const networkBottomSheetModalRef = useRef<BottomSheetModal>(null);

    const [token, setToken] = useState<string>('USDT')
    const [network, setNetwork] = useState<string>(NETWORKS[0].name);
    const [address, setAddress] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <View style={styles.main}>
            <ScrollView contentContainerStyle={{ flex: 1, height: '100%'}}>
                <View style={styles.mainScrollable}>
                    <View style={styles.container}>
                        <AppText size={24} fontWeight={'medium'}>Send Crypto</AppText>

                        <View style={styles.select}>
                            <AppText size={12} style={styles.selectLabel}>TOKEN</AppText>
                            <Pressable onPress={() => tokenBottomSheetModalRef.current?.present()}>
                                <View style={styles.selectValue}>
                                    <AppText size={16} fontWeight={'semibold'}>{token}</AppText>
                                    <IconSymbol name={'chevron-right'} color={Colors.darkGrey}/>
                                </View>
                            </Pressable>
                        </View>

                        <BaseInput label={"ADDRESS"}
                                   value={address}
                                   onChangeText={setAddress}
                                   placeholder={'USDT address'}
                                   right={<IconSymbol name={'qr-code-scanner'} size={18} color={Colors.black}/>}
                        />

                        <View style={styles.select}>
                            <AppText size={12} style={styles.selectLabel}>NETWORK</AppText>
                            <Pressable onPress={() => networkBottomSheetModalRef.current?.present()}>
                                <View style={styles.selectValue}>
                                    <AppText size={16} fontWeight={'semibold'}>{network}</AppText>
                                    <IconSymbol name={'chevron-right'} color={Colors.darkGrey}/>
                                </View>
                            </Pressable>
                        </View>

                        <BaseInput label={"AMOUNT"}
                                   value={amount}
                                   onChangeText={setAmount}
                                   placeholder={'Enter amount'}
                                   keyboardType={"numeric"}
                        />
                    </View>

                    <BaseButton text={'Continue'} size={'small'} onPress={() => {
                        Alert.alert('Transaction Info', `TOKEN: ${token}\nADDRESS: ${address}\nNETWORK: ${network}\nAMOUNT: ${amount}`);
                    }}/>
                </View>
            </ScrollView>

            <TokenBottomSheet ref={tokenBottomSheetModalRef}
                              value={token}
                              setValue={(newValue) => {
                                  setToken(newValue);
                                  tokenBottomSheetModalRef.current?.dismiss();
                              }}
            />

            <NetworkBottomSheet ref={networkBottomSheetModalRef}
                                value={network}
                                setValue={(newNetworkValue) => {
                                    setNetwork(newNetworkValue);
                                    networkBottomSheetModalRef.current?.dismiss();
                                }}/>
        </View>
    );
};

export { WithdrawScreenLayout };
