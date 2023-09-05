import { View, StyleSheet, Text } from "react-native"

export const Imc = () =>{
    return(
        <View style={styles.container}>
            <Text style={{color: "white"}}>Calcular IMC</Text>
            <Text>Peso:</Text>
            <Text>Altura:</Text>
            <Text>Idade:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})