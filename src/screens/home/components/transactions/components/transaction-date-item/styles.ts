import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    dateContainer: {
        width: '100%',
        gap: 8
    },
    dateHeading: {
        color: Colors.white,
    },
    container: {
        padding: 16,
        borderRadius: 16,
        backgroundColor: Colors.darkGrey,

        gap: 16,
    },
});
