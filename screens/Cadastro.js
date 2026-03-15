import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function Cadastro() {
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
                <TouchableOpacity style={styles.btn1}>
                    <Text>Cadastrar</Text>
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
        fontSize: 20,
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
        backgroundColor: "#212121",
    },
})