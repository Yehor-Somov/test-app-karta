import { FC } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Colors } from '@/styles';

const Toaster: FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <Toast
            position="top"
            topOffset={Math.max(insets.top, 8)} // отступ от статус-бара
            visibilityTime={2500}
            autoHide
            // Свои рендеры (ниже пример)
            config={{
                success: (props) => (
                    <BaseToast
                        {...props}
                        style={{ borderLeftColor: Colors.green, backgroundColor: Colors.black }}
                        text1Style={{ color: Colors.white, fontWeight: '600' }}
                        text2Style={{ color: Colors.white }}
                    />
                ),
                error: (props) => (
                    <ErrorToast
                        {...props}
                        style={{ borderLeftColor: Colors.orange, backgroundColor: Colors.black }}
                        text1Style={{ color: Colors.white, fontWeight: '600' }}
                        text2Style={{ color: Colors.white }}
                    />
                ),
                info: (props) => (
                    <BaseToast
                        {...props}
                        style={{ borderLeftColor: Colors.white, backgroundColor: Colors.black }}
                        text1Style={{ color: Colors.white, fontWeight: '600' }}
                        text2Style={{ color: Colors.white }}
                    />
                ),
            }}
        />
    );
}

export { Toaster };
