import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Forecast(props) {
    let img = ""
    switch(props.main){
        case 'Rain' : img = require('../rain.png') 
        break;
        case 'Mist' : img = require('../mist.png') 
        break;
        case 'Clouds' : img = require('../clouds.png') 
        break;
        case 'Sunny' : img = require('../sunny.png') 
        break;
        case 'Thunderstorms' : img = require('../thunderstorm.png') 
        break;
        case 'Fog' : img = require('../mist.png') 
        break;
        default : img = require('../clouds.png')
        break;

    }

    return (
        <View>
            <Text style = {styles.name}>{props.name}{"  /  "}{props.country}</Text>

            <View style={styles.imgIcon}>
                <Image source={img} style={{width:70,height:70}} />
            </View>

            <Text style = {styles.main}>{props.main}</Text>
            <Text style = {styles.description}>{props.description}</Text>

            <View style={{flexDirection: 'row',justifyContent: 'center',padding:20}}>
                <Text style = {styles.temp}>{props.temp}</Text>
                <Text style = {styles.c}>°C</Text>
            </View>    
            <Text style ={styles.temp_m}>𝑀𝑖𝑛🌡 {props.temp_min}°C           𝑀𝑎𝑥🌡 {props.temp_max}°C</Text>
        </View>
    )
   }

   const styles = StyleSheet.create({
       name:{
            padding: 20,
            textAlign : 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
       },
       main:{
           textAlign : 'center',
           fontSize: 30,
           fontWeight: 'bold',
           color: 'white'
       },
       description:{
            textAlign : 'center',
            fontSize: 25,
            color: 'white'
        },
        temp:{  
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
        },
        c:{
            textAlignVertical: 'center',
            fontSize: 15,
            color: 'white'
        },
        imgIcon:{
            justifyContent: 'center',
            alignItems: 'center'
        },
        temp_m:{
            textAlign : 'center',
            color: 'white',
            fontSize: 15,
        }

   })