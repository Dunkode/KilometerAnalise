import { View, Text, StyleSheet, TextInput, Alert} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import React, { useState } from 'react'
import { Button } from '@rneui/base';

var colors_gradient = ['#a1c4fd', '#c2e9fb']

const GradientText = (props) => {
    return (
      <MaskedView maskElement={<Text {...props} />}>
          <LinearGradient
            colors={colors_gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
            <Text {...props} style={[props.style, { opacity: 0}]} />
          </LinearGradient>
      </MaskedView>
    );
  };


  
  export default function InformData({navigation}) {
      
    const [km, setKm] = useState("")
    const [lt, setLt] = useState("")

    const enable = km != "" && lt != ""

    const calcular = () =>{
        let calc = parseInt(km)/parseInt(lt)
        console.log('resultado = ' + calc)
        navigation.push('MedianResult', {calc})
    }
    

      return (
    <View style={styles.container}>
      <GradientText
        style={styles.tittle}
      >KilometerAnaliser</GradientText>

      <TextInput
        placeholder='Informe a quilometragem'
        style={styles.textInput}
        keyboardType= 'number-pad'
        textAlign='center'
        onChangeText={setKm}
        value={km}
        
        />

    <TextInput
        placeholder='Informe a quantidade de litros'
        style={styles.textInput}
        keyboardType= 'number-pad'
        textAlign='center'
        onChangeText={setLt}
        value={lt}
      />

        <Button
              title="Calcular"
              buttonStyle={{
                borderColor: 'rgba(78, 116, 289, 1)',
                backgroundColor: '#7cd8f7',
              }}
              type="outline"
              raised
              titleStyle={{ color: 'rgba(8, 116, 289, 1)' }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={()=> calcular()}
              disabled={!enable}
            />

    </View>
  )

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2575fc'

    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "rgba(78, 116, 289, 1)",
        margin: 5,
        width: 250,
        alignItems:'center',
        backgroundColor:'#c2e9fb'
    },
    tittle:{
        color:'#00f2fe',
        fontSize: 42,
        paddingBottom: 35,
        textShadowColor: "#00f2fe",
        textShadowRadius: 10

    }
})