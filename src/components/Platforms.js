import React from 'react'
import { View, Button, Alert, ToastAndroid, Platform } from 'react-native'

export default props => {
    const notifiation = msg =>{
        if (Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG)
        }else{
            Alert.alert('Information!', msg)
        }
    }

    return(
        <View  style={{ alignItems: 'center', marginTop: 300 }}>
             <Button title='Platform?'
                style={{ alignItems: 'center' }}
                onPress={() => notifiation('Parabens!!!')}></Button>
        </View>
    )
}