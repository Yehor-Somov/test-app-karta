import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { ComponentProps, FC } from 'react';
import { Colors } from '@/styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IconSymbol } from '@/ui/icon-symbol';

type BaseButtonProps = {
    text: string,
    size?: 'small' | 'medium' | 'large',
    icon?: ComponentProps<typeof MaterialIcons>['name'],
} & PressableProps

const BaseButton: FC<BaseButtonProps> = ({
                                             text,
                                             size = 'medium',
                                             icon,
                                             ...props
                                         }) => {
    return (
        <Pressable {...props}>
            <View style={[
                styles.main,
                size === 'small' ? styles.small : undefined,
                size === 'medium' ? styles.medium : undefined,
            ]}>
                {
                    !!icon &&
                    <IconSymbol name={icon} color={Colors.black}/>
                }

                <Text style={[
                    size === 'small' ? styles.textSmall : undefined,
                    size === 'medium' ? styles.textMedium : undefined,
                ]}>
                    {text}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.green,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
    small: {
        padding: 12,
        borderRadius: 10,
    },
    medium: {
        padding: 20,
        borderRadius: 16,
    },

    textSmall: {
        fontSize: 14,
        fontWeight: 'medium',
    },
    textMedium: {
        fontSize: 18,
        fontWeight: 'semibold',
    }
});

export { BaseButton };
