import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utilidades";
import { styles } from "./UserGuestScreen.styles";


export function UserGuestScreen() {

    const navigation = useNavigation();
    const goToLogin = () => {
        navigation.navigate(screen.account.Login)
    }
    return (
        <ScrollView centerContent={true} style={styles.content}>
            <Text style={styles.title}>ENTRENAMIENTO EN CASA</Text>
            <Image source={require("../../../../assets/img/comenzar.png")} style={styles.image} />
            <Text style={styles.description}>¡Tranforma tu cuerpo!</Text>
            <View>
                <Button title="COMENZAR" onPress={goToLogin} buttonStyle={styles.btnStyle} titleStyle={styles.btnTitleStyle} />
            </View>

        </ScrollView>
    )
}