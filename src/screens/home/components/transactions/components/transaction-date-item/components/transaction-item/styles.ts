import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    transactionItem: {
        flexDirection: 'row',
        gap: 16,
    },
    transactionInfo: {
        flexGrow: 1,
    },
    amountInfo: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    transactionName: {
        color: Colors.black,
    },
    transactionAmount: {
        color: Colors.black,
    },
    transactionTime: {
        color: Colors.grey,
    }
});
