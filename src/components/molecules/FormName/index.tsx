import React, { useEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import FormBase from '../FormBase'
import FormResponse from '../FormResponse'
import styles from '../FormName/style'

type nameDataProps = {
    name: string;
    firstLastname: string;
    secondLastName: string;
    secondName: string;
}
type Props = {
    onSetNameData: (data: nameDataProps) => void;
}

const FormName: React.FC<Props> = ({
    onSetNameData,
}) => {
    const [name, setName] = useState('')
    const [firstLastname, setFirstLastname] = useState('')
    const [secondLastName, setSecondLastName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [responseText, setResponseText] = useState('')
    const [showResponse, setshowResponse] = useState(false)

    useEffect(() => {
        if (name || firstLastname || secondLastName || secondName) {
            const response = `${name}${secondName ? ` ${secondName} ` : ' '}${firstLastname} ${secondLastName}`
            const nameData = {
                name,
                firstLastname,
                secondLastName,
                secondName,
            }
            onSetNameData(nameData)
            setshowResponse(true)
            setResponseText(response)
        } else {
            setshowResponse(false)
        }
    }, [firstLastname, name, onSetNameData, secondLastName, secondName])

    return (
        <FormBase>
            <View style={styles.formWrapper}>
                <Text style={styles.title}>Cual es tu nombre?</Text>
                <TextInput
                    placeholder="Nombre"
                    placeholderTextColor="#000000"
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Segundo nombre"
                    value={secondName}
                    onChangeText={setSecondName}
                    placeholderTextColor="#000000"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Apellido paterno"
                    value={firstLastname}
                    onChangeText={setFirstLastname}
                    placeholderTextColor="#000000"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Apellido materno"
                    value={secondLastName}
                    onChangeText={setSecondLastName}
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

export default FormName
