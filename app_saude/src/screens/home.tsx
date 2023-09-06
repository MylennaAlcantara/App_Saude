import { View, StyleSheet, Text } from "react-native"

export const Home = () =>{
    return(
        <View style={styles.container}>
            <Text style={{color: "#6A0000"}}>Aplicativo de saúde</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "F1FFF1",
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})