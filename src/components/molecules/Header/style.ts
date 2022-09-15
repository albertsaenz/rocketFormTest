import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        backgroundColor: '#F173DE',
    },
    headerContentWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    formDescriptionWrapper: {
        flex: 2,
    },
    imageFormContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    formImage: {
        width: 65,
        height: 65,
    },
    titleContainer: {
        flex: 1.8,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    timeContainer: {
        flex: 2,
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    timeText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    timeProgress: {
        height: 5,
        backgroundColor: '#DD4D85',
    },
    timeImg: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
})

export default styles
