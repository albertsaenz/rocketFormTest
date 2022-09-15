import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

type Props = {
    responseText: string;
}
const FormResponse: React.FC<Props> = ({
    responseText,
}) => (
    <View style={styles.container}>
        <Text style={styles.text}>{responseText}</Text>
    </View>
)

export default FormResponse
