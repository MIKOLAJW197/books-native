import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Text, View } from "native-base";
import axios from "axios";


const BookDetails = ({ navigation }) => {
    const [details, setDetails] = useState(null);

    // ComponentDidMount
    useEffect(() => {
        const id = navigation.getParam('id', '');

        axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(
                response => {
                    setDetails(response.data);
                },
                error => console.log(error)
            )
    }, []);

    if (details) {
        return (
            <View style={{ flex: 1 }}>
                <Text>
                    {details.volumeInfo.title}
                </Text>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
        </View>
        )
    };
    
export default BookDetails;