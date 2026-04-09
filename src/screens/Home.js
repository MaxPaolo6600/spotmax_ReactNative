import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { supabase } from "../../utils/supabase"
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import procurar from "../../assets/img/procurar.png"

export default function Home({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [musicas, setMusicas] = useState([]);
    const [currentTrack, setCurrentTrack] = useState(null);

    useEffect(() => {
        carregarPagina();
    }, []);

    async function carregarPagina() {
        try {
            const { data, error } = await supabase
                .from("musicas")
                .select(`
                    id,
                    nome_musica,
                    audio_url,
                    criacao (
                        id,
                        tipo,
                        genre,
                        release_date,
                        image_url,
                        nome_artista,
                        albums (
                            id,
                            nome_album
                        )
                    )
                `);

            if (error) throw error;
            setMusicas(data);
        } catch (error) {
            console.error("Erro ao carregar músicas:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.searchMain}>
                <TextInput
                    style={styles.search}
                />
                <Image source={procurar} style={styles.searchImg} />
            </View>
            <View style={styles.mainMusic}>
                <Text style={styles.title}>Músicas</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
                    {musicas.map((musica) => {
                        const album = musica.criacao?.albums?.[0];
                        return (
                            <TouchableOpacity key={musica.id} onPress={() => playMusic(musica)} style={styles.card}>
                                <View style={styles.imageContainer}>
                                    {musica.criacao?.image_url && (
                                        <Image source={{ uri: musica.criacao.image_url }} style={styles.image} />
                                    )}
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title} numberOfLines={1}>
                                        {musica.nome_musica}
                                    </Text>
                                    <Text style={styles.album} numberOfLines={1}>
                                        {album?.nome_album || ""}
                                    </Text>
                                    <Text style={styles.artist}>
                                        {musica.criacao?.nome_artista}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#262B2D',
    },
    mainMusic:{
        padding: 10,
    },
    carousel: {
        gap: 24,
    },
    card: {
        backgroundColor: '#212121',
        borderRadius: 16,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imageContainer: {
        height: 180,
        width: 180,
        justifyContent: 'center',
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 16,
        resizeMode: 'cover',
    },
    textContainer: {
        padding: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: "white",
        paddingBottom: 10,
    },
    album: {
        fontSize: 12,
        opacity: 0.7,
        color: "white",
    },
    artist: {
        fontSize: 14,
        opacity: 0.5,
        marginBottom: 8,
        color: "white",
    },
    searchMain: {
        position: 'relative',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    search: {
        backgroundColor: "#212121",
        marginStart: 10,
        width: 200,
        borderRadius: 25,
        borderColor: "#274E5D",
        borderWidth: 1,
        paddingStart:45,
        color: "white",
    },
    searchImg: {
        position: 'absolute',
        width: 20,
        height: 20,
        marginStart: 30,
    },
})