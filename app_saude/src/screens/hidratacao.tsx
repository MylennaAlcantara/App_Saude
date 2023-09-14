import {View, Text, Image, StyleSheet} from "react-native"

export const Hidratacao = () => {
    return(
        <View style={styles.container}>
            <Text style={{color: "#6A0000", fontWeight: "bold", fontSize: 40}}>Hidratação</Text>
            <View style={styles.copoCheio}>
                <Image source={require("../../public/images/copo.png")} style={styles.image}/>
            </View>
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
    copoCheio: {
        alignItems: "center",
        justifyContent: "center",
        width: 85,
        height: 100,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        borderLeftWidth: 15,
        borderLeftColor: 'transparent',
        borderRightWidth: 15,
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 100,
        borderTopColor: 'blue',
    },
    copoMeio: {
        alignItems: "center",
        justifyContent: "center",
        width: 85,
        height: 100,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        borderLeftWidth: 15,
        borderLeftColor: 'transparent',
        borderRightWidth: 15,
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 100,
        borderTopColor: 'blue',
    },
    copoBaixo: {
        alignItems: "center",
        justifyContent: "center",
        width: 85,
        height: 100,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        borderLeftWidth: 15,
        borderLeftColor: 'transparent',
        borderRightWidth: 15,
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 100,
        borderTopColor: 'blue',
    },
})