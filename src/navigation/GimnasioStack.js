import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GimnasioScreen } from "../screens/Gimnasio/GimnasioScreen";
import { AddGimnasioScreen } from "../screens/Gimnasio/AddGimnasioScreen"
import { screen } from "../utilidades";


const Stack = createNativeStackNavigator();


export function GimnasioStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={screen.gimnasio.gimnasios}
                component={GimnasioScreen}
                options={{ title: "Gimnasio" }}
            />
            <Stack.Screen
                name={screen.gimnasio.addGimnasio}
                component={AddGimnasioScreen}
                options={{ title: "Nuevo Gimnasio" }}
            />
        </Stack.Navigator>



    )
}