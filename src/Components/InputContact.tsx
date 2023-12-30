import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

interface InputContactProps {
    value: string | undefined;
    onChangeText: (text: string | undefined) => void;
}

const InputContact: React.FC<InputContactProps> = ({ value, onChangeText }) => {
    return (
        <View style={styles.boxContact}>
            <Text style={styles.labelContact}>Contato</Text>
            <TextInput
                style={styles.boxTextInputContact}
                placeholder=' Insira seu contato: '
                value={value}
                onChangeText={(text) => onChangeText(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boxContact: {
        width: '80%',
        height: '14%',
        paddingLeft: 15,
        bottom: '14%',

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

export default InputContact;