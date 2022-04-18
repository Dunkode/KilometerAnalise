import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Card, color } from '@rneui/base'

export default function MedianResult({route}) {
    
    const [classification, setClassification] = useState(null)
    const [cor, setCor] = useState('white')
    const median = route.params.calc
    
    const classifyMedian = () => {
        if (median > 12){
            setCor('#84fab0')
            setClassification('A')
        } else if (median > 10 && median <= 12){
            setCor('#d4fc79')
            setClassification('B')
        } else if (median > 8 && median <= 10){
            setCor('#fee140')
            setClassification('C')
        } else if (median > 4 && median <= 8){
            setCor('#f9d423')
            setClassification('D')
        } else {
            setCor('#fa709a')
            setClassification('E')
        }
    }


    useLayoutEffect(() => {
        classifyMedian()
        
    }, [])


  return (
    <View style={[styles.container, {backgroundColor: cor}]}>
        <View style={styles.subContainer}>
            <Text 
            style={styles.tittle}>
            
                Classificação: {classification}
            
            </Text>         
            <Text 
            style={styles.tittle}>
            
                Média: {median.toFixed(2)}
            
            </Text>      
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',        
    },
    subContainer: {
        alignItems: 'center'
    },
    tittle:{
        color: 'black',
        backgroundColor : "#2089dc",
        padding : 10,
        marginBottom : 10,
        fontSize: 40,
        borderRadius: 10,
    }
})