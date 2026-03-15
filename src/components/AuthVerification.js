import { useEffect } from "react"
import { supabase } from "../../utils/supabase"
import { View, ActivityIndicator } from "react-native"

export default function AuthVerification({ navigation }) {
    useEffect(() => {
        const sessao = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session) {
                navigation.replace("TabNavigator")
            } else {
                navigation.replace("Login")
            }
        }
        sessao()
    }, [])
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#002D85" />
        </View>
    )
}