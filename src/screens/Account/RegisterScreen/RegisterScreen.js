import React from 'react'
import { View } from 'react-native';
import { Text } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterForm } from "../../../components/Auth/RegisterForm";
import { styles } from "./RegisterScreen.styles";

export function RegisterScreen() {
    return (
        <KeyboardAwareScrollView style={styles.content}>

            <Text style={styles.textRegister}>
                REGISTRO
            </Text>

            <Text style={styles.textInfo}>
                Date de alta llenado los siguientes datos.
            </Text>

            <View style={styles.content}>
                <RegisterForm />
                <Text></Text>
            </View>

        </KeyboardAwareScrollView>
    )
}