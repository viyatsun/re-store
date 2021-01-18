
const initialState = {
    books: [],
    loading: true,
    error:null,
    cartItem: [],
    orderTotal: 900
}

const updateCartItem = (book, item = {}, quantity) => {

    const {id = book.id, 
        count = 0, 
        title = book.title, 
        total = 0 } = item;

    return {
        id,
        title,
        count: count+quantity,
        total: total + quantity*book.price

    }
}

const updateCartItems = (cartItems, item, idx) => {
    if (item.count === 0) {
        return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx + 1)

        ]
    }

    if (idx === -1){
        return [
            ...cartItems, item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateOrder = (state, bookId, quantity ) => {
    const {books, cartItem} = state;
    const book = books.find(({id})=>id === bookId);
    const itemIndex = cartItem.findIndex(({id})=>id === bookId);
    const item = cartItem[itemIndex];
    const newItem = updateCartItem(book, item, quantity)
   
        return {...state, 
            cartItem:updateCartItems(cartItem, newItem, itemIndex)
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BOOKS_REQEST":
            return {
                ...state,
                books:[],
                loading:true,
                error:null
            };

        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books: action.payload,
                loading:false,
                error:null
            };

        case "FETCH_BOOKS_FAILOR":
            return {
                ...state,
                books: [],
                loading:false,
                error:action.payload
            };
        case "BOOK_ADDED_TO_CART":
            return updateOrder(state, action.payload, 1);
        case "BOOK_REMOVED_FROM_CART":
            return updateOrder(state, action.payload, -1);


        case "ALL_BOOKS_REMOVED_FROM_CART":
            const item = state.cartItem.find(({id})=> id === action.payload);
            console.log(item)
            return updateOrder(state, action.payload, -item.count);
            

            default:
                return state;
    }
};

export default reducer;