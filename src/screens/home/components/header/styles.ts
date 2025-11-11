import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    header: {
        width: "100%",
        alignItems: "center",
        gap: 4
    },
    headerMain: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    balance: {

    },
    headerText: {
        color: Colors.grey,
    },
    text: {
        fontWeight: '600',
        color: Colors.black,
    },
    main: {
        fontSize: 48,
    },
    fraction: {
        fontSize: 24,
    },
});
