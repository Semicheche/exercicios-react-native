import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const students = [
    {id: 1, name: 'Maria', note: 7.3 },
    {id: 2, name: 'Luana', note: 8.8 },
    {id: 3, name: 'Ana', note: 6.8 },
    {id: 4, name: 'josé', note: 9.5 },
    {id: 5, name: 'Paulo', note: 8.0 },
    {id: 6, name: 'Joel', note: 9.0 },
    {id: 7, name: 'Claudia', note: 7.5 },
    {id: 8, name: 'Rose', note: 6.5 },
    {id: 9, name: 'Diego', note: 5.0 },
    {id: 10, name: 'Maria', note: 7.3 },
    {id: 11, name: 'Luana', note: 8.8 },
    {id: 12, name: 'Ana', note: 6.8 },
    {id: 13, name: 'josé', note: 9.5 },
    {id: 14, name: 'Paulo', note: 8.0 },
    {id: 15, name: 'Joel', note: 9.0 },
    {id: 16, name: 'Claudia', note: 7.5 },
    {id: 17, name: 'Rose', note: 6.5 },
    {id: 18, name: 'Diego', note: 5.0 }
]

const cellStyle = {
    paddingHorizontal: 15,
    height: 50,
    backgroudColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // FLEX
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    // alignItems: 'flex-start'
    // alignItems: 'flex-end'
}

export const Student = props =>
    <View style={cellStyle}>
        <Text style={{ padding: 2 }}>ID: {props.id}</Text>
        <Text>Name: {props.name}</Text>
        <Text style={{fontWeight: 'bold'}}>Note: {props.note}</Text>
    </View>

export default props => {
    const renderItems = ({item}) => {
        return <Student {...item}/>
    }

    return(
        <ScrollView>
            <FlatList data={students}
                    renderItem={renderItems}
                    keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}