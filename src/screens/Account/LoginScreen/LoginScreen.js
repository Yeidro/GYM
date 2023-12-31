import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../components/Auth";
import { screen } from "../../../utilidades";
import { styles } from "./LoginScreen.styles";


export function LoginScreen() {
    const navigation = useNavigation();

    const goToRegister = () => {
        navigation.navigate(screen.account.Register);
    }
    return (
        <ScrollView style={styles.content}>
            <Image source={require("../../../../assets/img/Usuario.jpg")} style={styles.image} />
            <View style={styles.content}>
                < LoginForm />
                <Text style={styles.textRegister}>
                    ¿Aún no tienes cuenta? <Text style={styles.btnRegister} onPress={goToRegister}> Regístrarse</Text>
                </Text>
            </View>

        </ScrollView>
    )
}