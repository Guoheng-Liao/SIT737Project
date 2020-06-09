import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../Constants/ProductConstant"
import Axios from "axios";

const ListProduct = () => async(dispatch) => {
    try{

        dispatch( {type: PRODUCT_LIST_REQUEST} );
        const { data } = await Axios.get("/shopping");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
    }catch(error){
        
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
    }
}

export { ListProduct }