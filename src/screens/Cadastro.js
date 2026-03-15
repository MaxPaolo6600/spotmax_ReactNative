import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function Cadastro({ navigation }) {

    async function cadastrar(){
        navigation.navigate('Login')
    }

    return (
        <View style={styles.body}>
            <View style={styles.card}>
                <Text style={styles.textTitle}>Criar Conta</Text>
                <Text style={styles.textCard}>E-mail</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.textCard}>Nome do usuário</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={styles.textCard}>Senha</Text>
                <TextInput
                    style={styles.input}
                />
                <TouchableOpacity style={styles.btn} onPress={cadastrar}>
                    <Text style={styles.textBtn}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textBtn}>Logar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262B2D',
    },
    card: {
        backgroundColor: '#137FA8',
        width: 300,
        borderRadius: 10,
        padding: 10,
    },
    textTitle:{
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textCard:{
        color: 'white',
        marginTop: 10,
    },
    input:{
        backgroundColor: "#D9D9D9",
        marginTop: 5,
        borderRadius: 8,
        height: 50,
    },
    btn:{
        justifyContent: 'center',
        backgroundColor: "#212121",
        marginTop: 30,
        borderRadius: 8,
        height: 50,
    },
    textBtn:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
    btn2:{
        justifyContent: 'center',
        backgroundColor: "#262B2D",
        marginTop: 15,
        borderRadius: 8,
        height: 30,
    },
})