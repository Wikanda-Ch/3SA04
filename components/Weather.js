import React, { useState } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast'

export default function Wheather(props){
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <View style={styles.temp}>
            <Text style={styles.zipCode}>Zip Code is {props.zipCode}.</Text>
            <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },
    temp: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor : 'black',
        opacity: 0.4,
        width: '100%',
        height: '40%'
    },
    zipCode: {
        paddingTop : 25, 
        textAlign : 'center',
        fontSize : 20,
        color: 'white'
    }
})