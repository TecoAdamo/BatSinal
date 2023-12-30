import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

interface InputNameProps {
    value: string | undefined;
    onChangeText: (text: string | undefined) => void;
}

const InputName: React.FC<InputNameProps> = ({ value, onChangeText }) => {
    return (
        <View style={styles.boxName}>
            <Text style={styles.labelName}>Nome</Text>
            <TextInput
                style={styles.boxTextInput}
                placeholder=' Insira seu nome: '
                value={value}
                onChangeText={(text) => onChangeText(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boxName: {
        width: '80%',
        height: '14%',
        paddingLeft: 15,
        bottom: '14%',
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
});
export default InputName;