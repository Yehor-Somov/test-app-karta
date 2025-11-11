import { ComponentProps, FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@/styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IconSymbol } from '@/ui/icon-symbol';

type AvatarProps = {
    imageSrc?: string,
    firstName?: string,
    lastName?: string,
    size?: number,
    backgroundColor?: string,
    color?: string,
    icon?: ComponentProps<typeof MaterialIcons>['name'],
}

const Avatar: FC<AvatarProps> = ({
                                     imageSrc,
                                     firstName,
                                     lastName,
                                     size = 40,
                                     backgroundColor = Colors.white,
                                     color = Colors.black,
                                     icon
                                 }) => {


    const initials = `${firstName ? firstName[0] : ''}${lastName ? lastName[0] : ''}`;

    return (
        <View style={[
            styles.avatarMain,
            {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
            }
        ]}>
            {
                !!imageSrc &&
                <Text>Image</Text>
            }

            {
                !!icon &&
                <IconSymbol name={icon} color={color} size={size / 2.25}/>
            }

            {
                !imageSrc && !icon && !!initials &&
                <Text style={[styles.avatarText,
                    {
                        fontSize: size / 2.85,
                        color,
                    }
                ]}>{initials}</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    avatarMain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: Colors.white,
    }
});

export { Avatar };
