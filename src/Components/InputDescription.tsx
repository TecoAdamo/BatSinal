import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

interface InputDescriptionProps {
    value: string | undefined;
    onChangeText: (text: string | undefined) => void;
}

const InputDescription: React.FC<InputDescriptionProps> = ({ value, onChangeText }) => {
    return (
        <View style={styles.boxDescription}>
            <Text style={styles.labelDescription}>Descrição</Text>
            <TextInput
                style={styles.boxTextInputDescription}
                placeholder=' Descreva o caso: '
                value={value}
                onChangeText={(text) => onChangeText(text)}
                multiline={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boxDescription: {
        width: '80%',
        height: '20%',
        paddingLeft: 15,
        bottom: '14%',

    },

    labelDescription: {
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
    },

    boxTextInputDescription: {
        borderWidth: 1.5,
        padding: 5,
        borderRadius: 14,
        paddingTop: 12,
        width: '96%',
        height: 100,
        textAlignVertical: 'top',

    },
});
export default InputDescription;