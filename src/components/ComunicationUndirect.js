import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Default from '../styles/Default'

export const Input = props =>
    <View>
        <TextInput value={props.text}
            style={Default.input}
            onChangeText={props.callOnChange }
        />
    </View>


export class SyncText extends Component {

    state = {
        text: ''
    }

    changeText = text => {
        this.setState({text})
    }

    render(){
        return(
            <View>
                <Text style={Default.font40}>{this.state.text}</Text>
                <Input text={this.state.text}
                    callOnChange={this.changeText}/>
            </View>
        )
    }
}