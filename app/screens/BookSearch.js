import React, {useState} from 'react';
import {Button, Form, Header, Icon, Input, Item, Text, View} from 'native-base'

const BookSearch = ({navigation}) => {
    const [value, onChange] = useState('');

    const handleChangeSubmit = (query) => {
        navigation.navigate('BooksSearchResults', {query: query});
    };

    return (
        <View style={{flex: 1}}>
            <Form>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search"/>
                        <Input placeholder="Search for books..."
                               onSubmitEditing={() => {
                                   handleChangeSubmit(value)
                               }}
                               onChangeText={(text) => {
                                   onChange(text)
                               }}
                               value={value}/>
                    </Item>
                    <Button transparent onPress={() => {
                        handleChangeSubmit(value)
                    }}>
                        <Text>
                            Search
                        </Text>
                    </Button>
                </Header>
            </Form>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Google BookSearch in ReactNative</Text>
                <Text>Author Mikołaj Wolicki</Text>
            </View>
        </View>
    )
};

BookSearch.navigationOptions = {
    header: null,
};

export default BookSearch;