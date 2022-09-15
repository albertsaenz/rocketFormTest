import {
    Text,
    View,
    Image,
    Animated,
    Alert,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'

const oneSecond = 60000

const Header: React.FC = () => {
    const [animation] = useState(new Animated.Value(0))
    const [minutes, setMinutes] = useState(5)

    const animationBar = Animated.timing(animation, {
        toValue: 100,
        duration: oneSecond * 5,
        useNativeDriver: false,
    })
    useEffect(() => {
        animationBar.start()
    }, [animationBar])

    useEffect(() => {
        if (minutes !== 0) {
            const updateTimeText = setInterval(() => {
                setMinutes(minutes - 1)
            }, oneSecond)
            return () => clearInterval(updateTimeText)
        }
        Alert.alert(
            'Tiempo ha terminado',
            'Tu tiempo de acabo, intentalo de nuevo',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        animationBar.reset()
                        setMinutes(5)
                    },
                },
            ],
        )

        return undefined
    }, [animationBar, minutes])

    const interpolation = animation.interpolate({
        inputRange: [0, 100],
        outputRange: ['0%', '100%'],
    })
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerContentWrapper}>
                <View style={styles.formDescriptionWrapper}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Formulario de registro</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Image
                            style={styles.timeImg}
                            source={require('../../../assets/time.png')}
                        />
                        <Text style={styles.timeText}>
                            En menos de
                            {' '}
                            { minutes }
                            {' '}
                            minutos
                        </Text>
                    </View>
                </View>
                <View style={styles.imageFormContainer}>
                    <Image
                        style={styles.formImage}
                        source={require('../../../assets/notepad.png')}
                    />
                </View>
            </View>
            <Animated.View style={[styles.timeProgress, { width: interpolation }]} />
        </View>
    )
}

export default Header
