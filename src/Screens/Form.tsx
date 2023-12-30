import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';



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
                <Text style={styles.labelContact}>Contact</Text>
                <TextInput style={styles.boxTextInputContact}
                    placeholder=' Insira seu nome: '
                />
            </View>
            <View style={styles.boxDescription}>
                <Text style={styles.labelDescription}>Descrição</Text>
                <TextInput style={styles.boxTextInputDescription}
                    placeholder='Descreva o caso: '
                />
            </View>
            <TouchableOpacity style={styles.btnSend}>
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
    /////////////////////////////
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
    /////////////////////////////
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
    //////////////////////////////
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
