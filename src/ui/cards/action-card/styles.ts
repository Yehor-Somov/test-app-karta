import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 16
    },
    container: {
        width: '100%',
        borderRadius: 16,
        padding: 16
    },
    pressedWrapper: { opacity: 0.85 },
    disabled: { opacity: 0.5 },

    white: { backgroundColor: Colors.white},
    black: { backgroundColor: Colors.black },
    grey: { backgroundColor: Colors.lightgrey },
});
