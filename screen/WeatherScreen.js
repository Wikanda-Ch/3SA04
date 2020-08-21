import React from 'react'
import { View } from 'react-native'
import Wheather from '../components/Weather'

export default function WeatherScreen({route}){
    return (
        <View>
            <Wheather zipCode={route.params.zipCode}/>
        </View>
    )
}