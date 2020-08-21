import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Forecast(props) {
    return (
        <View>
            <Text style = {styles.content}>{props.main}</Text>
            <Text style = {styles.contentone}>{props.description}</Text>
            <View style={{flexDirection: 'row', padding: 30}}>
                <Text style={{paddingRight: 45}}></Text>
                <Text style = {styles.contenttwo}>{props.temp}</Text>
                <Text style = {styles.contentthree}>°C</Text>
            </View>    
        </View>
    )
   }

   const styles = StyleSheet.create({
       content:{
           paddingTop: 30,
           textAlign : 'center',
           fontSize: 30,
           fontWeight: 'bold',
           color: 'white'
       },
       contentone:{
            paddingTop: 30,
            textAlign : 'center',
            fontSize: 25,
            color: 'white'
        },
        contenttwo:{  
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white'
        },
        contentthree:{
            textAlignVertical: 'center',
            fontSize: 15,
            color: 'white'
        }

   })