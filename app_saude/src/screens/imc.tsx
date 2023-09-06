import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native"

type typeImc = {
    peso: number,
    altura: number,
    idade: number
}

export const Imc = () =>{
    const [dados, setDados] = useState<typeImc>({
        peso: 0.000,
        altura: 0.00,
        idade: 0
    });
    const [imc, setImc] = useState<number>(0);
    const [classificacao, setClassificacao] = useState("")

    function cacularImc(){
        if(dados.peso && dados.altura && dados.idade){
            setImc(dados.peso / (dados.altura * dados.altura));
            if(imc < 18.5){
                setClassificacao("Magreza");
            }else if( imc > 18.5 && imc <= 24.9){
                setClassificacao("normal")
            }else if(imc > 24.9 && imc <= 30){
                setClassificacao("Sobrepeso")
            }else{
                setClassificacao("Obesidade")
            }
        }else{
          alert("Preencha todos os campos!")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={{color: "#6A0000", fontWeight: "bold", fontSize: 28}}>Calcular IMC</Text>
            <View style={styles.containerFlex}>
                <View style={styles.camposLabel}>
                    <Text style={styles.label}>Peso:</Text>
                    <Text style={styles.label}>Altura:</Text>
                    <Text style={styles.label}>Idade:</Text>
                </View>
                <View style={styles.camposInput}>
                    <TextInput value={String(dados.peso).replace(".",",")} placeholder="Ex.: 60,546" style={styles.input} onChangeText={(e)=> setDados({...dados, peso: parseFloat(e)})}/>
                    <TextInput value={String(dados.altura).replace(".",",")}  placeholder="Ex.: 1,50"  style={styles.input} onChangeText={(e)=> setDados({...dados, altura: parseFloat(e)})}/>
                    <TextInput value={String(dados.idade).replace(".",",")}  placeholder="Ex.: 24"  style={styles.input} onChangeText={(e)=> setDados({...dados, idade: parseFloat(e)})}/>
                </View>
                <View style={styles.camposMedidas}>
                    <Text style={styles.label}>Kg</Text>
                    <Text style={styles.label}>m</Text>
                    <Text style={styles.label}>Anos</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>cacularImc}>
                <Image source={require("../../public/images/calculadora.png")} style={{marginRight: 5, height: 30, width: 30, tintColor: "white"}}/>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Calcular</Text>
            </TouchableOpacity>
            <Text>Seu Imc é de: {imc}.</Text>
            <Text>{classificacao}.</Text>
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
        margin: 20
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
    }
    
})