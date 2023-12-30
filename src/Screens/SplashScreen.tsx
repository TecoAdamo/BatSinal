import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

type Props = {
    navigation: NavigationProp<Record<string, object>>;
};

const SplashScreen: React.FC<Props> = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home', {});

        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/icon1.png')}
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 60,
    },

});

export default SplashScreen;
