import { FC } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Avatar } from '@/components';
import { Colors } from '@/styles';
import { styles } from './styles';

const Header: FC = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerMain}>
                <Link href={'/settings'} push>
                    <Avatar firstName={'Yehor'}
                            lastName={'Somov'}
                    />
                </Link>

                <Text style={styles.headerText}>
                    KARTA BALANCE (USDT)
                </Text>

                <Avatar backgroundColor={Colors.grey}
                        color={Colors.black}
                        icon={'message'}
                />
            </View>

            <View style={styles.balance}>
                <Text style={styles.text}>
                    <Text style={styles.main}>$0.</Text>
                    <Text style={styles.fraction}>00</Text>
                </Text>
            </View>
        </View>
    )
};

export { Header };
