import {createStackNavigator} from 'react-navigation-stack';
import BookSearch from "./screens/BookSearch";
import BookSearchResults from "./screens/BookSearchResults";
import BookDetails from "./screens/BookDetails";

const BookSearchNavigation = createStackNavigator({
    BookSearch: {
        screen: BookSearch
    },
    BooksSearchResults: {
        screen: BookSearchResults
    },
    BookDetails: {
        screen: BookDetails
    }
});

export default BookSearchNavigation;