import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Default from '../styles/Default'

export default class Counter extends Component {

    state = {
        number: this.props.number
    }

    moreOne = () => {
        this.setState({ number: this.state.number + 1})
    }

    clear = () => {
        this.setState({ number: 0})
    }

    render() {
        return (
            <View>
                <Text style={{fontSize:40,alignItems: 'center', marginTop: 100}}>{this.state.number}</Text>
                <TouchableHighlight
                    style={Default.exercise}
                    onPress={this.moreOne}
                    onLongPress={this.clear}
                >
                    <Text>Incremetar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}