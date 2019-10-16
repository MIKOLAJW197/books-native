import { Body, Button, Header, Icon, Left, ListItem, Right, Text, Thumbnail, Title, View } from "native-base";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FlatList, ActivityIndicator } from 'react-native';

const BookSearchResults = ({ navigation }) => {
    const [books, setBooks] = useState([]);

    const query = navigation.getParam('query', 'no param');
    // ComponentDidMount
    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
            .then(
                response => setBooks(response.data.items),
                error => console.log(error)
            )
    }, []);

    const renderItem = ({ item }) => (
        <ListItem
            thumbnail
            onPress={() => {
                navigation.navigate('BookDetails', { id: item.id });
            }}>
            <Thumbnail
                square
                source={item.volumeInfo.imageLinks ?
                    { uri: item.volumeInfo.imageLinks.smallThumbnail }
                    : require('/assets/icon.png')}>
            </Thumbnail>
            <Body>
                <Text>
                    {item.volumeInfo.title}
                </Text>
                <Text note numberOfLines={1}>
                    {item.volumeInfo.description}
                </Text>
            </Body>
            <Right>
                <Button transparent onPress={() => {
                    navigation.navigate('BookDetails', { id: item.id });
                }}>
                    <Icon name="md-arrow-forward" />
                </Button>
            </Right>
        </ListItem >
    );

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <Icon name="md-arrow-back" />
                    </Button>
                </Left>
                <Body style={{ flex: 3 }}>
                    <Title>
                        Search Results for: {query}
                    </Title>
                </Body>
                <Right>

                </Right>
            </Header>
            <FlatList
                data={books}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
                </View>
                }>
            </FlatList>
        </View>);

};

BookSearchResults.navigationOptions = {
    header: null
};

export default BookSearchResults;