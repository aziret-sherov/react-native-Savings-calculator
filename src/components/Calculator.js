import React from 'react'
import {Text, TextInput, View, StyleSheet,} from 'react-native'
import DatePicker from "react-native-datepicker";

const Calculator = (props) => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>{props.firstInputTitle}</Text>
            <TextInput
                keyboardType={'numeric'}
                onChangeText={props.changeFirstInput}
                style={styles.input}
            />
            <Text style={styles.inputTitle}>{props.secondInputTitle}</Text>
            <DatePicker
                style={{width: "100%"}}
                mode="date"
                placeholder="select date"
                format="YYYY-MM"
                minDate={year + "-" + month}
                maxDate="9999-12"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                }}
                date={props.getDates}
                onDateChange={props.changeSecondInput}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: '25%',
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        borderRadius: 5,
    },
    container: {
        marginTop: 30,
        width: '100%',
        height: '20%',
    },
    inputTitle: {
        marginTop: 10,
        color: '#102c51',
        fontSize: 20
    }
})

export default Calculator