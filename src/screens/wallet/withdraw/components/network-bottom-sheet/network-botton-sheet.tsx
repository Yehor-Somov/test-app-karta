import React, { forwardRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { AppBottomSheet } from '@/components';
import { ActionCard, AppText, IconSymbol } from '@/ui';
import { View } from 'react-native';
import { Colors } from '@/styles';

import { styles } from './styles';
import { NETWORKS } from '@/mocks';


type NetworkBottomSheetProps = {
    value: string,
    setValue: (value: string) => void,
};

const NetworkBottomSheet = forwardRef<BottomSheetModal, NetworkBottomSheetProps>(({ value, setValue }, ref) => {

    return (
        <AppBottomSheet ref={ref}>
            <View style={styles.bottomSheetContent}>
                {
                    NETWORKS.map((network, index) => (
                        <ActionCard key={`network-${network.name}-${index}`}
                                    variant={'grey'}
                                    contentStyle={styles.selectorItem}
                                    onPress={() => setValue(network.name)}
                        >
                            <View style={styles.selectorItemInfo}>
                                <IconSymbol name={'currency-bitcoin'} color={Colors.black} size={24}/>
                                <AppText size={16} fontWeight={'medium'}>{network.name}</AppText>
                            </View>

                            {
                                network.name === value &&
                                <IconSymbol name={'done'} color={Colors.black}/>
                            }
                        </ActionCard>
                    ))
                }
            </View>
        </AppBottomSheet>
    );
});

NetworkBottomSheet.displayName = 'DepositBottomSheet';

export { NetworkBottomSheet };

