import { View, StyleSheet, Text } from "react-native"

export const Home = () =>{
    return(
        <View style={styles.container}>
            <Text style={{color: "white"}}>Aplicativo de saúde</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
    },
    
})