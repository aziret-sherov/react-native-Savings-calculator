import React from 'react';

import {View, Text, StyleSheet, Linking} from 'react-native';
import Main from "./src/components/Main";


const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbarLink}>
                <Text style={styles.navbarLinkText}
                      onPress={() => Linking.openURL('#')}>
                    Let's plan your saving goal
                </Text>
            </View>
            <>
                <Main/>
            </>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f7f9',
        alignItems: 'center',
        height: '100%'
    }
    ,
    navbarLink: {
        height: '10%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    navbarLinkText: {
        color: 'blue',
    }

});

export default App;