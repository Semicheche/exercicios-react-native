import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Sample from './components/Sample'
import PairOdd from './components/PairOdd'
import { Inverter, MegaSenaGenerator } from './components/GeneratorMega'

export default class App extends Component {
	render(){
		return(
			<View style={ styles.conainer}>
				<Sample text='LUCIANO SEMICHECHE'/>
				<PairOdd number={33} />
				<Inverter text='LUCIANO SEMICHECHE' />
				<MegaSenaGenerator numbers={6} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	conainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})