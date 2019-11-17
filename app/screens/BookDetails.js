import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { Text, View, Thumbnail } from "native-base";
import axios from "axios";


const BookDetails = ({ navigation }) => {
    const [details, setDetails] = useState(null);

    // ComponentDidMount
    useEffect(() => {
        const id = navigation.getParam('id', '');

        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(
                response => {
                    setDetails(response.data.volumeInfo);
                },
                error => console.log(error)
            )
    }, []);

    const authorsList = details ? details.authors.map((item) =>
        <Text key={item}>{item}</Text>
    ) : 'No authors info!';

    if (details) {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Thumbnail
                            style={{ flex: 1 }}
                            square
                            source={details.imageLinks ?
                                { uri: details.imageLinks.small }
                                : require('../../assets/icon.png')}>
                        </Thumbnail>
                    </View>
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <Text>
                            {details.title}
                        </Text>
                        <Text>
                            {details.subtitle}
                        </Text>
                        {authorsList}
                    </View>
                </View>
                <View style={{ flex: 8 }}>
                    <Text>
                        {details.description}
                    </Text>
                </View>
            </ScrollView>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
        </View>
    )
};

export default BookDetails;