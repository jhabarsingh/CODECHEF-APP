import React from 'react';
import { View, Linking, Text, StyleSheet, Image } from 'react-native';
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
        opacity: .7,
        elevation: 2,
        color: 'white'
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
        fontSize: 10,
        fontStyle: 'italic',
        margin: 4,
        padding: 2
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const getmonth = (day) => {
    let map = new Map();
    map["1"] = "Jan";
    map["2"] = "Feb";
    map["3"] = "Mar";
    map["4"] = "Apr";
    map["5"] = "May";
    map["6"] = "Jun";
    map["7"] = "Jul";
    map["8"] = "Aug";
    map["9"] = "Sep";
    map["10"] = "Oct";
    map["11"] = "Nov";
    map["12"] = "Dec";
    return map[day];
}

const ContestDetail = ({ name, day, month, year, rating, rank, color }) => (

    <View style={{...styles.container, backgroundColor:color}}>
        <View style={styles.container_text}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>
                {name}
            </Text>
            
            <Text style={styles.description}>
                <Badge  value={`Rating - ${rating}`} status="warning" />
            </Text>
            <Text style={styles.description}>
                <Badge  value={`Rank - ${rank}`} status="primary" />
            </Text>

            <Text style={styles.description}>
                {`${day} - ${getmonth(month)} - ${year}`}
            </Text>
        </View>

    </View>
);

export default ContestDetail;