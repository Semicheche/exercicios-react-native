import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidateProps = props =>
    <Text style={{fontSize: 35}}>
        {props.label}
        {props.ano + 2000}
    </Text>

ValidateProps.defaultProps= {
    label: 'ANO: ' 
}

ValidateProps.PropTypes = {
    ano: PropTypes.number.isRequired
}


export default ValidateProps