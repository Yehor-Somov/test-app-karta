import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        gap: 8
    },
    label: {
        fontSize: 12,
        color: Colors.darkGrey,
        marginLeft: 16,
    },
    field: {
        backgroundColor: Colors.white,
        minHeight: 48,
        borderRadius: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16
    },
    adornLeft: {
        marginRight: 8
    },
    adornRight: {
        marginLeft: 8
    },
    error: {
        color: "#f43f5e",
        fontSize: 12
    },
});
