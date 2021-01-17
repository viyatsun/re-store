import React, {Component} from 'react';
import BookListItem from '../book-list-item';
import {connect} from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded, booksRequested, booksError} from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookList  extends Component {

    componentDidMount (){
        const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
        booksRequested();
        bookstoreService.getBooks()
            .then((data)=> booksLoaded(data))
            .catch((data)=> booksError(data))
    }

    render () {

    const {books, loading, error} = this.props;

    if (loading) {
        return <Spinner/>
    }

    if(error){
        return <ErrorIndicator/>
    }
    
    return (
        <ul className = 'book-list'>
            {
                books.map((book)=> {
                    return (
                        <li key = {book.id}>
                            <BookListItem book = {book}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

const mapDispathToProps = {
    booksLoaded, booksRequested,booksError
}

export default withBookstoreService()(
    connect(mapStateToProps, mapDispathToProps)(BookList));