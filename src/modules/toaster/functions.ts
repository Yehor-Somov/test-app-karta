import Toast from 'react-native-toast-message';

type ToastParams = {
    title?: string;      // text1
    message?: string;    // text2
    durationMs?: number; // visibilityTime override
};

export const showSuccess = (p: ToastParams) =>
    Toast.show({
        type: 'success',
        text1: p.title ?? 'Success',
        text2: p.message,
        visibilityTime: p.durationMs ?? 2200,
        position: 'top',
    });

export const showError = (p: ToastParams) =>
    Toast.show({
        type: 'error',
        text1: p.title ?? 'Error',
        text2: p.message,
        visibilityTime: p.durationMs ?? 2600,
        position: 'top',
    });

export const showInfo = (p: ToastParams) =>
    Toast.show({
        type: 'info',
        text1: p.title ?? 'Info',
        text2: p.message,
        visibilityTime: p.durationMs ?? 2200,
        position: 'top',
    });

export const hideToast = () => Toast.hide();
