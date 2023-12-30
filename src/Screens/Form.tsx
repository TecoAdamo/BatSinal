import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';



export default function Form() {


    return (
        <View style={styles.container}>

            <View style={styles.boxName}>
                <Text style={styles.labelName}>Nome</Text>
                <TextInput style={styles.boxTextInput}
                    placeholder=' Insira seu nome: '
                />
            </View>
            <View style={styles.boxContact}>
                <Text style={styles.labelContact}>Nome</Text>
                <TextInput style={styles.boxTextInputContact}
                    placeholder=' Insira seu nome: '
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxName: {
        width: '80%',
        height: '14%',
        paddingLeft: 15,
        bottom: '26%',
    },

    labelName: {
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },

    boxTextInput: {
        borderWidth: 1.5,
        padding: 5,
        borderRadius: 14,
        width: '96%',
    },
    /////////////////////////////
    boxContact: {
        width: '80%',
        height: '14%',
        paddingLeft: 15,
        bottom: '24%',

    },

    labelContact: {
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },

    boxTextInputContact: {
        borderWidth: 1.5,
        padding: 5,
        borderRadius: 14,
        width: '96%',
    },


});
