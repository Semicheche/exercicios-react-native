import React from 'react'
import { Text } from 'react-native'
import Default from '../styles/Default'

// import { Inverter } from ...
export const Inverter = props => {
    const inv = props.text.split('').reverse().join('')
    return <Text style={Default.exercise}>{inv}</Text>
}
// import Inverter from ...
export default Inverter

export const MegaSenaGenerator = props => {
    const [min, max] = [1, 60]
    const numbers = Array(props.numbers || 6).fill(0)

    for (let i = 0; i < numbers.length; i++) {
        let new_number = 0
        while (numbers.includes(new_number)){
            new_number = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numbers[i] = new_number
    }

    numbers.sort((a, b) => a - b)
    return <Text style={Default.exercise}>{numbers.join(', ')}</Text>
}
