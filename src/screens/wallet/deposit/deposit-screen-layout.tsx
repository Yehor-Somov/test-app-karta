import { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { QrCodeModule } from '@/modules';
import { styles } from './styles'
import { ActionCard, AppText, IconSymbol } from '@/ui';
import { Colors } from '@/styles';
import { BaseButton } from '@/components';

type DepositScreenLayoutProps = {}

const DepositScreenLayout: FC<DepositScreenLayoutProps> = () => {
    return (
        <View style={styles.main}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.mainScrollable}>
                    <View style={styles.address}>
                        <AppText size={24} fontWeight={'medium'}>Your Address</AppText>

                        <View style={styles.qrCode}>
                            <QrCodeModule value={'0x3B2acC130d33c7090f7999138b9045aE23869E94'}
                                          size={200}/>
                            <AppText size={14} fontWeight={'medium'}>0x3B2a...869E94</AppText>
                        </View>
                    </View>

                    <View style={styles.operationInfo}>
                        <ActionCard>
                            <View style={styles.cardInfo}>
                                <AppText size={14} style={styles.cardOption}>Receive token</AppText>
                                <AppText size={16} fontWeight={'semibold'}>USDT or USDC</AppText>
                            </View>
                        </ActionCard>
                        <ActionCard>
                            <View style={styles.cardInfo}>
                                <AppText size={14} style={styles.cardOption}>Network</AppText>
                                <AppText size={16} fontWeight={'semibold'}>Arbitrium One</AppText>
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
        </View>
    );
};

export { DepositScreenLayout };
