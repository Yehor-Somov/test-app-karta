import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    bottomSheetContent: {
        gap: 16
    },
    heading: {
        alignSelf: 'center',
    },
    actionsCardContent: {
        gap: 8
    },
    content: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
    },
    info: {
        flexGrow: 1,
        gap: 4
    },
    title: {
        color: Colors.black,
    },
    description: {
        color: Colors.grey,
    }
});
