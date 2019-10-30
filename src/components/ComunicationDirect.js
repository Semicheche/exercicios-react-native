import React from 'react'
import { View, Text } from 'react-native'

const font = {style: { fontSize: 30 } }

function inheritProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, {...props, ...c.props} ))
}

export const Children = props =>
    <View>
        <Text {...font}>Children: { props.name } { props.lastname }</Text>
    </View>

export const Father = props =>
    <View>
        <Text {...font}>Father: { props.name } { props.lastname } </Text>
        {inheritProps(props)}
    </View>

export const GrandFather = props =>
    <View>
        <Text {...font}>GranFather: {props.name} { props.lastname }</Text>
        <Father name='Andre' lastname={ props.lastname }>
            <Children name='Ana' />
            <Children name='Paulo' />
            <Children name='Pedro' />
            <Children name='Gui' />
        </Father>
        <Father {...props} name='Joao'>
            <Children name='Maria' />
            <Children name='Joaquin' />
        </Father>
    </View>

export default GrandFather