import { FC, useCallback, useRef } from 'react';
import { styles } from './styles'
import { Pressable, View, Text } from 'react-native';
import { Avatar, BaseButton } from '@/components';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import { AppText } from '@/ui';
import { Colors } from '@/styles';
import { IconSymbol } from '@/ui/icon-symbol';

type VirtualAccountsProps = {}

const data = [
    {
        heading: 'Beneficiary',
        value: 'Yehor Somov',
    },
    {
        heading: 'Account number',
        value: '215174098043',
    },
    {
        heading: 'Wire/ACH routing number',
        value: '101019644',
    },
    {
        heading: 'Bank Name',
        value: 'LeadBank',
    },
    {
        heading: 'Bank Address',
        value: '1801 Main St., Kansas City, MO 64108',
    }
]

const VirtualAccounts: FC<VirtualAccountsProps> = () => {

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const renderBackdrop = (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            opacity={0.7}
            pressBehavior={'close'}
        />
    );

    return (
        <React.Fragment>
            <Pressable onPress={handlePresentModalPress} style={{ width: '100%' }}>
                <View style={styles.virtualAccounts}>
                    <Avatar firstName={'$'}
                            backgroundColor={Colors.black}
                            color={Colors.white}
                    />
                    <View style={styles.textInfo}>
                        <Text style={styles.titleInfo}>Virtual accounts</Text>
                    </View>
                </View>
            </Pressable>


            <BottomSheetModal
                ref={bottomSheetModalRef}
                backdropComponent={(props) => renderBackdrop(props)}
                backgroundStyle={styles.modalStyle}
                handleIndicatorStyle={styles.handleIndicatorStyle}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <AppText size={24} fontWeight={'medium'} style={{ color: Colors.black }}>
                        Virtual Accounts
                    </AppText>

                    <View style={styles.info}>
                        {
                            data.map((item, index) => (
                                <View key={`${item.heading}-${index}`} style={styles.infoItem}>
                                    <AppText size={14} fontWeight={'medium'} style={styles.itemHeading}>{item.heading}</AppText>
                                    <View style={styles.itemValue}>
                                        <AppText size={14} fontWeight={'semibold'} style={styles.itemValueText}>
                                            {item.value}
                                        </AppText>

                                        <IconSymbol name={'content-copy'} color={Colors.black} size={14} />
                                    </View>
                                </View>
                            ))
                        }
                    </View>

                    <View style={styles.buttons}>
                        <BaseButton size={'small'} text={'Top up Details'} icon={'info-outline'} style={styles.button}/>
                        <BaseButton size={'small'} text={'Share'} icon={'share'} style={styles.button}/>
                    </View>
                </BottomSheetView>
            </BottomSheetModal>
        </React.Fragment>

    );
};

export { VirtualAccounts };
