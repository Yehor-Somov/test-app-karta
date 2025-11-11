import { FC, useCallback, useRef, } from 'react';
import { View } from 'react-native';
import { BaseButton } from '@/components';
import { styles } from './styles';
import { Header } from './components';
import { VirtualAccounts, Transactions } from '@/screens/home/components';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DepositBottomSheet } from '@/modules';

type HomeProps = {}

const HomeScreenLayout: FC<HomeProps> = () => {

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.buttons}>
                <BaseButton text={'Top up'}
                            icon={'add'}
                            style={styles.button}
                            onPress={handlePresentModalPress}
                />

                <BaseButton text={'Send'}
                            icon={'arrow-upward'}
                            style={styles.button}
                />
            </View>

            <VirtualAccounts/>
            <Transactions/>

            <DepositBottomSheet ref={bottomSheetModalRef}/>
        </View>
    );
};

export { HomeScreenLayout };
