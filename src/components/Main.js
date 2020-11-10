import React, {useState} from 'react'
import {Button, Text, View, StyleSheet, Switch} from "react-native";
import Total from "./Total";
import Calculator from "./Calculator";


const Main = () => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const [isMonthly, setIsMonthly] = useState(false);
    const [switchText, setSwitchText] = useState('calculate by monthly saving');
    const [firstInput, setFirstInputs] = useState(0);
    const [secondInput, setSecondInputs] = useState({date: (year + "-" + month)});
    const [tillMonth, setTillMonth] = useState(0)

    const toggleSwitch = () => setIsMonthly(previousState => !previousState);


    const toggleSwitchText = () => {
        if (isMonthly === false) {
            setSwitchText('calculate by total amount');
        } else {
            setSwitchText('calculate by monthly saving');
        }
    }

    const count = () => {
        function monthDiff(dateFrom, dateTo) {
            return dateTo.getMonth() - dateFrom.getMonth() +
                (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
        }

        setTillMonth(monthDiff(new Date(year + "-" + month), new Date(secondInput.date)));

    }

    const finish = () => {
        return (<>
            <View style={styles.button}>
                <Button
                    style={{height: '100%'}}
                    onPress={count}
                    title="Finish"
                    color="#2f80ed"
                />
            </View>
        </>);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saving</Text>
            <Text style={styles.title}>Calculator</Text>
            <View style={styles.switch}>
                <Switch
                    trackColor={{false: "#767577", true: "#81b0ff"}}
                    thumbColor={isMonthly ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => {
                        toggleSwitch();
                        toggleSwitchText()
                    }}
                    value={isMonthly}
                />
                <Text style={styles.switchText}>{switchText}</Text>
            </View>
            {
                isMonthly === false ?
                    <>
                        <Calculator
                            firstInputTitle={'Monthly amount'}
                            secondInputTitle={'Save until'}
                            changeFirstInput={(newValue) => setFirstInputs(newValue)}
                            changeSecondInput={(newValue) => setSecondInputs({date: newValue})}
                            getDates={secondInput.date}
                        />
                        <Total
                            isMonthly={isMonthly}
                            head={"Total amount"}
                            totalAmount={firstInput * tillMonth}
                            monthly={firstInput}
                            tillDate={secondInput.date}/>
                        {finish()}
                    </>
                    :
                    <>
                        <Calculator
                            firstInputTitle={'Total amount'}
                            secondInputTitle={'Reach coal by'}
                            changeFirstInput={(newValue) => setFirstInputs(newValue)}
                            changeSecondInput={(newValue) => setSecondInputs({date: newValue})}
                            getDates={secondInput.date}
                        />
                        <Total
                            isMonthly={isMonthly}
                            head={"Monthly amount"}
                            totalAmount={Math.floor(firstInput / tillMonth)}
                            totalAmount2={firstInput}
                            monthly={tillMonth}
                            tillDate={secondInput.date}/>
                        {finish()}
                    </>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        padding: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20,
        backgroundColor: '#fffefe',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderRadius: 30,

    },
    switch: {
        flexDirection: 'row',
        marginTop: 30,
    },
    switchText: {
        padding: 5,
        marginLeft: 10,
        color: '#102c51',
    },
    title: {
        fontSize: 30,
        color: '#102c51',
    },
    button: {
        borderRadius: 5,
        marginTop: 40,
        width: '100%',
        height: 80,
        justifyContent: 'center'
    }
});

export default Main