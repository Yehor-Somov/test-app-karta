import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: Colors.lightgrey,
    },
    mainScrollable: {
        height: '100%',
        paddingTop: 32,
        padding: 16,
        gap: 24,
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        gap: 24,
    },
    select: {
        alignSelf: 'stretch',
        gap: 8,
    },
    selectLabel: {
        color: Colors.darkGrey,
        marginLeft: 16,
    },
    selectValue: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: Colors.grey,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});
