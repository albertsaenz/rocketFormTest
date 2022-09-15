import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: '6%',
    },
    profileImg: {
        width: 55,
        height: 75,
        borderRadius: 30,
    },
    profileWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    chatWrapper: {
        flex: 3,
        height: '100%',
    },
    imageBackground: {
        padding: 1,
        borderRadius: 30,
        borderStyle: 'solid',
        borderColor: '#F173DE',
        borderWidth: 3,
    },
})

export default styles
