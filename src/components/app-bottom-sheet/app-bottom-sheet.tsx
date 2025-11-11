import React, { forwardRef } from 'react';
import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { styles } from './styles';

type AppBottomSheetProps = {
    children?: React.ReactNode,
};

const AppBottomSheet = forwardRef<BottomSheetModal, AppBottomSheetProps>(({ children }, ref) => {

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
        <BottomSheetModal
            ref={ref}
            backdropComponent={(props) => renderBackdrop(props)}
            backgroundStyle={styles.modalStyle}
            handleIndicatorStyle={styles.handleIndicatorStyle}
        >
            <BottomSheetView style={styles.contentContainer}>
                {children}
            </BottomSheetView>
        </BottomSheetModal>
    );
});

AppBottomSheet.displayName = 'AppBottomSheet';

export { AppBottomSheet };

