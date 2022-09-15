import React, { useState, useRef, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native'
import Header from '../../molecules/Header'
import FormName from '../../molecules/FormName'
import FormDateOfBirth from '../../molecules/FormDateOfBirth'
import FormContactData from '../../molecules/FormContactData'
import styles from './style'

type nameDataProps = {
    name?: string;
    firstLastname?: string;
    secondLastName?: string;
    secondName?: string;
}

type dateOfBirthDataProps = {
    day?: string;
    month?: string;
    year?: string;
}

type contactDataProps = {
    email?: string;
    phone?: string;
}

const FormChat = () => {
    const chatScroll = useRef<ScrollView>(null)
    const [nameData, setNameData] = useState<nameDataProps>({})
    const [dateOfBirthData, setDateOfBirthData] = useState<dateOfBirthDataProps>({})
    const [contactData, setSetContactData] = useState<contactDataProps>({})
    const [start, setStart] = useState(false)

    const [isFormNameCompleted, setIsFormNameCompleted] = useState(false)
    const [isFormDateBirthDayCompleted, setIsFormDateBirthDayCompleted] = useState(false)
    const [isFormContactCompleted, setIsFormContactCompleted] = useState(false)

    useEffect(() => {
        if (!!nameData.name
            && !!nameData.firstLastname
            && !!nameData.secondLastName
            && !isFormNameCompleted) {
            setIsFormNameCompleted(true)
            chatScroll.current?.scrollTo({ y: 10000000 })
        }
        if (!!dateOfBirthData.day
            && !!dateOfBirthData.month && !!dateOfBirthData.year
            && !isFormDateBirthDayCompleted) {
            setIsFormDateBirthDayCompleted(true)
            chatScroll.current?.scrollTo({ y: 10000000 })
        }
        if (contactData.email
            && contactData.phone
            && !isFormContactCompleted) {
            setIsFormContactCompleted(true)
            chatScroll.current?.scrollTo({ y: 1000000 })
        }
    }, [
        contactData.email,
        contactData.phone,
        dateOfBirthData.day,
        dateOfBirthData.month,
        dateOfBirthData.year,
        isFormNameCompleted,
        isFormDateBirthDayCompleted,
        isFormContactCompleted,
        nameData.firstLastname,
        nameData.name,
        nameData.secondLastName,
    ])

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.scrollContainer}>
                <ScrollView
                    ref={chatScroll}
                >
                    <FormName onSetNameData={setNameData} />
                    {isFormNameCompleted && (
                        <FormDateOfBirth onSetDateOfBirthData={setDateOfBirthData} />
                    )}
                    {isFormDateBirthDayCompleted && (
                        <FormContactData onSetContactData={setSetContactData} />
                    )}
                    {isFormContactCompleted && (
                        <>
                            <View style={styles.dataConfirm}>
                                <Text
                                    style={styles.dataConfirmText}
                                >
                                    Si tus datos son correctos porfavor continuemos
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={styles.buttonStart}
                                onPress={() => setStart(true)}
                            >
                                <Text style={styles.buttonText}>Iniciar</Text>
                            </TouchableOpacity>

                        </>
                    )}
                    {start && (
                        <View style={styles.dataContainer}>
                            <Text
                                style={styles.dataConfirmText}
                            >
                                Fecha de nacimiento:
                                {' '}
                                {dateOfBirthData.day}
                                {' '}
                                {dateOfBirthData.month}
                                {' '}
                                {dateOfBirthData.year}
                            </Text>
                            <Text
                                style={styles.dataConfirmText}
                            >
                                Correo electronico:
                                {' '}
                                {contactData.email}
                            </Text>
                            <Text
                                style={styles.dataConfirmText}
                            >
                                Telefono celular:
                                {' '}
                                {contactData.phone}
                            </Text>
                            <Text
                                style={styles.dataConfirmText}
                            >
                                Nombre:
                                {' '}
                                {nameData.name}
                                {nameData.secondName ? ` ${nameData.secondName} ` : ' '}
                                {nameData.firstLastname}
                                {' '}
                                {nameData.secondLastName}
                            </Text>
                        </View>
                    )}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default FormChat
