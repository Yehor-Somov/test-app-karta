import { StyleSheet } from 'react-native';
import { Colors } from '@/styles';

export const styles = StyleSheet.create({
    virtualAccounts: {
        width: '100%',
        paddingInline: 16,
        paddingBlock: 20,
        borderRadius: 16,

        backgroundColor: Colors.white,

        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 12
    },
    textInfo: {
        justifyContent: 'center',
    },
    titleInfo: {
        color: Colors.black,
        fontSize: 14,
        fontWeight: 'bold',
    },
    descInfo: {
        color: Colors.white,
        fontSize: 12,
    },


    modalStyle: {
        backgroundColor: Colors.white,
    },
    handleIndicatorStyle: {
        backgroundColor: Colors.black,
    },
    contentContainer: {
        flex: 1,
        padding: 16,
        paddingTop: 8,
        paddingBottom: 32,
        alignItems: 'center',
        gap: 16,
    },

    info: {
        width: '100%',
        padding: 16,
        borderRadius: 16,
        backgroundColor: Colors.lightgrey,
        gap: 16,
    },

    infoItem: {
        gap: 4,
    },
    itemHeading: {
        color: Colors.grey,
    },
    itemValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemValueText: {
        color: Colors.black,
    },
    buttons: {
        width: '100%',
        flexDirection: 'row',
        gap: 12,
    },
    button: {
        flexBasis: 0,
        flexGrow: 1,
    }
});
