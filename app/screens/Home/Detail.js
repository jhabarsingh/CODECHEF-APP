import React from 'react';
import { View, Linking, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Card, Icon, Avatar, Badge } from 'react-native-elements'

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
    },
    each: {
        padding: 1  
    },
    text: {
        margin: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    text1: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 11,
        textTransform: 'uppercase'
    },
    text3: {
        marginLeft: 10,
        marginTop: 5,
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

const userDetail = ({data, contests, questions}) => {
    const stars = (num) => {
        let i = Number.parseInt(num);
        let j = 0;
        let icons = []
        for(j;j<i; j++) {
            icons.push(<Icon
                name='star'
                key={j.toString()} 
            />)
            
        }
        return icons;
    }

    return(
        !("profile_pic" in data) ? (<Text style={{flex: 1, justifyContent:'center'}} >Loading....</Text>) : (
        <Card>
            <Card.Title style={{fontSize: 20, fontWeight: 'bold'}} >
            <Avatar
                rounded
                source={{
                    uri: data["profile_pic"]
                }}
            />
            </Card.Title>
            <Card.Divider/>

            <View>
                <Text style={styles.text}>
                    {data.name}
                </Text>
                <Text style={styles.text}>
                    <Badge value={data["rating"]} status="error" />
                </Text>
                <Text style={styles.text1}>
                    {`${data["City:"]}, ${data["Country:"]}`}
                </Text>
                <Text style={styles.text1}>
                    {`${data["Institution:"]}`}
                </Text>
                
                <Text style={styles.text3}>
                    {
                        stars(data["stars"])
                    }
                </Text>


            </View>
        </Card>)
    );
}

export default userDetail;