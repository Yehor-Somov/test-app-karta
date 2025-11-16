import { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles'
import { AppText, IconSymbol } from '@/ui';
import { Colors } from '@/styles';
import { BaseButton } from '@/components';

type InvitationsScreenLayoutProps = {}

const InvitationsScreenLayout: FC<InvitationsScreenLayoutProps> = () => {
    return (
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.heading}>
                    <AppText size={24} fontWeight={'medium'}>Invite Friends. Earn Karat.</AppText>
                    <View style={styles.headingLearn}>
                        <IconSymbol name={'info-outline'} color={Colors.black} size={16}/>
                        <AppText size={14} fontWeight={'medium'}>Learn how to earn Karat</AppText>
                    </View>
                </View>

                <View style={styles.balanceInfo}>
                    <View style={styles.karatBalanceContainer}>
                        <View style={styles.karatBalanceInfo}>
                            <AppText size={14}
                                     fontWeight={'medium'}
                                     style={{ color: Colors.grey }}
                            >
                                Ready to Claim
                            </AppText>

                            <View style={styles.balanceAmount}>
                                <AppText size={32} fontWeight={'bold'}>0</AppText>
                                <IconSymbol name={'diamond'} color={Colors.black} size={28}/>
                            </View>

                            <AppText size={16} style={{ color: Colors.grey }}>
                                1 KARAT = 0.01 USDT
                            </AppText>
                        </View>

                        <View style={styles.buttons}>
                            <BaseButton text={'Invite'} style={styles.button} size={'small'} icon={'person-add'}/>
                            <BaseButton text={'Claim'} style={styles.button} size={'small'} icon={'attach-money'}/>
                        </View>

                        <View style={styles.pendingInfo}>
                            <IconSymbol name={'access-time'} color={Colors.grey}/>
                            <AppText size={14} style={{ color: Colors.grey }}>Pending Karat:</AppText>
                            <View style={styles.balanceAmountSmall}>
                                <AppText size={16} fontWeight={'bold'}>0</AppText>
                                <IconSymbol name={'diamond'} color={Colors.black}/>
                            </View>
                        </View>
                    </View>

                    <View style={styles.friendInvitedContainer}>
                        <IconSymbol name={'group'} color={"#492F76"} size={32}/>
                        <View style={styles.invitedInfo}>
                            <AppText size={16}>Friend Invited</AppText>
                            <AppText size={16}>0</AppText>
                        </View>
                    </View>
                </View>

                <View style={styles.rewards}>
                    <AppText size={20} style={{ marginLeft: 12 }}>Rewards</AppText>
                    <View style={styles.rewardsInfo}>
                        <IconSymbol name={'diamond'} color={"#72D8FF"} size={75}/>
                        <View style={styles.textInfo}>
                            <AppText size={24}>No Karat Yet</AppText>
                            <AppText size={14} style={{ color: Colors.grey }}>Start earning by inviting friends</AppText>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>

    );
};

export { InvitationsScreenLayout };
