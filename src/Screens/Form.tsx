import { StyleSheet, View, TouchableOpacity, Text, TextInput, Alert } from 'react-native';

import { useState } from 'react';

import InputName from '../Components/InputName';
import InputContact from '../Components/InputContact';
import InputDescription from '../Components/InputDescription';


export default function Form() {

    const [name, setName] = useState<string>()
    const [contact, setContact] = useState<string>()
    const [description, setDescription] = useState<string>()

    const cleanData = () => {
        if (description && !name && !contact) {
            Alert.alert('Preencha os outros campos ou limpe a descrição.');
        } else if (!description || !name || !contact) {
            Alert.alert('Preencha todos os campos para continuar.');
        } else {
            Alert.alert('Dados enviados com sucesso.');
            setName('')
            setContact('')
            setDescription('')
        }
    };


    return (
        <View style={styles.container}>

            <InputName
                value={name}
                onChangeText={(text: string | undefined) => setName(text)}
            />
            <InputContact
                value={contact}
                onChangeText={(text: string | undefined) => setContact(text)}
            />
            <InputDescription
                value={description}
                onChangeText={(text: string | undefined) => setDescription(text)}
            />

            <TouchableOpacity
                style={styles.btnSend}
                onPress={cleanData}
            >
                <Text style={styles.BtnText}>Enviar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSend: {
        backgroundColor: 'black',
        padding: 12,
        borderRadius: 20,
        bottom: '5%',
        width: '72%'
    },
    BtnText: {
        color: 'white',
        fontWeight: '900',
        fontSize: 20,
        textAlign: 'center'
    }


});
