import React, { useEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import FormBase from '../FormBase'
import styles from '../FormName/style'
import FormResponse from '../FormResponse'

type contactDataProps = {
    email?: string;
    phone?: string;
}

type Props = {
    onSetContactData: (data: contactDataProps) => void;
}

const FormContactData: React.FC<Props> = ({
    onSetContactData,
}) => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [responseText, setResponseText] = useState('')
    const [showResponse, setshowResponse] = useState(false)

    useEffect(() => {
        if (email || phone) {
            const response = `Correo electronico: ${email}\nTelefono celular: ${phone}`
            const contactData = {
                email,
                phone,
            }
            onSetContactData(contactData)
            setshowResponse(true)
            setResponseText(response)
        } else {
            setshowResponse(false)
        }
    }, [email, onSetContactData, phone])

    return (
        <FormBase>
            <View style={styles.formWrapper}>
                <Text style={styles.title}>Datos de contacto</Text>
                <TextInput
                    placeholder="Correo electronico"
                    value={email}
                    onChangeText={setEmail}
                    placeholderTextColor="#000000"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Telefono celular"
                    value={phone}
                    onChangeText={setPhone}
                    placeholderTextColor="#000000"
                    style={styles.input}
                />
            </View>
            {showResponse && (
                <FormResponse responseText={responseText} />
            )}
        </FormBase>
    )
}

export default FormContactData
