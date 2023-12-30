import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const navigation = useNavigation();

    const HandleClick = () => {
        navigation.navigate('Form');
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/icon2.png')}
                style={styles.image}
                resizeMode="cover"
            />
            <TouchableOpacity
                onPress={HandleClick}
                style={styles.BtnContainer}>
                <Text style={styles.BtnText}>Aperte para acionar o BatSinal</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginBottom: '50%',
        width: '90%',
        height: '30%'
    },
    BtnContainer: {
        backgroundColor: 'black',
        padding: 18,
        borderRadius: 30,
        bottom: '15%'
    },
    BtnText: {
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20
    }

});
