import { View, Image } from 'react-native'
import React from 'react'
import styles from './style'

type Props = {
    children?: React.ReactNode;
}
const FormBase: React.FC<Props> = ({
    children,
}) => (
    <View style={styles.container}>
        <View style={styles.profileWrapper}>
            <View style={styles.imageBackground}>
                <Image
                    style={styles.profileImg}
                    source={require('../../../assets/profilePhoto.jpeg')}
                />
            </View>
        </View>
        <View style={styles.chatWrapper}>
            {children}
        </View>
    </View>
)

export default FormBase
