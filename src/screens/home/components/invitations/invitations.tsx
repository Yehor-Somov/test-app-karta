import { FC } from 'react';
import { ActionCard, AppText, IconSymbol } from '@/ui';
import { styles } from './styles';
import { Avatar } from '@/components';
import { View } from 'react-native';
import { Colors } from '@/styles';
import { useRouter } from 'expo-router';


type InvitationsProps = {}

const Invitations: FC<InvitationsProps> = () => {

    const router = useRouter();

    return (
        <ActionCard variant={'darkGrey'}
                    style={styles.invitationsCard}
                    contentStyle={styles.invitationsCardContent}
                    onPress={() => router.push('/invitations')}
        >
            <Avatar icon={'diamond'} backgroundColor={Colors.green}/>
            <View style={styles.content}>
                <View style={styles.mainInfo}>
                    <AppText style={styles.karatsLabel} size={14} fontWeight={'bold'}>Karat</AppText>
                    <View style={styles.karatsAmountContainer}>
                        <AppText style={styles.karatsAmount} size={14} fontWeight={'bold'}>0</AppText>
                        <IconSymbol name={'diamond'} color={Colors.green}/>
                    </View>
                </View>

                <View style={styles.secondaryInfo}>
                    <AppText  style={styles.grey} size={12}>Invite Friends to Earn</AppText>
                    <AppText style={styles.grey} size={14}>0.00 USDT</AppText>
                </View>
            </View>
        </ActionCard>
    );
};

export { Invitations };
