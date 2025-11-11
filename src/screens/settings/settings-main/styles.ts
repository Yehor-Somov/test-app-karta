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
    header: {
        alignItems: "center",
        gap: 16
    },
    headerText: {
        fontSize: 24,
        color: Colors.black,
    },
    settingsBlocks: {
        width: '100%',
        gap: 16,
    },
    settingsBlock: {
        width: '100%',
        paddingBlock: 20,
        paddingInline: 16,
        borderRadius: 16,
        backgroundColor: Colors.white,
        gap: 16,
    },
    settingItem: {
        paddingInline: 2,
        paddingBlock: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    settingItemName: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    settingItemNameText: {
        fontSize: 14,
        color: Colors.black,
    },
    settingItemLink: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    settingItemLinkText: {
        fontSize: 14,
        color: Colors.grey,
    }
});
