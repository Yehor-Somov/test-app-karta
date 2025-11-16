import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        gap: 6
    },
    label: {
        fontSize: 14,
        color: "#666"
    },
    field: {
        minHeight: 48,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        paddingHorizontal: 12,
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
