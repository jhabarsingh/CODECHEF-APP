import React from 'react';
import { View, Linking, Text, StyleSheet, Image, Pressable } from 'react-native';

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
        fontSize: 13,
        color: '#000',
        marginBottom: 10,
        padding: 5,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'

    },
    description: {
        flex: 1,
        padding: 10,
        backgroundColor: '#3196FF',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        height: 50,
        width: 50,
    },
    button: {
        borderRadius: 8,
        padding: 6,
        height: 50,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'cyan',
    },
      buttonText: {
        fontSize: 16,
        color: 'white',
      }
});

const userDetail = ({data, contests, questions}) => (
    <View style={styles.container}>
        <View style={styles.container_text}>
            <Text style={styles.title}>
                {data.name}
            </Text>
            <Pressable 
                style={styles.name} 
                onPress={() => Linking.openURL(url)}
                title={data.name}
               android_ripple={{color: 'blue'}}
            >
               <Text style={styles.buttonText}>{data.name}</Text>
            </Pressable>
        </View>

    </View>
);

export default userDetail;