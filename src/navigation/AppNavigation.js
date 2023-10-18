import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { screen } from "../utilidades";
import { GimnasioStack } from "./GimnasioStack"
import { AccountStack } from "./AccountStack";


const Tab = createBottomTabNavigator();

export function AppNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#00a680",
            tabBarInactiveTintColor: "#646464",
            tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
        })}>
            <Tab.Screen
                name={screen.gimnasio.tab}
                component={GimnasioStack}
                options={{ title: "Gimnasio" }}
            />


            <Tab.Screen
                name={screen.account.tab}
                component={AccountStack}
                options={{ title: "cuenta" }}
            />
        </Tab.Navigator >
    );
}


function screenOptions(route, color, size) {
    let iconName;

    if (route.name === screen.gimnasio.tab) {
        iconName = "compass-outline";
    }

    if (route.name === screen.account.tab) {
        iconName = "heart-outline";
    }

    return (
        <Icon
            type="material-community"
            name={iconName}
            color={color}
            size={size} />
    )

}