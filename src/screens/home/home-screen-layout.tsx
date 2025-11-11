import { FC,  } from 'react';
import { View } from 'react-native';
import { BaseButton } from '@/components';
import { styles } from './styles';
import { Header } from './components';
import { VirtualAccounts, Transactions } from '@/screens/home/components';

type HomeProps = {}

const HomeScreenLayout: FC<HomeProps> = () => {
    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.buttons}>
                <BaseButton text={'Top up'}
                            icon={'add'}
                            style={styles.button}
                />

                <BaseButton text={'Send'}
                            icon={'arrow-upward'}
                            style={styles.button}
                />
            </View>

            <VirtualAccounts/>
            <Transactions/>
        </View>
    );
};

export { HomeScreenLayout };
