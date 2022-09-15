import React, { useEffect, useState } from 'react'
import { Text, View, TextInput } from 'react-native'
import FormBase from '../FormBase'
import styles from '../FormName/style'
import FormResponse from '../FormResponse'

type dateOfBirthDataProps = {
    day?: string;
    month?: string;
    year?: string;
}

type Props = {
    onSetDateOfBirthData: (data: dateOfBirthDataProps) => void;
}

const FormDateOfBirth: React.FC<Props> = ({
    onSetDateOfBirthData,
}) => {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [responseText, setResponseText] = useState('')
    const [showResponse, setshowResponse] = useState(false)

    useEffect(() => {
        if (day || month || year) {
            const response = `${day} ${month} ${year}`
            const dateBirthDayData = {
                day,
                month,
                year,
            }
            onSetDateOfBirthData(dateBirthDayData)
            setshowResponse(true)
            setResponseText(response)
        } else {
            setshowResponse(false)
        }
    }, [day, month, onSetDateOfBirthData, year])

    return (
        <FormBase>
            <View style={styles.formWrapper}>
                <Text style={styles.title}>Cual es tu fecha de nacimiento?</Text>
                <TextInput
                    placeholder="Dia"
                    value={day}
                    onChangeText={setDay}
                    placeholderTextColor="#000000"
                    style={styles.input}
                    keyboardType="number-pad"
                />
                <TextInput
                    placeholder="Mes"
                    value={month}
                    onChangeText={setMonth}
                    placeholderTextColor="#000000"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Año"
                    value={year}
                    onChangeText={setYear}
                    placeholderTextColor="#000000"
                    style={styles.input}
                    keyboardType="numeric"
                />
            </View>
            {showResponse && (
                <FormResponse responseText={responseText} />
            )}
        </FormBase>
    )
}

export default FormDateOfBirth
