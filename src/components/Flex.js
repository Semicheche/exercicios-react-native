import React from 'react'
import { View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container:{
        height: '100%',
    },
    noth: {
        flex: 1,
        backgroundColor: '#bdf9ed',
        alignItems: 'center',
        justifyContent: 'center',
    },
    center: {
        flex: 2,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f9bd',


    },
    south: {
        flex: 1,
        backgroundColor: '#bdf9c4',
        alignItems: 'center',
        justifyContent: 'center',


    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: '#f47f61',
        borderRadius: 50
    }
})

const Circle = props => <View style={style.circle}></View>

export default props => {
    return(
        <View style={style.container}>
            <View style={style.noth}>
                <Circle />
            </View>
            <View style={style.center}>
                <Circle />
                <Circle />
                <Circle />
            </View>
            <View style={style.south}>
                {/* <Circle /> */}
                <Circle />
            </View>
        </View>
    )
}