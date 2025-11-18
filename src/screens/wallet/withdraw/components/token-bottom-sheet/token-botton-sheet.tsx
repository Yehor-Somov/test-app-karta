import React, { forwardRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { AppBottomSheet } from '@/components';
import { ActionCard, AppText, IconSymbol } from '@/ui';
import { View } from 'react-native';
import { Colors } from '@/styles';

import { styles } from './styles';


type TokenBottomSheetProps = {
    value: string,
    setValue: (value: string) => void,
};

const tokens: string[] = ['USDT', 'USDC', 'SOL', 'FUSD']

const TokenBottomSheet = forwardRef<BottomSheetModal, TokenBottomSheetProps>(({ value, setValue }, ref) => {

    return (
        <AppBottomSheet ref={ref}>
            <View style={styles.bottomSheetContent}>
                {
                    tokens.map((token, index) => (
                        <ActionCard key={`network-${token}-${index}`}
                                    variant={'grey'}
                                    contentStyle={styles.selectorItem}
                                    onPress={() => setValue(token)}
                        >
                            <View style={styles.selectorItemInfo}>
                                <IconSymbol name={'currency-bitcoin'} color={Colors.black} size={24}/>
                                <AppText size={16} fontWeight={'medium'}>{token}</AppText>
                            </View>

                            {
                                token === value &&
                                <IconSymbol name={'done'} color={Colors.black}/>
                            }
                        </ActionCard>
                    ))
                }
            </View>
        </AppBottomSheet>
    );
});

TokenBottomSheet.displayName = 'DepositBottomSheet';

export { TokenBottomSheet };

