import * as TYPES from '../action-type';
 import {getBooksNumber} from '../../api/books'

let book={
    get_number(){
        return async dispatch => {
            let Data = await getBooksNumber();
            dispatch({
                type: TYPES.GET_NUMBER,
                Data
            });
        }
    },

};

export default book;
