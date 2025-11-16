import { FC, useCallback, useRef, } from 'react';
import { View } from 'react-native';
import { BaseButton } from '@/components';
import { styles } from './styles';
import { Header, Invitations } from './components';
import { VirtualAccounts, Transactions } from '@/screens/home/components';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { DepositBottomSheet, WithdrawBottomSheet } from '@/modules';

type HomeProps = {}

const HomeScreenLayout: FC<HomeProps> = () => {

    const depositBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentDepositModalPress = useCallback(() => {
        depositBottomSheetModalRef.current?.present();
    }, []);

    const withdrawBottomSheetModalRef = useRef<BottomSheetModal>(null);
    const handlePresentWithdrawModalPress = useCallback(() => {
        withdrawBottomSheetModalRef.current?.present();
    }, []);

    return (
        <View style={styles.container}>
            <Header/>
            <View style={styles.buttons}>
                <BaseButton text={'Top up'}
                            icon={'add'}
                            style={styles.button}
                            onPress={handlePresentDepositModalPress}
                />

                <BaseButton text={'Send'}
                            icon={'arrow-upward'}
                            style={styles.button}
                            onPress={handlePresentWithdrawModalPress}
                />
            </View>

            <VirtualAccounts/>
            <Invitations/>
            <Transactions/>

            <DepositBottomSheet ref={depositBottomSheetModalRef}/>
            <WithdrawBottomSheet ref={withdrawBottomSheetModalRef}/>
        </View>
    );
};

export { HomeScreenLayout };
