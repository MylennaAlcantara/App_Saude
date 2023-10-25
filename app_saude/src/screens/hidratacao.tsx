import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from "react";

export const Hidratacao = () => {
    const [peso, setPeso] = useState("");
    const [quantidadeAgua, setQuantidadeAgua] = useState<number>(0);
    const [quantidadeBebida, setQuantidadeBebida] = useState("");
    const [nivel, setNivel] = useState("alto");
    const [calculado, setCalculado] = useState(false);

    useEffect(() => {
        setQuantidadeAgua(parseFloat(peso) * 35);
    }, [peso, quantidadeBebida])

    function calcularAgua() {
        if (quantidadeAgua > parseFloat(quantidadeBebida)) {
            alert("Você precisa beber no minimo: " + quantidadeAgua + "L");
            setNivel("baixo");
        } else if (parseFloat(quantidadeBebida) > (quantidadeAgua / 2) && quantidadeAgua > parseFloat(quantidadeBebida)) {
            alert("Você precisa beber no minimo: " + quantidadeAgua + "L");
            setNivel("medio");
        } else {
            alert("Parabéns! Você bebeu mais do que o seu ideal de: " + quantidadeAgua + "L");
            setNivel("alto");
        }
        setCalculado(true);
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: "#6A0000", fontWeight: "bold", fontSize: 40, position: "absolute", top: 100 }}>Hidratação</Text>
            <LinearGradient
                colors={nivel === "baixo" ? copoVazio.colors : nivel === "medio" ? copoMeio.colors : copoCheio.colors}
                locations={nivel === "baixo" ? copoVazio.location : nivel === "medio" ? copoMeio.location : copoCheio.location}>
                <View style={styles.copo}>
                    <Image source={require("../../public/images/copo.png")} style={styles.image} />
                </View>
            </LinearGradient>
            <View style={styles.containerFlex}>
                <View style={styles.camposLabel}>
                    <Text style={styles.label}>Digite seu peso:</Text>
                    <Text style={styles.label}>Quayo tomou de agua?:</Text>
                </View>
                <View style={styles.camposInput}>
                    <TextInput keyboardType="decimal-pad" style={styles.input} value={peso} onChangeText={(e) => setPeso(e)} placeholder="Ex.: 60,456" />
                    <TextInput keyboardType="decimal-pad" style={styles.input} value={quantidadeBebida} onChangeText={(e) => setQuantidadeBebida(e)} placeholder="Ex.: 60,456" />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={calcularAgua}>
                <Image source={require("../../public/images/calculadora.png")} style={{ marginRight: 5, height: 30, width: 30, tintColor: "white" }} />
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Calcular</Text>
            </TouchableOpacity>
            {calculado === true && <Text style={{ marginTop: 30, color: "#BE3737", fontWeight: "bold", fontSize: 28 }}>Seu nivel de agua esta {nivel}!</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: "#F1FFF1",
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerFlex: {
        flexDirection: "row",
        backgroundColor: "#F1FFF1",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    camposLabel: {
        height: 100,
        alignItems: "flex-end",
        justifyContent: "space-around",
        margin: 5
    },
    camposMedidas: {
        height: 100,
        alignItems: "flex-start",
        justifyContent: "space-around",
        margin: 5
    },
    camposInput: {
        height: 100,
        alignItems: "flex-start",
        justifyContent: "space-around",
        margin: 5
    },
    label: {
        color: "#6A0000",
    },
    input: {
        width: 100,
        height: 30,
        borderBottomColor: "#C4F0C5",
        borderBottomWidth: 2,
        textAlign: "right",
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: "#BE3737",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    image: {
        height: 100,
        width: 100,
        position: "absolute",
    },
    copo: {
        alignItems: "center",
        justifyContent: "center",
        width: 85,
        height: 100,
        borderLeftWidth: 15,
        borderLeftColor: "#F1FFF1",
        borderRightWidth: 15,
        borderRightColor: "#F1FFF1",
        borderTopWidth: 100,
        borderTopColor: "transparent"
    },
});

const copoMeio = {
    colors: ['transparent', 'blue'],
    location: [0.5, 0.7]
}
const copoCheio = {
    colors: ['blue', 'blue'],
    location: [1, 1]
}
const copoVazio = {
    colors: ['transparent', 'transparent', 'blue'],
    location: [0.5, 0.7, 0.5]
}