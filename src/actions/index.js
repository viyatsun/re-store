const booksRequested = () => {
    return {
        type:'FETCH_BOOKS_REQEST'
    };
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};


const booksError = (error) => {
    return {
        type:'FETCH_BOOKS_FAILURE',
        payload:error
    };
};

const bookAddedToCart = (bookId) => {
    return {
        type: "BOOK_ADDED_TO_CART",
        payload:bookId
    }
};


const bookRemovedFromCart = (bookId) => {
    return {
        type: "BOOK_REMOVED_FROM_CART",
        payload:bookId
    }
};


const allBooksRemovedFromCart = (bookId) => {
    return {
        type: "ALL_BOOKS_REMOVED_FROM_CART",
        payload:bookId
    }
};

const fetchBooks = (dispatch, bookstoreService) => ()=> {

    dispatch(booksRequested());
    bookstoreService.getBooks()
    .then((data)=> dispatch(booksLoaded(data)))
    .catch((data)=> dispatch(booksError(data)))
    }

export {
    fetchBooks,
    bookAddedToCart,
    bookRemovedFromCart,
    allBooksRemovedFromCart
};