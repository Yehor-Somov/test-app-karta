import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    main: {
        paddingTop: 32,
        padding: 16,
        paddingBottom: 32,
        gap: 28,
    },
    heading: {
        alignItems: 'center',
        gap: 12,
    },
    headingLearn: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    balanceInfo: {
        gap: 16,
    },
    karatBalanceContainer: {
        padding: 16,
        paddingTop: 28,
        paddingBottom: 18,
        borderRadius: 12,
        backgroundColor: Colors.lightgrey,
        alignItems: 'stretch',
        gap: 18,
    },
    karatBalanceInfo: {
        alignItems: 'center',
        gap: 14,
    },
    balanceAmount: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    buttons: {
        flexDirection: 'row',
        gap: 16
    },
    button: {
        flexBasis: 0,
        flexGrow: 1,
    },
    pendingInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    balanceAmountSmall: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    friendInvitedContainer: {
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: Colors.lightgrey,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    invitedInfo: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rewards: {
        gap: 12
    },
    rewardsInfo: {
        paddingVertical: 40,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: Colors.lightgrey,
        alignItems: 'center',
        gap: 24
    },
    textInfo: {
        alignItems: 'center',
        gap: 16,
    }
});
