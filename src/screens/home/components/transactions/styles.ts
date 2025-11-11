import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        gap: 12,

        alignItems: 'center',
    },
    heading: {
        alignSelf: 'flex-start',
        color: Colors.black,
    },
    viewAllButton: {
        width: 'auto',
    }
});
