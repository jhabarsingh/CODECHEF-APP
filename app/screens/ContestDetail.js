import React from 'react';
import { View, Linking, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const ContestDetail = ({ name, day, month, year, rating, color }) => (
    <View style={styles.container}>
        <View style={styles.container_text}>
            <Text >
                {name}
            </Text>
            <Text style={styles.description}>
                {day}
            </Text>
        </View>

    </View>
);

export default ContestDetail;