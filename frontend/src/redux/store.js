import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {composeWithDevTools,} from 'redux-devtools-extension';

//reducer
import {cartReducer} from './reducers/cartReducers'
import {getProductReducer, getProductDetailsReducer} from './reducers/productReducers'

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer     
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;