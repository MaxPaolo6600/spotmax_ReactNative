import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Image, StyleSheet, Text, View } from "react-native";

import iconHome from "../../assets/img/SlipknotIowaCapa.jpg"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#E8E8E8",
                    paddingTop: 10,
                },
                headerStyle: { backgroundColor: "#004C99" },
                headerTitle: () => (
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text>OIOIOIO</Text>
                    </View>
                ),
                headerTitleAlign: "center",
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image source={iconHome} style={styles.icon} />
                    ),
                }} />
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40,
    }
})