import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import QRCodeStyled from 'react-native-qrcode-styled';
import ViewShot, { captureRef } from 'react-native-view-shot';
import { Colors } from '@/styles';

export type QrCodeHandle = {
    toPNGDataURI: () => Promise<string>;
    toPNGBase64: () => Promise<string>;
    toPNGFile: () => Promise<string>;
};

export type QrCodeModuleProps = {
    value: string;
    size?: number;
    color?: string;
    backgroundColor?: string;
    style?: StyleProp<ViewStyle>;
};

const QrCodeModule = memo(
    forwardRef<QrCodeHandle, QrCodeModuleProps>((props, ref) => {
        const {
            value,
            size = 200,
            color = Colors.black,
            backgroundColor = Colors.white,
            style,
        } = props;

        const shotRef = useRef<View>(null);

        useImperativeHandle(ref, () => ({
            toPNGDataURI: async () => {
                return await captureRef(shotRef, {
                    format: 'png',
                    quality: 1,
                    result: 'data-uri',
                });
            },
            toPNGBase64: async () => {
                return await captureRef(shotRef, {
                    format: 'png',
                    quality: 1,
                    result: 'base64',
                });
            },
            toPNGFile: async () => {
                return await captureRef(shotRef, {
                    format: 'png',
                    quality: 1,
                    result: 'tmpfile',
                });
            },
        }));

        return (
            <View style={[
                {

                    alignItems: 'center',
                    justifyContent: 'center'
                },
                style
            ]}>
                <ViewShot ref={shotRef}
                          style={{
                              width: size,
                              height: size,
                              alignItems: 'center',
                              justifyContent: 'center'
                          }}
                >
                    <QRCodeStyled data={value}
                                  size={size}
                                  color={color}
                                  style={{
                                      backgroundColor,
                                  }}
                                  pieceScale={1.03}
                                  pieceBorderRadius={size / 60}
                                  isPiecesGlued={true}
                                  outerEyesOptions={{
                                      borderRadius: size / 12.85,
                                  }}
                                  innerEyesOptions={{
                                      borderRadius: 0,
                                  }}
                    />
                </ViewShot>
            </View>
        );
    })
);

QrCodeModule.displayName = 'QrCodeModule';

export { QrCodeModule };
