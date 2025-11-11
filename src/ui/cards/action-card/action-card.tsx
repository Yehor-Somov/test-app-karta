import React, { FC, PropsWithChildren } from 'react';
import { Pressable, View, ViewStyle } from 'react-native';
import { styles } from './styles';

type Variant = 'white' | 'black' | 'grey';

type ActionCardProps = PropsWithChildren<{
    onPress?: () => void,
    variant?: Variant,
    style?: ViewStyle,
    contentStyle?: ViewStyle,
}>;

const ActionCard: FC<ActionCardProps> = ({
                                             children,
                                             onPress,
                                             style,
                                             contentStyle,
                                             variant = 'white',
                                         }) => {

    const isInteractive = Boolean(onPress);

    const baseStyles = [
        styles.container,
        styles[variant],
        contentStyle,
    ];

    if (!isInteractive) {
        return <View style={[styles.wrapper, style]}>
            <View style={baseStyles}>{children}</View>
        </View>;
    }

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.wrapper,
                style,
                pressed && styles.pressedWrapper,
            ]}
        >
            <View style={baseStyles}>{children}</View>
        </Pressable>
    );
};

export { ActionCard };
