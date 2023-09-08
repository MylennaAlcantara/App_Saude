import { useState } from "react"
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from "react-native"

type typeImc = {
    peso: string,
    altura: string,
    idade: string
}

export const Imc = () =>{
    const [dados, setDados] = useState<typeImc>({
        peso: "",
        altura: "",
        idade: ""
    });
    const [imc, setImc] = useState<number>(0);
    const [classificacao, setClassificacao] = useState("")

    async function cacularImc(){
        if(dados.peso && dados.altura && dados.idade){
            const peso = parseFloat(dados.peso.replace(",","."));
            const altura = parseFloat(dados.altura.replace(",","."))
            setImc(( peso / ( altura * altura))); 
            await verificarClassificacao();
        }else{
          alert("Preencha todos os campos!")
        }
    }

    async function verificarClassificacao() {
        if(imc <= 18.50){
            setClassificacao("Magreza");
        }else if( imc > 18.50 && imc <= 24.90){
            setClassificacao("Normal")
        }else if(imc > 24.90 && imc <= 30){
            setClassificacao("Sobrepeso")
        }else{
            setClassificacao("Obesidade")
        }
    }

    return(
        <View style={styles.container}>
            <Text style={{color: "#6A0000", fontWeight: "bold", fontSize: 40}}>Calcular IMC</Text>
            <View style={styles.containerFlex}>
                <View style={styles.camposLabel}>
                    <Text style={styles.label}>Peso:</Text>
                    <Text style={styles.label}>Altura:</Text>
                    <Text style={styles.label}>Idade:</Text>
                </View>
                <View style={styles.camposInput}>
                    <TextInput keyboardType="decimal-pad" value={dados.peso} placeholder="Ex.: 60,546" style={styles.input} onChangeText={(e)=> setDados({ ...dados, peso: e.replace('.', ',') })}/>
                    <TextInput keyboardType="decimal-pad" value={dados.altura}  placeholder="Ex.: 1,50"  style={styles.input} onChangeText={(e)=> setDados({...dados, altura: e.replace('.', ',')})}/>
                    <TextInput keyboardType="decimal-pad" value={dados.idade}  placeholder="Ex.: 24"  style={styles.input} onChangeText={(e)=> setDados({...dados, idade: e.replace('.', ',')})}/>
                </View>
                <View style={styles.camposMedidas}>
                    <Text style={styles.label}>Kg</Text>
                    <Text style={styles.label}>m</Text>
                    <Text style={styles.label}>Anos</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={cacularImc}>
                <Image source={require("../../public/images/calculadora.png")} style={{marginRight: 5, height: 30, width: 30, tintColor: "white"}}/>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>Calcular</Text>
            </TouchableOpacity>
            {imc ? (
                <View style={{height: 200, alignItems: "center", justifyContent: "center"}}>
                    <Text style={{color: "#6A0000", fontWeight: "bold", fontSize: 28}}>Seu Imc é de: {imc.toFixed(2).replace(".",",")}.</Text>
                    <Text style={{color: classificacao === "Magreza" ? "yellow" : classificacao === "Normal" ? "green" : classificacao === "Sobrepeso" ? "orange" : "red", fontWeight: "bold", fontSize: 20}}>{classificacao}.</Text>
                </View>
            ):null}
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
    }
    
})