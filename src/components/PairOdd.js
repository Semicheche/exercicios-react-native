import React from 'react'
import { View, Text } from 'react-native'
import Default from '../styles/Default'

function pairOdd(num){
    let v = num % 2 == 0 ? 'PAR' : "IMPAR"
    
    return <Text style={Default.exercise}>{v}</Text>
}


export default props =>
    <View>
        {pairOdd(props.number)}
    </View>