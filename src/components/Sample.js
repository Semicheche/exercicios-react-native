import React from 'react'
import { Text } from 'react-native'
import Default from '../styles/Default'

// export default function(props){
//     return <Text>{props.text}</Text>
// }
// ARROW Functions 
export default props => 
    <Text style={[Default.exercise]}>{props.text}</Text>