import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { ProductListReducer, ProductDetailsReducer, ProductSaveReducer } from '../reducers/productReducer';
import { CartReducer } from '../reducers/CartReducer';
import Cookie from "js-cookie";
import { userLoginReducer, userRegisterReducer } from '../reducers/UserReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState={ cart: { cartItems, shipping:{}, payment:{} }, userLogin: {userInfo} };
const reducer = combineReducers({
    ProductList: ProductListReducer, 
    ProductDetails: ProductDetailsReducer,
    cart: CartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    ProductSave: ProductSaveReducer, 
    ProductDelete: ProductDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;