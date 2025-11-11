import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    main: {
        height: '100%',
        padding: 16,
        paddingTop: 32,

        backgroundColor: Colors.lightgrey,

        alignItems: 'center',
        gap: 24
    },
    info: {
        alignItems: 'center',
        gap: 8
    },
    amount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        gap: 4
    },
    test: {
        gap: 4
    },
    black: {
        color: Colors.black,
    },
    grey: {
        color: Colors.grey,
    },
    operationInfo: {
        width: '100%',

        gap: 8,
    },
    mainInfo: {
        padding: 16,
        borderRadius: 16,

        backgroundColor: Colors.white,

        gap: 8
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalChargeInfo: {
        padding: 16,
        borderRadius: 16,

        backgroundColor: Colors.white,

        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
