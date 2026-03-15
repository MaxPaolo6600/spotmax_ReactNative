
import { createStackNavigator } from "@react-navigation/stack"

import Cadastro from "../screens/Cadastro"
import Login from "../screens/Login"
import TabNavigator from "./TabNavigator"

const Stack = createStackNavigator()

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    )
}