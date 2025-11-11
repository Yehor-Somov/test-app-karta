import React, { forwardRef, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { AppBottomSheet, Avatar } from '@/components';
import { ActionCard, AppText, IconSymbol } from '@/ui';
import { View } from 'react-native';
import { Colors } from '@/styles';

import { styles } from './styles';
import { useRouter } from 'expo-router';


type DepositBottomSheetProps = {

};

const DepositBottomSheet = forwardRef<BottomSheetModal, DepositBottomSheetProps>((props, externalRef) => {

    const router = useRouter();

    const sheetRef = useRef<BottomSheetModal>(null);

    const setRef = (node: BottomSheetModal | null) => {
        sheetRef.current = node;
        if (typeof externalRef === 'function') externalRef(node);
        else if (externalRef && 'current' in externalRef) {
            (externalRef as React.RefObject<BottomSheetModal | null>).current = node;
        }
    };

    const goNow = (href: string) => {
        router.push(href);
        sheetRef.current?.dismiss();
    };

    return (
        <AppBottomSheet ref={setRef}>
            <View style={styles.bottomSheetContent}>
                <AppText style={styles.heading}
                         size={24}
                         fontWeight={'medium'}
                >
                    Add Money with
                </AppText>
                <View style={styles.actionsCardContent}>
                    <ActionCard variant={'grey'} onPress={() => goNow('/deposit')}>
                        <View style={styles.content}>
                            <Avatar icon={'qr-code'} size={40}/>
                            <View style={styles.info}>
                                <AppText size={16}
                                         fontWeight={'medium'}
                                         style={styles.title}
                                >
                                    Stablecoins
                                </AppText>
                                <AppText size={14}
                                         fontWeight={'medium'}
                                         style={styles.description}
                                >
                                    No Fees. No limits
                                </AppText>
                            </View>
                            <IconSymbol name={'chevron-right'} color={Colors.grey}/>
                        </View>
                    </ActionCard>

                    <ActionCard variant={'grey'}>
                        <View style={styles.content}>
                            <Avatar icon={'account-balance'} size={40}/>
                            <View style={styles.info}>
                                <AppText size={16}
                                         fontWeight={'medium'}
                                         style={styles.title}
                                >
                                    Bank Transfer
                                </AppText>
                                <AppText size={14}
                                         fontWeight={'medium'}
                                         style={styles.description}
                                >
                                    USD WIRE/ACH
                                </AppText>
                            </View>
                            <IconSymbol name={'chevron-right'} color={Colors.grey}/>
                        </View>
                    </ActionCard>
                </View>
            </View>


        </AppBottomSheet>
    );
});

DepositBottomSheet.displayName = 'DepositBottomSheet';

export { DepositBottomSheet };

