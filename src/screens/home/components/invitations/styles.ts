import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    invitationsCard: {
        width: '100%',
    },
    invitationsCardContent: {
        flexDirection: 'row',
        gap: 16
    },
    content: {
        flexGrow: 1,
    },
    mainInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    secondaryInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    karatsLabel: {
        color: Colors.white,
    },
    karatsAmountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    karatsAmount: {
        color: Colors.green,

    },
    grey: {
        color: Colors.grey,
    }
});
