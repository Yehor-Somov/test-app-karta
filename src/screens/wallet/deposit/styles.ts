import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    main: {
        height: '100%',
        backgroundColor: Colors.lightgrey,
    },
    mainScrollable: {
        height: 'auto',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 32,
        padding: 16,
        gap: 24,
    },
    address: {
        alignItems: 'center',
        gap: 36,
    },
    qrCode: {
        backgroundColor: Colors.white,
        padding: 18,
        borderRadius: 16,
        alignItems: 'center',
        gap: 16
    },
    operationInfo: {
        gap: 8
    },
    fewInfos: {
        gap: 12,
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardOption: {
        color: Colors.grey,
    },
    cardValueView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    alertInfo: {
        flexDirection: 'row',
        gap: 16,
    },
    alertText: {
        flexBasis: 0,
        flexGrow: 1,
        color: Colors.darkGrey,
    },
    buttons: {
        paddingInline: 16,
        paddingBlock: 12,
        paddingBottom: 24,
        borderTopWidth: 1,
        borderTopColor: Colors.grey,
        flexDirection: 'row',
        gap: 8,

    },
    button: {
        flexBasis: 0,
        flexGrow: 1,
    },

    bottomSheetContent: {
        gap: 8,
    },
    selectorItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
    },
    selectorItemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    }
});
