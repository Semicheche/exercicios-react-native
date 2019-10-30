import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Sample from './components/Sample'
import PairOdd from './components/PairOdd'
import { Inverter, MegaSenaGenerator } from './components/GeneratorMega'
import Contador from './components/Counter'
import Plataform from './components/Platforms'
import ValidateProps from './components/ValidateProps'
import Event from './components/Event'
import GrandFather from './components/ComunicationDirect'
import { SyncText } from './components/ComunicationUndirect'
import Flexlist from './components/FlexList' 
import Flex from './components/Flex'

export default createDrawerNavigator({
    Flex: Flex,
    Flexlist: {
        screen: Flexlist
    },
    SyncText: {
        screen: SyncText,
        navigationOptions: { title: 'Sync Text'}
    },
    GrandFather: {
        screen: () => <GrandFather name='Silverio' lastname='Silva'/>
    },
    Event: Event,
    ValidateProps: {
        screen: () => <ValidateProps label="ANO: " ano={18} />
    },
    Plataform: Plataform,
    Contador: {
        screen: () => <Contador number={0}/>
    },
    MegaSenaGenerator: {
        screen: () => <MegaSenaGenerator />
    },
    Inverter: {
        screen: () => <Inverter text='React'/>
    },
    PairOdd: {
        screen: () => <PairOdd number={23} />,
        navigationOptions: {title: "Par Impar"}
    },
    Sample: {
        screen: () => <Sample text='Sample'/>
    }
}, { drawerWidth: 300})