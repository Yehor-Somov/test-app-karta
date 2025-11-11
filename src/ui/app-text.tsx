import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
    size?: number,
    fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold',
};

export function AppText({
                               style,
                               size = 12,
                               fontWeight = 'regular',
                               ...rest
                           }: ThemedTextProps) {

    return (
        <Text
            style={[
                {
                    fontSize: size,
                    fontWeight: fontWeight,
                },
                style,
            ]}
            {...rest}
        />
    );
}
