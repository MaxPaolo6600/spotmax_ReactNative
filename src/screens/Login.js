import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native"
import { useState } from 'react'
import { supabase } from "../../utils/supabase"

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function logar() {
        setLoading(true)

        if (!email || !password) {
            Alert.alert('Preencha todos os campos.')
            setLoading(false)
            return
        }

        const { error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password,
        })
        if (error) {
            if (error.message.toLowerCase().includes('invalid login credentials')) {
                Alert.alert('E-mail ou senha incorretos.')
            } else {
                Alert.alert(error.message)
            }
        } else {
            navigation.replace('TabNavigator')
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
                <Text style={styles.textCard}>Senha</Text>
                <TextInput
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.btn} disabled={loading || !email || !password} onPress={logar}>
                    {
                        loading
                            ? <ActivityIndicator color="#111" />
                            : <Text style={styles.textBtn}>Logar</Text>
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.textBtn}>Cadastrar</Text>
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