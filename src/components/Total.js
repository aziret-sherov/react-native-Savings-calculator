import React, {useState} from 'react'
import {Text, View, StyleSheet} from "react-native";


const Total = (props) => {
    let chekText=props.isMonthly;
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.topContainerLeftBox}>
                    <Text style={styles.topContainerLeftText}>{props.head}</Text>
                </View>
                <View style={styles.topContainerRightBox}>
                    <Text style={styles.topContainerRightText}>${props.totalAmount}</Text>
                </View>
            </View>
            {
                chekText === false ?
                    <View style={styles.botContainer}>
                        <Text style={styles.botContainerText}>
                            You are saving ${props.monthly} monthly to save ${props.totalAmount} by {props.tillDate}
                        </Text>
                    </View>
                    :
                    <View style={styles.botContainer}>
                        <Text style={styles.botContainerText}>
                            You are planning {props.monthly} monthly deposits to reach your ${props.totalAmount2} goal by {props.tillDate}
                        </Text>
                    </View>
            }
        </View>

    );

}

const styles = StyleSheet.create({
    container: {

        width: '100%',
        height: '30%',
        borderWidth: 1,
        marginTop: 60,
        borderRadius: 5,
    },
    topContainer: {
        alignItems: 'center',
        height: '70%',
        width: '100%',
        flexDirection: 'row',
        padding: 10,
    },
    botContainer: {
        width: '100%',
        height: '30%',
        alignItems:'center',
        justifyContent:'center',
    },
    topContainerLeftText: {
        fontSize: 20,
        color:'#1f395c',
    },
    topContainerRightText: {
        fontSize: 40,
        color:'#2f80ed',
    },
    topContainerLeftBox:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    topContainerRightBox:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botContainerText:{
        fontSize:15,
        color:'#2c4566',
    }
})


export default Total