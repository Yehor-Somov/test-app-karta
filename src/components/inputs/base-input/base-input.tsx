import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { TextInput, View, Text, TextInputProps, Pressable } from "react-native";
import { styles } from './styles';


export type BaseInputHandle = {
    focus: () => void,
    blur: () => void,
    clear: () => void,
};

type BaseInputProps = TextInputProps & {
    label?: string,
    errorText?: string,
    right?: React.ReactNode,
    left?: React.ReactNode,
    passwordToggle?: boolean,
};

const BaseInput = forwardRef<BaseInputHandle, BaseInputProps>(
    ({
         label,
         errorText,
         style,
         right,
         left,
         passwordToggle,
         secureTextEntry,
         ...rest
     }, ref
    ) => {

        const innerRef = useRef<TextInput>(null);
        const [hidden, setHidden] = useState<boolean>(!!secureTextEntry);

        useImperativeHandle(ref, () => ({
            focus: () => innerRef.current?.focus(),
            blur: () => innerRef.current?.blur(),
            clear: () => innerRef.current?.clear(),
        }));

        return (
            <View style={styles.wrapper}>
                {
                    label ?
                        <Text style={styles.label}>{label}</Text> :
                        null
                }

                <View style={[
                    styles.field,
                    !!errorText && { borderColor: "#f43f5e" },
                ]}>
                    {
                        left ?
                            <View style={styles.adornLeft}>{left}</View>
                            : null
                    }

                    <TextInput
                        ref={innerRef}
                        style={[styles.input, style]}
                        secureTextEntry={hidden}
                        placeholderTextColor="#999"
                        {...rest}
                    />

                    {
                        passwordToggle ? (
                            <Pressable onPress={() => setHidden(p => !p)} style={styles.adornRight}>
                                <Text>{hidden ? "👁️" : "🚫"}</Text>
                            </Pressable>
                        ) : right ? (
                            <View style={styles.adornRight}>{right}</View>
                        ) : null
                    }
                </View>

                {!!errorText && <Text style={styles.error}>{errorText}</Text>}
            </View>
        );
    }
);

BaseInput.displayName = "BaseInput";

export { BaseInput };
