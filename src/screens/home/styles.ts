import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    container: {
        padding: 16,

        backgroundColor: Colors.lightgrey,

        flex: 1,
        alignItems: "center",
        gap: 24
    },
    buttons: {
        width: '100%',
        flexDirection: "row",
        gap: 16
    },
    button: {
        flexBasis: 0,
        flexGrow: 1,
    }
});
