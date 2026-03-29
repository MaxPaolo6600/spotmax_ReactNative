import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";

import Home from "../screens/Home";
import Config from "../screens/Config";
import MinhasObras from "../screens/MinhasObras";
import Perfil from "../screens/Perfil";

import iconHome from "../../assets/img/casa_icon.png"
import iconConfig from "../../assets/img/definicoes_icon.png"
import iconEditar from "../../assets/img/editar_icon.png"
import perfil from "../../assets/img/do-utilizador (1).png"
import estatisticas from "../../assets/img/estatisticas.png"
import cartao from "../../assets/img/cartao-de-credito.png"

const Tab = createBottomTabNavigator();

export default function TabNavigator({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#212121",
                    borderColor: '#212121',
                    paddingTop: 25,
                    height: 120,
                },
                headerStyle: {
                    backgroundColor: "#212121",
                    shadowColor: '#5C0F0F',
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.9,
                    shadowRadius: 100,
                    elevation: 100,
                    height: 110,
                },
                headerTitle: () => (
                    <View style={styles.header}>
                        <View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Perfil")}
                                style={styles.btnPerfil}
                            >
                                <Image source={perfil} style={styles.imgPerfil} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.scroll}
                            >
                                <TouchableOpacity style={styles.btnsTop}>
                                    <Image source={estatisticas} style={styles.iconTop} />
                                    <Text style={styles.textBtns}>Top 50 global</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnsTop}>
                                    <Image source={estatisticas} style={styles.iconTop} />
                                    <Text style={styles.textBtns}>Top 50 nacional</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnsTop}>
                                    <Image source={cartao} style={styles.iconTop} />
                                    <Text style={styles.textBtns}>Assinaturas</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnsTop}>
                                    <Image source={cartao} style={styles.iconTop} />
                                    <Text style={styles.textBtns}>Entre em conatato</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                ),
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Config"
                component={Config}
                options={{
                    tabBarIcon: () => (
                        <Image source={iconConfig} style={styles.icon} />
                    ),
                }} />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Image source={iconHome} style={styles.icon} />
                    ),
                }} />
            <Tab.Screen
                name="MinhasObras"
                component={MinhasObras}
                options={{
                    tabBarIcon: () => (
                        <Image source={iconEditar} style={styles.icon} />
                    ),
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    },
    icon: {
        width: 35,
        height: 35,
    },
    iconTop: {
        width: 25,
        height: 25,
    },
    btnPerfil: {
        borderWidth: 2,
        padding: 6,
        borderColor: "#274E5D",
        borderRadius: 100,
    },
    imgPerfil: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    btnsTop: {
        borderColor: "#5C0F0F",
        backgroundColor: "#262B2D",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderRadius: 20,
        paddingStart: 15,
        paddingEnd: 15,
        height: 45,
        marginEnd: 8,
    },
    textBtns: {
        color: 'white',
        marginStart: 10,
    },
    scroll: {
        paddingStart: 20,
        paddingEnd: 50,
        alignItems: "center"
    },
})