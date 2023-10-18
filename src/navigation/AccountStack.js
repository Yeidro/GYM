import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/Account/AccountScreen";
import { screen } from "../utilidades";
import { LoginScreen } from "../screens/Account/LoginScreen";
import { RegisterScreen } from "../screens/Account/RegisterScreen";

const Stack = createNativeStackNavigator();

export function AccountStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={screen.account.account}
                component={AccountScreen}
                options={{ title: "Cuenta" }}
            />
            <Stack.Screen name={screen.account.Login}
                component={LoginScreen}
                options={{ title: "Iniciar sesión" }}
            />
            <Stack.Screen name={screen.account.Register}
                component={RegisterScreen}
                options={{ title: "Registrate" }}
            />
        </Stack.Navigator>
    )
}