import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native"
import { useState } from "react"
import { supabase } from "../../utils/supabase"

export default function Cadastro({ navigation }) {
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function cadastrar() {
        setLoading(true)

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) {
            Alert.alert('Erro', error.message)
            setLoading(false)
            return
        }
        const user = data.user

        if (user) {
            const { error: insertError } = await supabase
                .from('perfil')
                .upsert([
                    {
                        id: user.id,
                        nome: nome,
                        email: email,
                    },
                ])
            if (insertError) {
                Alert.alert('Erro ao salvar perfil', insertError.message)
            } else {
                Alert.alert('Conta criada com sucesso!')
                navigation.navigate('Login')
            }
        }
        setLoading(false)
    }

    return (
        <View style={styles.body}>
            <View style={styles.card}>
                <Text style={styles.textTitle}>Criar Conta</Text>
                <Text style={styles.textCard}>E-mail</Text>
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                <Text style={styles.textCard}>Nome do usuário</Text>
                <TextInput
                    onChangeText={setNome}
                    value={nome}
                    style={styles.input}
                />
                <Text style={styles.textCard}>Senha</Text>
                <TextInput
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    style={styles.input}
                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={cadastrar}
                    disabled={loading}
                >
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
    textTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textCard: {
        color: 'white',
        marginTop: 10,
    },
    input: {
        backgroundColor: "#D9D9D9",
        marginTop: 5,
        borderRadius: 8,
        height: 50,
    },
    btn: {
        justifyContent: 'center',
        backgroundColor: "#212121",
        marginTop: 30,
        borderRadius: 8,
        height: 50,
    },
    textBtn: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },
    btn2: {
        justifyContent: 'center',
        backgroundColor: "#262B2D",
        marginTop: 15,
        borderRadius: 8,
        height: 30,
    },
})