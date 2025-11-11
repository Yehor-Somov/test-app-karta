import { FC } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '@/components';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/styles';
import { Entypo } from '@expo/vector-icons';

import { styles } from './styles'
import { Icon } from 'expo-router/unstable-native-tabs';
import { IconSymbol } from '@/ui/icon-symbol';

type SettingsMainScreenLayoutProps = {}

const SettingsMainScreenLayout: FC<SettingsMainScreenLayoutProps> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Avatar firstName={'Yehor'} lastName={'Somov'} size={96}/>
                <Text style={styles.headerText}>Yehor Somov</Text>
            </View>

            <View style={styles.settingsBlocks}>
                <View style={styles.settingsBlock}>
                    <View style={styles.settingItem}>
                        <View style={styles.settingItemName}>
                            <IconSymbol name={'language'} color={Colors.black} size={16}/>
                            <Text style={styles.settingItemNameText}>Language</Text>
                        </View>
                        <View style={styles.settingItemLink}>
                            <Text style={styles.settingItemLinkText}>English</Text>
                            <IconSymbol name={'chevron-right'} color={Colors.black} size={16}/>
                        </View>
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingItemName}>
                            <IconSymbol name={'language'} color={Colors.black} size={16}/>
                            <Text style={styles.settingItemNameText}>Appearance</Text>
                        </View>
                        <View style={styles.settingItemLink}>
                            <Text style={styles.settingItemLinkText}>System</Text>
                            <IconSymbol name={'chevron-right'} color={Colors.black} size={16}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export { SettingsMainScreenLayout };
