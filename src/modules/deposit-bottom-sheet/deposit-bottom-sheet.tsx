import React, { forwardRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { AppBottomSheet, Avatar } from '@/components';
import { ActionCard, AppText, IconSymbol } from '@/ui';
import { View } from 'react-native';
import { Colors } from '@/styles';

import { styles } from './styles';


type DepositBottomSheetProps = {

};

const DepositBottomSheet = forwardRef<BottomSheetModal, DepositBottomSheetProps>((props, ref) => {
    return (
        <AppBottomSheet ref={ref}>
            <View style={styles.bottomSheetContent}>
                <AppText style={styles.heading}
                         size={24}
                         fontWeight={'medium'}
                >
                    Add Money with
                </AppText>
                <View style={styles.actionsCardContent}>
                    <ActionCard variant={'grey'}>
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

